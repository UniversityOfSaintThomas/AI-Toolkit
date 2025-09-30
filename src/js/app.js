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
 */
function getPath(path) {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:')) return path;
  if (!path) return './';

  const currentPath = window.location.pathname;
  const inPagesDir = currentPath.includes('/pages/');
  const inSrcDir = currentPath.includes('/src/');

  if (inPagesDir) return '../../' + path;
  if (inSrcDir) return '../' + path;

  return path;
}

/**
 * Get the correct resource path relative to the current page
 */
function getResourcePath(path) {
  if (/^(https?:)?\/\//.test(path)) return path;
  return getPath(path);
}

// DOM elements
const ideasContainer = document.getElementById('ideas-container');
const departmentFilter = document.getElementById('department');
const aiToolFilter = document.getElementById('ai-tool');
const useCaseFilter = document.getElementById('use-case');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const clearFiltersBtn = document.getElementById('clear-filters');
const ideaCountElement = document.getElementById('idea-count');

// Back to top functionality
function initBackToTop() {
  const footer = document.querySelector('footer .footer-bottom');
  if (!footer) return;

  const backToTopButton = document.createElement('button');
  backToTopButton.id = 'back-to-top';
  backToTopButton.className = 'back-to-top';
  backToTopButton.setAttribute('aria-label', 'Back to top');
  backToTopButton.innerHTML = `
    <svg class="back-to-top-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="m18 15-6-6-6 6"/>
    </svg>
  `;

  footer.appendChild(backToTopButton);

  window.addEventListener('scroll', () => {
    backToTopButton.classList.toggle('visible', window.pageYOffset > 300);
  });

  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Function to render ideas
function renderIdeas(ideas) {
  if (!ideasContainer) return;

  ideasContainer.innerHTML = '';

  if (ideas.length === 0) {
    ideasContainer.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search" style="font-size: 2rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3 style="text-align: center;">No ideas found</h3>
        <p style="text-align: center;">Try adjusting your search</p>
      </div>
    `;
    ideaCountElement.textContent = '0';
    return;
  }

  ideaCountElement.textContent = ideas.length;

  ideas.forEach((idea) => {
    const ideaCard = createIdeaCard(idea);
    ideasContainer.appendChild(ideaCard);
  });
}

// Debounce function for search
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

function createIdeaCard(idea) {
  const ideaCard = document.createElement('a');
  ideaCard.className = 'idea-card';
  ideaCard.href = getPath(`src/pages/idea-detail.html?id=${idea.id}`);

  const date = new Date(idea.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

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

  const maxVisibleTags = 5;
  const visibleTags = allTags.slice(0, maxVisibleTags);
  const remainingTags = allTags.length - maxVisibleTags;

  let tagsHTML = visibleTags.map((tag) => `<span class="tag">${tag}</span>`).join('');
  if (remainingTags > 0) tagsHTML += `<span class="tag more-tags">+${remainingTags}</span>`;

  const resourceIcons = {
    pdf: '<i class="fas fa-file-pdf"></i>',
    doc: '<i class="fas fa-file-word"></i>',
    ppt: '<i class="fas fa-file-powerpoint"></i>',
    spreadsheet: '<i class="fas fa-file-excel"></i>',
    url: '<i class="fas fa-link"></i>',
    image: '<i class="fas fa-image"></i>',
    video: '<i class="fas fa-video"></i>',
    audio: '<i class="fas fa-file-audio"></i>',
    default: '<i class="fas fa-file"></i>',
  };

  const resourceButton = idea.resourceUrl
    ? `<a href="${getResourcePath(idea.resourceUrl)}" target="_blank" class="resource-link" onclick="event.stopPropagation()">${resourceIcons[idea.resourceType] || resourceIcons.default} View Resource</a>`
    : '';

  const validDepartments = ['business', 'education', 'engineering', 'humanities', 'sciences', 'other'];
  const departmentClass = validDepartments.includes(idea.department.toLowerCase())
    ? idea.department.toLowerCase()
    : 'other';

  ideaCard.innerHTML = `
    <div class="idea-header">
      <div class="department-badge ${departmentClass}">${idea.department.charAt(0).toUpperCase() + idea.department.slice(1)}</div>
      <div class="idea-date">${formattedDate}</div>
    </div>
    <h3 class="idea-title">${idea.title}</h3>
    <p class="idea-author">By ${idea.author}</p>
    <p class="idea-description">${idea.description.substring(0, 150)}${idea.description.length > 150 ? '...' : ''}</p>
    <div class="idea-tags">
      <h4>Tags:</h4>
      <div class="tags-list">${tagsHTML}</div>
    </div>
    <div class="idea-resource">${resourceButton}</div>
  `;

  return ideaCard;
}

// Filter ideas based on selected filters and search term
function filterIdeas() {
  const departmentValue = departmentFilter.value;
  const aiToolValue = aiToolFilter.value;
  const useCaseValue = useCaseFilter.value;
  const searchValue = searchInput.value.toLowerCase();

  let filteredIdeas = ideasData;

  if (departmentValue) filteredIdeas = filteredIdeas.filter((idea) => idea.department === departmentValue);
  if (aiToolValue) filteredIdeas = filteredIdeas.filter((idea) => idea.aiTools.includes(aiToolValue));
  if (useCaseValue) filteredIdeas = filteredIdeas.filter((idea) => idea.useCases.includes(useCaseValue));
  if (searchValue) {
    filteredIdeas = filteredIdeas.filter((idea) => {
      return (
        idea.title.toLowerCase().includes(searchValue) ||
        idea.description.toLowerCase().includes(searchValue) ||
        idea.author.toLowerCase().includes(searchValue) ||
        idea.tags.some((tag) => tag.toLowerCase().includes(searchValue)) ||
        idea.aiTools.some((tool) => tool.toLowerCase().includes(searchValue)) ||
        idea.useCases.some((useCase) => useCase.toLowerCase().includes(searchValue))
      );
    });
  }

  renderIdeas(filteredIdeas);
}

// Initialize filter and search event listeners
function initializeEventListeners() {
  const elements = [
    { el: searchBtn, event: 'click', handler: filterIdeas },
    { el: searchInput, event: 'input', handler: debounce(filterIdeas, 300) },
    { el: departmentFilter, event: 'change', handler: filterIdeas },
    { el: aiToolFilter, event: 'change', handler: filterIdeas },
    { el: useCaseFilter, event: 'change', handler: filterIdeas },
    {
      el: clearFiltersBtn,
      event: 'click',
      handler: () => {
        departmentFilter.value = '';
        aiToolFilter.value = '';
        useCaseFilter.value = '';
        searchInput.value = '';
        filterIdeas();
      },
    },
  ];

  elements.forEach(({ el, event, handler }) => {
    if (el) el.addEventListener(event, handler);
  });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  initBackToTop();
  initializeEventListeners();

  if (ideasContainer) renderIdeas(ideasData);
});
