/**
 * Get the relative path depth
 * Returns the appropriate path prefix
 */
function getRelativePrefix() {
  const path = window.location.pathname;
  const parts = path.split('/').filter(Boolean);
  return '../'.repeat(parts.length - 1);
}

/**
 * Convert any path to be relative to the current page location
 * @param {string} path
 * @returns {string}
 */
function getPath(path) {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:')) return path;
  if (!path) return './';
  return path.startsWith('/') ? path.slice(1) : path;
}

/**
 * Get the correct resource path relative to the current page
 * @param {string} path
 * @returns {string}
 */
function getResourcePath(path) {
  return getPath(path);
}

/**
 * Get idea ID from URL query parameter
 * @returns {number|null}
 */
function getIdeaId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'), 10) || null;
}

/**
 * Find idea by ID
 * @param {number} id
 * @returns {object|undefined}
 */
function findIdeaById(id) {
  return ideasData.find((idea) => idea.id === id);
}

document.addEventListener('DOMContentLoaded', () => {
  const ideaId = getIdeaId();
  const idea = findIdeaById(ideaId);
  renderIdeaDetails(idea);
});

const departmentClass = 'other';

/**
 * Render idea details on the page
 * @param {object} idea
 */
function renderIdeaDetails(idea) {
  if (!idea) {
    window.location.href = getPath('');
    return;
  }

  // Page title
  document.title = `${idea.title} | AI Idea Book`;

  document.getElementById('idea-title').textContent = idea.title;
  document.getElementById('idea-author').textContent = idea.author;
  document.getElementById('idea-department').textContent =
    idea.department.charAt(0).toUpperCase() + idea.department.slice(1);

  const date = new Date(idea.date);
  document.getElementById('idea-date').textContent = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  document.getElementById('idea-description').innerHTML = idea.description;

  renderResource(idea);

  const allTags = [
    ...idea.tags,
    ...idea.aiTools.map((tool) => tool.charAt(0).toUpperCase() + tool.slice(1)),
    ...idea.useCases.map((useCase) =>
      useCase
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    ),
  ];
  renderSidebarTags(allTags);

  const contactAuthorLink = document.getElementById('contact-author');
  const authorEmail = idea.email || 'example@stthomas.edu';
  contactAuthorLink.href = `mailto:${authorEmail}?subject=Question about your AI idea: ${idea.title}`;

  renderRelatedIdeas(idea);
}

/**
 * Render related ideas in the sidebar
 * @param {object} currentIdea
 */
function renderRelatedIdeas(currentIdea) {
  const container = document.getElementById('related-ideas-container');
  if (!container) return;

  let relatedIdeas = ideasData.filter((idea) => {
    if (idea.id === currentIdea.id) return false;
    return (
      idea.department === currentIdea.department ||
      idea.aiTools.some((tool) => currentIdea.aiTools.includes(tool)) ||
      idea.useCases.some((useCase) => currentIdea.useCases.includes(useCase))
    );
  });

  // Limit to 3 related ideas
  relatedIdeas = relatedIdeas.slice(0, 3);

  if (!relatedIdeas.length) {
    container.innerHTML = '<p>No related ideas found.</p>';
    return;
  }

  container.innerHTML = '';
  relatedIdeas.forEach((idea) => container.appendChild(createIdeaCard(idea)));
}

/**
 * Infer resource type from URL
 * @param {string} url
 * @returns {string}
 */
function getResourceTypeFromUrl(url) {
  const ext = url.split('.').pop().toLowerCase().split('?')[0].split('#')[0];
  const audio = ['mp3', 'wav', 'ogg', 'aac', 'm4a'];
  const pdf = ['pdf'];
  const office = ['doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx'];
  const video = ['mp4', 'webm', 'mov', 'avi'];
  const image = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'svg', 'webp'];

  if (audio.includes(ext)) return 'audio';
  if (pdf.includes(ext)) return 'pdf';
  if (office.includes(ext)) return 'office';
  if (video.includes(ext)) return 'video';
  if (image.includes(ext)) return 'image';
  if (url.startsWith('http')) return 'url';
  return 'other';
}

/**
 * Render resource section for an idea
 * @param {object} idea
 */
function renderResource(idea) {
  const section = document.getElementById('idea-resource');
  if (!section) return;

  section.innerHTML = '';

  if (!idea.resourceUrl) {
    section.innerHTML = '<p>No resource available</p>';
    return;
  }

  const url = getResourcePath(idea.resourceUrl);
  const type = getResourceTypeFromUrl(url);
  const isClaude = url.includes('claude.site/artifacts');
  const isPanopto = url.includes('stthomas.hosted.panopto.com');
  const iframeId = 'resource-iframe';

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'resource-buttons';

  const openBtn = document.createElement('a');
  openBtn.href = url;
  openBtn.target = '_blank';
  openBtn.className = 'btn btn-primary';
  openBtn.innerHTML = '<i class="fas fa-external-link-alt"></i> Open in New Tab';

  const downloadBtn = document.createElement('a');
  downloadBtn.href = url;
  downloadBtn.download = '';
  downloadBtn.className = 'btn btn-primary';
  downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download';

  if (['pdf', 'image', 'video'].includes(type)) {
    buttonsContainer.append(openBtn, downloadBtn);
  } else if (type === 'url' || isClaude) {
    buttonsContainer.appendChild(openBtn);
  } else if (['office', 'audio'].includes(type)) {
    buttonsContainer.appendChild(downloadBtn);
  } else {
    buttonsContainer.append(openBtn, downloadBtn);
  }

  section.appendChild(buttonsContainer);

  // Resource content
  const content = document.createElement('div');
  content.className = 'resource-content';
  section.appendChild(content);

  if (isPanopto) {
    content.innerHTML = `
      <div class="video-container resource-has-fullscreen" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
        <iframe src="${url}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allow="autoplay" allowfullscreen></iframe>
      </div>`;
    return;
  }

  if (isClaude) {
    content.innerHTML = `
      <div class="resource-message">
        <div class="message-content">
          <i class="fas fa-exclamation-circle"></i>
          <p>This resource cannot be displayed directly due to security restrictions.</p>
          <p>Please click the <b>Open in New Tab</b> button above to view the content.</p>
        </div>
      </div>`;
    return;
  }

  switch (type) {
    case 'pdf':
    case 'url':
      content.innerHTML = `
        <iframe id="${iframeId}" src="${url}" style="width: 100%; height: 480px; border: none;" allowfullscreen></iframe>`;
      break;
    case 'video':
      content.innerHTML = `
        <video id="dynamic-video" controls style="max-width: 100%; max-height: 720px; display: block; margin: auto;">
          <source src="${url}">
          Your browser does not support the video tag.
        </video>`;
      break;
    case 'audio':
      content.innerHTML = `
        <audio id="audio-player" src="${url}" controls preload="metadata"></audio>`;
      break;
    case 'image':
      content.innerHTML = `
        <img id="dynamic-image" src="${url}" alt="Resource Image" style="max-width: 100%; max-height: 720px; display: block; margin: auto;">`;
      break;
    case 'office':
    default:
      content.innerHTML = `
        <div class="resource-message">
          <div class="message-content">
            <i class="fas fa-exclamation-circle"></i>
            <p>This resource cannot be embedded. Please use the buttons above to access the file.</p>
          </div>
        </div>`;
      break;
  }
}

/**
 * Render sidebar tags with expand/collapse functionality
 * @param {Array<string>} tags
 */
function renderSidebarTags(tags) {
  const tagsList = document.getElementById('tags-list');
  if (!tagsList) return;

  tagsList.innerHTML = '';
  const maxVisible = 5;
  let expanded = false;

  const render = () => {
    tagsList.innerHTML = '';
    const visibleTags = expanded ? tags : tags.slice(0, maxVisible);

    visibleTags.forEach((tag) => {
      const el = document.createElement('span');
      el.className = 'tag';
      el.textContent = tag;
      tagsList.appendChild(el);
    });

    if (tags.length > maxVisible) {
      const toggle = document.createElement('span');
      toggle.className = 'tag more-tags';
      toggle.style.cursor = 'pointer';
      toggle.textContent = expanded ? 'Show less' : `+${tags.length - maxVisible} more`;
      toggle.onclick = () => {
        expanded = !expanded;
        render();
      };
      tagsList.appendChild(toggle);
    }
  };

  render();
}
