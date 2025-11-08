/**
 *idea-detail.js
 *
 * This file handles:
 * - Loading and displaying individual idea details
 * - Rendering resources (PDFs, videos, images, etc.)
 * - Displaying tags and metadata
 * - Showing related ideas
 * - Contact author functionality
 */

/**
 * UTILITY FUNCTIONS
 */

/**
 * Convert any path to be relative to the current page location
 * @param {string} path - The path to convert
 * @returns {string} - The resolved path
 */
function getPath(path) {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("mailto:")) return path;
  if (!path) return "./";
  return path.startsWith("/") ? path.slice(1) : path;
}

/**
 * Get the correct resource path relative to the current page
 * @param {string} path - The resource path
 * @returns {string} - The resolved resource path
 */
function getResourcePath(path) {
  return getPath(path);
}

/**
 * Get idea ID from URL query parameter
 * @returns {number|null} - The idea ID or null if not found
 */
function getIdeaId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"), 10) || null;
}

/**
 * Find idea by ID from the ideasData array
 * @param {number} id - The idea ID to find
 * @returns {Object|undefined} - The idea object or undefined
 */
function findIdeaById(id) {
  return ideasData.find((idea) => idea.id === id);
}

/**
 * Infer resource type from URL extension
 * @param {string} url - The resource URL
 * @returns {string} - The resource type
 */
function getResourceTypeFromUrl(url) {
  const ext = url.split(".").pop().toLowerCase().split("?")[0].split("#")[0];

  const typeMap = {
    audio: ["mp3", "wav", "ogg", "aac", "m4a"],
    pdf: ["pdf"],
    office: ["doc", "docx", "ppt", "pptx", "xls", "xlsx"],
    video: ["mp4", "webm", "mov", "avi"],
    image: ["png", "jpg", "jpeg", "gif", "bmp", "svg", "webp"],
  };

  for (const [type, extensions] of Object.entries(typeMap)) {
    if (extensions.includes(ext)) return type;
  }

  return url.startsWith("http") ? "url" : "other";
}

/**
 * IDEA DETAILS RENDERING
 */

/**
 * Render complete idea details on the page
 * @param {Object} idea - The idea object to render
 */
function renderIdeaDetails(idea) {
  if (!idea) {
    // Redirect to home if idea not found
    window.location.href = getPath("");
    return;
  }

  // Update page title
  document.title = `${idea.title} | AI Idea Book`;

  // Populate info
  document.getElementById("idea-title").textContent = idea.title;
  document.getElementById("idea-author").textContent = idea.author;
  document.getElementById("idea-department").textContent =
    idea.department.charAt(0).toUpperCase() + idea.department.slice(1);

  // Format and display date
  const date = new Date(idea.date);
  document.getElementById("idea-date").textContent = date.toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  // Display description
  document.getElementById("idea-description").innerHTML = idea.description;

  // Render resource section
  renderResource(idea);

  // Combine and render all tags
  const allTags = [
    ...idea.tags,
    ...idea.aiTools.map((tool) => tool.charAt(0).toUpperCase() + tool.slice(1)),
    ...idea.useCases.map((useCase) =>
      useCase
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    ),
  ];
  renderSidebarTags(allTags);

  // Setup contact author link
  const contactAuthorLink = document.getElementById("contact-author");
  const authorEmail = idea.email || "example@stthomas.edu";
  contactAuthorLink.href = `mailto:${authorEmail}?subject=Question about your AI idea: ${encodeURIComponent(idea.title)}`;

  // Render related ideas
  renderRelatedIdeas(idea);
}

/**
 * RESOURCE RENDERING
 */

/**
 * Render resource section with appropriate viewer/download options
 * @param {Object} idea - The idea object containing resource info
 */
function renderResource(idea) {
  const section = document.getElementById("idea-resource");
  if (!section) return;

  section.innerHTML = "";

  // Handle no resource case
  if (!idea.resourceUrl) {
    section.innerHTML = `
      <div class="resource-message">
        <p>No resource available</p>
      </div>
    `;
    return;
  }

  const url = getResourcePath(idea.resourceUrl);
  const type = getResourceTypeFromUrl(url);
  const isClaude = url.includes("claude.site/artifacts");
  const isPanopto = url.includes("stthomas.hosted.panopto.com");

  // Create action buttons container
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "resource-buttons";

  // Open in new tab button
  const openBtn = document.createElement("a");
  openBtn.href = url;
  openBtn.target = "_blank";
  openBtn.rel = "noopener noreferrer";
  openBtn.className = "btn btn-primary";
  openBtn.innerHTML =
    '<i class="fas fa-external-link-alt"></i> Open in New Tab';

  // Download button
  const downloadBtn = document.createElement("a");
  downloadBtn.href = url;
  downloadBtn.download = "";
  downloadBtn.className = "btn btn-primary";
  downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download';

  // Add appropriate buttons based on resource type
  if (["pdf", "image", "video"].includes(type)) {
    buttonsContainer.append(openBtn, downloadBtn);
  } else if (type === "url" || isClaude) {
    buttonsContainer.appendChild(openBtn);
  } else if (["office", "audio"].includes(type)) {
    buttonsContainer.appendChild(downloadBtn);
  } else {
    buttonsContainer.append(openBtn, downloadBtn);
  }

  section.appendChild(buttonsContainer);

  // Create resource content container
  const content = document.createElement("div");
  content.className = "resource-content";
  section.appendChild(content);

  // Handle Panopto embedded videos
  if (isPanopto) {
    content.innerHTML = `
      <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
        <iframe 
          src="${url}" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
          allow="autoplay" 
          allowfullscreen
          title="Video Resource">
        </iframe>
      </div>
    `;
    return;
  }

  // Handle Claude artifacts (cannot be embedded)
  if (isClaude) {
    content.innerHTML = `
      <div class="resource-message">
        <i class="fas fa-exclamation-circle"></i>
        <p>This resource cannot be displayed directly due to security restrictions.</p>
        <p>Please click the <strong>Open in New Tab</strong> button above to view the content.</p>
      </div>
    `;
    return;
  }

  // Render based on resource type
  switch (type) {
    case "pdf":
    case "url":
      content.innerHTML = `
        <iframe 
          src="${url}" 
          style="width: 100%; height: 600px; border: 1px solid var(--border); border-radius: var(--radius);" 
          allowfullscreen
          title="Resource Viewer">
        </iframe>
      `;
      break;

    case "video":
      content.innerHTML = `
        <video 
          controls 
          style="max-width: 100%; max-height: 720px; display: block; margin: auto; border-radius: var(--radius);">
          <source src="${url}" />
          Your browser does not support the video tag.
        </video>
      `;
      break;

    case "audio":
      content.innerHTML = `
        <audio 
          src="${url}" 
          controls 
          preload="metadata"
          style="width: 100%; margin: 1rem 0;">
          Your browser does not support the audio element.
        </audio>
      `;
      break;

    case "image":
      content.innerHTML = `
        <img 
          src="${url}" 
          alt="Resource Image" 
          style="max-width: 100%; max-height: 720px; display: block; margin: auto; border-radius: var(--radius);" />
      `;
      break;

    case "office":
    default:
      content.innerHTML = `
        <div class="resource-message">
          <i class="fas fa-info-circle"></i>
          <p>This resource type cannot be embedded directly in the browser.</p>
          <p>Please use the buttons above to download or open the file.</p>
        </div>
      `;
      break;
  }
}

/**
 * SIDEBAR TAGS RENDERING
 */

/**
 * Render tags in the sidebar
 * @param {Array<string>} tags - Array of tag strings
 */
function renderSidebarTags(tags) {
  const tagsList = document.getElementById("tags-list");
  if (!tagsList) return;

  tagsList.innerHTML = "";

  // Create tag elements
  tags.forEach((tag) => {
    const tagElement = document.createElement("li");
    tagElement.className = "tag";
    tagElement.textContent = tag;
    tagsList.appendChild(tagElement);
  });
}

/**
 * RELATED IDEAS RENDERING
 */

/**
 * Render related ideas based on department, tools, or use cases
 * @param {Object} currentIdea - The current idea being viewed
 */
function renderRelatedIdeas(currentIdea) {
  const container = document.getElementById("related-ideas-container");
  if (!container) return;

  // Find related ideas
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

  // Handle no related ideas
  if (!relatedIdeas.length) {
    container.innerHTML = `
      <div class="no-results">
        <p>No related ideas found</p>
      </div>
    `;
    return;
  }

  // Render related idea cards
  container.innerHTML = "";
  relatedIdeas.forEach((idea) => {
    const card = createIdeaCard(idea);
    container.appendChild(card);
  });
}

/**
 * INITIALIZATION
 */

/**
 * Initialize idea detail page when DOM is loaded
 */
document.addEventListener("DOMContentLoaded", () => {
  const ideaId = getIdeaId();
  const idea = findIdeaById(ideaId);
  renderIdeaDetails(idea);
});
