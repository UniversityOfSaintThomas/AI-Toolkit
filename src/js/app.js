/**
 * app.js
 * 
 * This file handles:
 * - Path resolution for all pages
 * - Ideas filtering and rendering (AI Idea Book page)
 * - Search functionality
 * - Filter menu overlay
 * - Grant projects accordion
 * - Back to top button
 */

/**
 * UTILITY FUNCTIONS
 */

/**
 * Convert any path to be relative to the current page location
 * Handles absolute URLs, mailto links, and relative paths
 * @param {string} path - The path to convert
 * @returns {string} - The resolved path
 */
function getPath(path) {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("mailto:")) return path;
  if (!path) return "./";

  const currentPath = window.location.pathname;
  const inPagesDir = currentPath.includes("/pages/");
  const inSrcDir = currentPath.includes("/src/");

  if (inPagesDir) return "../../" + path;
  if (inSrcDir) return "../" + path;

  return path;
}

/**
 * Get the correct resource path relative to the current page
 * @param {string} path - The resource path
 * @returns {string} - The resolved resource path
 */
function getResourcePath(path) {
  if (/^(https?:)?\/\//.test(path)) return path;
  return getPath(path);
}

/**
 * Normalize a string value for consistent comparison
 * Converts to lowercase, trims whitespace, converts spaces to hyphens
 * @param {string} str - String to normalize
 * @returns {string} - Normalized string
 */
function normalizeValue(str) {
  return String(str || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * IDEA CARD CREATION
 */

/**
 * Create an idea card element
 * @param {Object} idea - Idea data object
 * @returns {HTMLElement} - The created card element
 */
function createIdeaCard(idea) {
  const ideaCard = document.createElement("a");
  ideaCard.className = "idea-card";
  ideaCard.href = getPath(`src/pages/idea-detail.html?id=${idea.id}`);

  // Format date
  const date = new Date(idea.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Combine all tags
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

  // Check if currently on idea-detail page
  const isDetailPage = window.location.pathname.includes('idea-detail.html');
  
  // Limit tags to 5 on ai-idea-book page
  const tagsToShow = isDetailPage ? allTags : allTags.slice(0, 5);
  
  let tagsHTML = tagsToShow
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  // Strip HTML from description for preview
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = idea.description; // parse the HTML
  const plainTextDescription = tempDiv.textContent || tempDiv.innerText || "";

  const truncatedDescription =
    plainTextDescription.length > 150
      ? plainTextDescription.substring(0, 150) + "..."
      : plainTextDescription;

  // Resource icons mapping
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
    ? `<a href="${getResourcePath(idea.resourceUrl)}" target="_blank" class="resource-link" onclick="event.stopPropagation()">
         ${resourceIcons[idea.resourceType] || resourceIcons.default} View Resources
       </a>`
    : "";

  // Validate department class
  const validDepartments = [
    "business",
    "education",
    "engineering",
    "humanities",
    "sciences",
    "other",
  ];
  const departmentClass = validDepartments.includes(
    idea.department.toLowerCase(),
  )
    ? idea.department.toLowerCase()
    : "other";

  // Build card HTML
  ideaCard.innerHTML = `
    <div class="idea-header">
      <div class="department-badge">
        ${idea.department.charAt(0).toUpperCase() + idea.department.slice(1)}
      </div>
      <div class="idea-date">${formattedDate}</div>
    </div>
    <div class="idea-card-body">
      <h3 class="idea-title">${idea.title}</h3>
      <p class="idea-author">By ${idea.author}</p>
      <p class="idea-description">
        ${truncatedDescription}
      </p>
      <div class="idea-tags">
        <h4>Tags</h4>
        <div class="tags-list">${tagsHTML}</div>
      </div>
    </div>
    ${resourceButton ? `<div class="idea-resource">${resourceButton}</div>` : ''}
  `;

  return ideaCard;
}

/**
 * IDEAS RENDERING & FILTERING
 */

/**
 * Render ideas to the container
 * @param {Array} ideas - Array of idea objects to render
 */
function renderIdeas(ideas) {
  const ideasContainer = document.getElementById("ideas-container");
  const ideaCountElement = document.getElementById("idea-count");

  if (!ideasContainer) return;

  ideasContainer.innerHTML = "";

  // Handle empty state
  if (ideas.length === 0) {
    ideasContainer.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search" style="font-size: 2rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3>No ideas found</h3>
        <p>Try adjusting your search or filters</p>
      </div>
    `;
    if (ideaCountElement) ideaCountElement.textContent = "0";
    return;
  }

  // Update count
  if (ideaCountElement) ideaCountElement.textContent = ideas.length;

  // Render each idea card
  ideas.forEach((idea) => {
    const ideaCard = createIdeaCard(idea);
    ideasContainer.appendChild(ideaCard);
  });
}

/**
 * Filter ideas based on selected filters and search term
 */
function filterIdeas() {
  const departmentFilter = document.getElementById("department");
  const aiToolFilter = document.getElementById("ai-tool");
  const useCaseFilter = document.getElementById("use-case");
  const tagFilter = document.getElementById("tag");
  const searchInput = document.getElementById("search");
  const sortByFilter = document.getElementById("sort-by");

  if (!departmentFilter || !aiToolFilter || !useCaseFilter || !searchInput)
    return;

  const departmentValue = departmentFilter.value;
  const aiToolValue = aiToolFilter.value;
  const useCaseValue = useCaseFilter.value;
  const tagValue = tagFilter ? tagFilter.value : "";
  const searchValue = searchInput.value.toLowerCase();
  const sortByValue = sortByFilter ? sortByFilter.value : "newest";

  let filteredIdeas = ideasData;

  // Apply department filter
  if (departmentValue) {
    filteredIdeas = filteredIdeas.filter(
      (idea) => normalizeValue(idea.department) === departmentValue,
    );
  }

  // Apply AI tool filter
  if (aiToolValue) {
    filteredIdeas = filteredIdeas.filter((idea) =>
      idea.aiTools.some((tool) => normalizeValue(tool) === aiToolValue),
    );
  }

  // Apply use case filter
  if (useCaseValue) {
    filteredIdeas = filteredIdeas.filter((idea) =>
      idea.useCases.some((useCase) => normalizeValue(useCase) === useCaseValue),
    );
  }

  // Apply tag filter
  if (tagValue) {
    filteredIdeas = filteredIdeas.filter((idea) =>
      idea.tags.some((tag) => normalizeValue(tag) === tagValue),
    );
  }

  // Apply search filter
  if (searchValue) {
    filteredIdeas = filteredIdeas.filter((idea) => {
      return (
        idea.title.toLowerCase().includes(searchValue) ||
        idea.description.toLowerCase().includes(searchValue) ||
        idea.author.toLowerCase().includes(searchValue) ||
        idea.tags.some((tag) => tag.toLowerCase().includes(searchValue)) ||
        idea.aiTools.some((tool) => tool.toLowerCase().includes(searchValue)) ||
        idea.useCases.some((useCase) =>
          useCase.toLowerCase().includes(searchValue),
        )
      );
    });
  }

  // Apply sorting
  filteredIdeas.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    
    if (sortByValue === "oldest") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  renderIdeas(filteredIdeas);
}

/**
 * Clear all filters and reset the view
 */
function clearAllFilters() {
  const departmentFilter = document.getElementById("department");
  const aiToolFilter = document.getElementById("ai-tool");
  const useCaseFilter = document.getElementById("use-case");
  const tagFilter = document.getElementById("tag");
  const searchInput = document.getElementById("search");
  const sortByFilter = document.getElementById("sort-by");

  if (departmentFilter) departmentFilter.value = "";
  if (aiToolFilter) aiToolFilter.value = "";
  if (useCaseFilter) useCaseFilter.value = "";
  if (tagFilter) tagFilter.value = "";
  if (searchInput) searchInput.value = "";
  if (sortByFilter) sortByFilter.value = "newest";

  filterIdeas();
}

/**
 * FILTER OPTIONS POPULATION
 */

/**
 * Dynamically populate filter dropdown options from ideas data in data.js
 */
function populateFilterOptions() {
  if (!Array.isArray(ideasData)) return;

  const departments = new Set();
  const aiTools = new Set();
  const useCases = new Set();
  const tags = new Set();

  // Collect unique values
  ideasData.forEach((idea) => {
    if (idea.department) departments.add(idea.department.trim());
    if (Array.isArray(idea.aiTools)) {
      idea.aiTools.forEach((tool) => aiTools.add(tool.trim()));
    }
    if (Array.isArray(idea.useCases)) {
      idea.useCases.forEach((useCase) => useCases.add(useCase.trim()));
    }
    if (Array.isArray(idea.tags)) {
      idea.tags.forEach((tag) => tags.add(tag.trim()));
    }
  });

  // Sort alphabetically
  const sortedDepartments = Array.from(departments).sort((a, b) =>
    a.localeCompare(b),
  );
  const sortedAiTools = Array.from(aiTools).sort((a, b) => a.localeCompare(b));
  const sortedUseCases = Array.from(useCases).sort((a, b) =>
    a.localeCompare(b),
  );
  const sortedTags = Array.from(tags).sort((a, b) => a.localeCompare(b));

  // Populate select dropdowns
  const populateSelect = (selectElement, options) => {
    if (!selectElement) return;
    options.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = normalizeValue(option);
      opt.textContent = option;
      selectElement.appendChild(opt);
    });
  };

  populateSelect(document.getElementById("department"), sortedDepartments);
  populateSelect(document.getElementById("ai-tool"), sortedAiTools);
  populateSelect(document.getElementById("use-case"), sortedUseCases);
  populateSelect(document.getElementById("tag"), sortedTags);
}

/**
 * FILTER MENU OVERLAY
 */

/**
 * Initialize filter menu overlay functionality
 */
function initFilterMenu() {
  const filterMenuBtn = document.getElementById("filter-menu-btn");
  const filterMenu = document.getElementById("filter-menu");
  const closeFilterMenu = document.getElementById("close-filter-menu");

  if (!filterMenuBtn || !filterMenu) return;

  const openMenu = () => {
    filterMenu.classList.add("active");
    filterMenu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    filterMenu.classList.remove("active");
    filterMenu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  // Event listeners
  filterMenuBtn.addEventListener("click", openMenu);
  if (closeFilterMenu) closeFilterMenu.addEventListener("click", closeMenu);

  // Close when clicking outside modal
  filterMenu.addEventListener("click", (e) => {
    if (e.target === filterMenu) closeMenu();
  });

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && filterMenu.classList.contains("active")) {
      closeMenu();
    }
  });
}

/**
 * GRANT PROJECTS ACCORDION
 */

/**
 * Initialize accordion functionality for grant projects page
 */
function initProjectAccordion() {
  const projectHeaders = document.querySelectorAll(".project-header");
  if (!projectHeaders.length) return;

  projectHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const parent = header.parentElement;
      const isActive = parent.classList.contains("active");

      // Toggle current accordion
      parent.classList.toggle("active");

      // Update aria-expanded attribute
      header.setAttribute("aria-expanded", !isActive);
    });
  });
}

/**
 * BACK TO TOP BUTTON
 */

/**
 * Initialize back to top button functionality
 */
function initBackToTop() {
  const footer = document.querySelector("footer .footer-bottom");
  if (!footer) return;

  // Create button
  const backToTopButton = document.createElement("button");
  backToTopButton.id = "back-to-top";
  backToTopButton.className = "back-to-top";
  backToTopButton.setAttribute("aria-label", "Back to top");
  backToTopButton.innerHTML = `
    <svg class="back-to-top-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="m18 15-6-6-6 6"/>
    </svg>
  `;

  footer.appendChild(backToTopButton);

  // Show/hide based on scroll position
  window.addEventListener("scroll", () => {
    backToTopButton.classList.toggle("visible", window.pageYOffset > 300);
  });

  // Scroll to top on click
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/**
 * PROJECT SPOTLIGHT SLIDER
 */
function initProjectSpotlight() {
  const slidesContainer = document.getElementById("spotlight-slides");
  const prevBtnDesktop = document.getElementById("spotlight-prev");
  const nextBtnDesktop = document.getElementById("spotlight-next");
  const prevBtnMobile = document.getElementById("spotlight-prev-mobile");
  const nextBtnMobile = document.getElementById("spotlight-next-mobile");

  if (!slidesContainer || typeof ideasData === "undefined") return;

  // Get 4 random ideas
  const randomIdeas = [...ideasData]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  let currentIndex = 0;

  /**
   * Strip HTML tags from a string
   * @param {string} html - The HTML string to strip
   * @returns {string} - Plain text string
   */
  const stripHTML = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  // Create slides
  slidesContainer.innerHTML = randomIdeas
    .map((idea) => {
      const plainDescription = stripHTML(idea.description);
      const maxLength = 300; // Increased from 120
      const truncatedDescription =
        plainDescription.length > maxLength
          ? plainDescription.substring(0, maxLength) + "..."
          : plainDescription;

      return `
        <div class="spotlight-slide" onclick="window.location.href='${getPath(
          `src/pages/idea-detail.html?id=${idea.id}`
        )}'">
          <h4>${idea.title}</h4>
          <p>${truncatedDescription}</p>
        </div>
      `;
    })
    .join("");

  /**
   * Update slide position and button states
   */
  function updateSlide() {
    const slideElements = slidesContainer.querySelectorAll(".spotlight-slide");
    if (slideElements.length === 0) return;

    const slideWidth = slideElements[0].offsetWidth;
    const gap = 24; // 1.5rem = 24px
    const containerWidth = slidesContainer.parentElement.offsetWidth;
    
    // Determine how many slides fit
    const slidesPerView = window.innerWidth <= 768 ? 1 : 2;
    
    // Calculate max index based on slides per view
    const maxIndex = Math.max(0, randomIdeas.length - slidesPerView);
    
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }

    let moveAmount;

    // Calculate move amount to show exactly 2 slides (1 on mobile)
    if (currentIndex >= maxIndex) {
      const totalWidth =
        slideElements.length * slideWidth + (slideElements.length - 1) * gap;
      moveAmount = totalWidth - containerWidth;
    } else {
      moveAmount = currentIndex * (slideWidth + gap);
    }

    slidesContainer.style.transform = `translateX(-${moveAmount}px)`;

    // Update buttons
    const updateButtons = (prevBtn, nextBtn) => {
      if (prevBtn) prevBtn.disabled = currentIndex === 0;
      if (nextBtn) nextBtn.disabled = currentIndex >= maxIndex;
    };

    updateButtons(prevBtnDesktop, nextBtnDesktop);
    updateButtons(prevBtnMobile, nextBtnMobile);
  }

  /**
   * Navigate to previous slide
   */
  function goToPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlide();
    }
  }

  /**
   * Navigate to next slide
   */
  function goToNext() {
    if (currentIndex < randomIdeas.length - 1) {
      currentIndex++;
      updateSlide();
    }
  }

  // Button event listeners
  if (prevBtnDesktop) prevBtnDesktop.addEventListener("click", goToPrev);
  if (nextBtnDesktop) nextBtnDesktop.addEventListener("click", goToNext);
  if (prevBtnMobile) prevBtnMobile.addEventListener("click", goToPrev);
  if (nextBtnMobile) nextBtnMobile.addEventListener("click", goToNext);

  // Touch swipe support
  let touchStart = 0;
  slidesContainer.addEventListener("touchstart", (e) => {
    touchStart = e.touches[0].clientX;
  });

  slidesContainer.addEventListener("touchend", (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  });

  // Update slides on window resize
  window.addEventListener("resize", updateSlide);

  // Initial render
  updateSlide();
}

/**
 * EXPAND/COLLAPSE ALL ACCORDIONS
 */
function initExpandAllButton() {
  const expandAllBtn = document.getElementById("expand-all-btn");
  const projectGroups = document.querySelectorAll(".project-group");
  
  if (!expandAllBtn || !projectGroups.length) return;

  let allExpanded = false;

  expandAllBtn.addEventListener("click", () => {
    allExpanded = !allExpanded;

    projectGroups.forEach((group) => {
      const header = group.querySelector(".project-header");
      
      if (allExpanded) {
        group.classList.add("active");
        header.setAttribute("aria-expanded", "true");
      } else {
        group.classList.remove("active");
        header.setAttribute("aria-expanded", "false");
      }
    });

    // Update button text and icon
    const icon = expandAllBtn.querySelector("i");
    if (allExpanded) {
      icon.className = "fa-solid fa-angles-up";
      expandAllBtn.innerHTML = '<i class="fa-solid fa-angles-up"></i> Collapse All';
    } else {
      icon.className = "fa-solid fa-angles-down";
      expandAllBtn.innerHTML = '<i class="fa-solid fa-angles-down"></i> Expand All';
    }
  });
}

/**
 * AUTO OPEN ACCORDIONS FROM HASH
 */
function openProjectFromHash() {
  const hash = window.location.hash;
  if (!hash) return;

  const target = document.querySelector(hash);
  if (!target || !target.classList.contains("project-group")) return;

  const header = target.querySelector(".project-header");

  // Close all other accordions
  document.querySelectorAll(".project-group").forEach((group) => {
    group.classList.remove("active");
    const btn = group.querySelector(".project-header");
    if (btn) btn.setAttribute("aria-expanded", "false");
  });

  // Open the targeted one
  target.classList.add("active");
  header.setAttribute("aria-expanded", "true");

  setTimeout(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 300);
}

/**
 * EVENT LISTENERS INITIALIZATION
 */

/**
 * Initialize all event listeners for filters and search
 */
function initializeEventListeners() {
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("search");
  const departmentFilter = document.getElementById("department");
  const aiToolFilter = document.getElementById("ai-tool");
  const useCaseFilter = document.getElementById("use-case");
  const tagFilter = document.getElementById("tag");
  const sortByFilter = document.getElementById("sort-by");
  const clearFiltersBtn = document.getElementById("clear-filters");

  // Search functionality
  if (searchBtn) searchBtn.addEventListener("click", filterIdeas);
  if (searchInput)
    searchInput.addEventListener("input", debounce(filterIdeas, 300));

  // Filter change events
  if (departmentFilter)
    departmentFilter.addEventListener("change", filterIdeas);
  if (aiToolFilter) aiToolFilter.addEventListener("change", filterIdeas);
  if (useCaseFilter) useCaseFilter.addEventListener("change", filterIdeas);
  if (tagFilter) tagFilter.addEventListener("change", filterIdeas);
  if (sortByFilter) sortByFilter.addEventListener("change", filterIdeas);

  // Clear filters button
  if (clearFiltersBtn)
    clearFiltersBtn.addEventListener("click", clearAllFilters);
}

/**
 * INITIALIZATION
 */

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  // Always initialize
  initBackToTop();
  initProjectAccordion();
  openProjectFromHash();
  initExpandAllButton();
  initProjectSpotlight();

  // Only initialize if on AI Idea Book page
  const ideasContainer = document.getElementById("ideas-container");
  if (ideasContainer && typeof ideasData !== "undefined") {
    populateFilterOptions();
    initializeEventListeners();
    initFilterMenu();
    filterIdeas();
  }
});

// Handle hash changes after page load
window.addEventListener("hashchange", function () {
  openProjectFromHash();
});
