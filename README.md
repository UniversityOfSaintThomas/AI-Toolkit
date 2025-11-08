# AI Toolkit - University of St. Thomas

A comprehensive web platform for sharing and discovering AI implementation ideas in education. Faculty and staff can browse examples, view resources, and contribute their own AI teaching experiences.

## Project Structure

```
ai-toolkit/
├── index.html                  # Home page
├── src/
│   ├── css/
│   │   └── styles.css          # Main stylesheet
│   ├── js/
│   │   ├── app.js              # Main application logic
│   │   ├── idea-detail.js      # Idea detail page functionality
│   │   └── data.js             # Ideas data structure
│   └── pages/
│       ├── ai-idea-book.html   # Browse all AI ideas
│       ├── idea-detail.html    # Individual idea detail view
│       └── grant-projects.html # Featured grant projects
└── public/
    ├── images/                 # Logo and hero images
    └── resources/              # Uploaded resource files (PDFs, videos, etc.)
```

## Adding a New Idea

### Step 1: Prepare Your Resource (if applicable)

If your idea includes a file resource (PDF, video, image, etc.):

1. Navigate to the `public/resources/` directory
2. Upload your file following the naming convention:
   - Replace spaces with hyphens (`-`)
   - Example: `My-Resource.pdf`

### Step 2: Add Your Idea to the Data File

1. Open `src/js/data.js`

2. Locate the `ideasData` array (starts with `const ideasData = [`)

3. Find the last idea in the array (ends with `}`)

4. Add a comma `,` after the last idea's closing bracket

5. Copy and paste this template then fill in your information:

```javascript
{
  id: [next_number],            // Increment from the last ID
  title: "Your Idea Title",
  author: "Your Name",
  email: "your.email@stthomas.edu",
  department: "Your Department",
  date: "YYYY-MM-DD",
  description: "Detailed description of your AI implementation",
  aiTools: ["tool1", "tool2"],
  useCases: ["use-case1"],
  resourceType: "pdf",
  resourceUrl: "public/resources/your-file.pdf",
  tags: ["tag1", "tag2", "tag3"]
}
```

### Step 3: Format Your Description

The `description` field supports HTML formatting, below are some examples:

**Basic Formatting:**
- Line break: `<br>`
- Bold text: `<strong>Important</strong>`
- Italic text: `<em>Emphasis</em>`

**Links:**
```html
<a href="https://example.com" target="_blank">Click here</a>
```

**Lists:**
```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

**Headings:**
```html
<h3>Section Title</h3>
```
