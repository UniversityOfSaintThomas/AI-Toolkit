/**
 * data.js
 */

// Static data for the ideas
const ideasData = [
  {
    id: 1,
    title: "Using AI to Grade APA Style",
    author: "Glori Hinck",
    email: "ghinck@stthomas.edu",
    department: "STELAR",
    date: "2025-04-17",
    description: `
      <p>
        This implementation will describe the <strong>prompt strategies</strong> used to evaluate adherence to 
        <em>APA style</em> in a student-submitted paper and will share a prompt that others can adapt for use 
        in their own courses.
      </p>

      <p>
        One recommended teaching strategy is to have students <strong>analyze their own papers</strong> with this 
        prompt and to make recommended changes before submitting for grading. The faculty member can then run the 
        same prompt for final grading.
      </p>

      <p>
        <strong>Always be sure</strong> to use a system and security settings to optimize data security 
        (<em>i.e., redact student names, do not allow data to be used to train the AI model</em>).
      </p>

      <p>
        Visit the current draft of the
        <a href="https://box.boodle.ai/a/@APAStyleChecker1">APA Style Checker Bot</a>,
        or specifically check the formatting of in-text citations and reference lists with the
        <a href="https://box.boodle.ai/a/@APACitationChecker">APA Citation Checker Bot</a>.
      </p>
    `,
    aiTools: ["BoodleBox"],
    useCases: ["Assessment", "Student Feedback", "Research"],
    resourceType: "pdf",
    resourceUrl: "public/resources/APA-Style-Grading-With-AI.pdf",
    tags: ["Citation Style", "APA", "Grading", "Feedback"],
  },
  {
    id: 2,
    title: "Water Quality Coach",
    author: "Jonathan Keiser",
    email: "keis2759@stthomas.edu",
    department: "STELAR",
    date: "2025-05-07",
    description: `
      <p>
        The <strong>Water Quality Coach</strong> was created to help Geology students understand basic 
        <em>water quality concepts</em> and interpret their water quality samples.
      </p>

      <p>
        Download the attached slides to learn how four different generative AI platforms 
        (<strong>ChatGPT</strong>, <strong>Hugging Face</strong>, <strong>Claude Project</strong>, 
        and <strong>NotebookLM</strong>) were used to create personalized learning tools to help 
        students interpret and understand water quality data.
      </p>

      <p>
        The slides describe the <strong>pros and cons</strong> of each tool based on its functionality, 
        and links are provided for each custom GPT. You will need to log in or create an account for 
        each tool in order to view.
      </p>
    `,
    aiTools: ["ChatGPT", "Hugging Face", "Claude", "NotebookLM"],
    useCases: ["Collaboration", "Assessment", "Student Feedback"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Water-Quality-Coach.pdf",
    tags: ["Geology", "Personalized Learning"],
  },
  {
    id: 3,
    title: "Creating Personalized Progress Reports with ChatGPT",
    author: "Candace Chou",
    email: "ccchou@stthomas.edu",
    department: "Education",
    date: "2025-05-07",
    description: `
      <p>
        Describes how to use <strong>ChatGPT</strong> to generate individualized mid-term 
        progress reports for students.
      </p>

      <p>
        These reports include <em>grading criteria</em>, <em>points earned</em> from all assignments, 
        <em>letter grade</em>, and a <strong>personalized message</strong>.
      </p>

      <p>
        Includes a <strong>reflection on the process</strong>.
      </p>
    `,
    aiTools: ["ChatGPT"],
    useCases: ["Content Creation", "Assessment"],
    resourceType: "pdf",
    resourceUrl:
      "public/resources/Creating-Personalized-Progress-Reports-With-ChatGPT.pdf",
    tags: ["Grading", "Communication"],
  },
  {
    id: 4,
    title: "Periodic Table Classification Game",
    author: "Jonathan Keiser",
    email: "keis2759@stthomas.edu",
    department: "STELAR",
    date: "2025-05-09",
    description: `
      <p>
        The <strong>Periodic Table Game</strong> was created with the following prompt in 
        <strong>Claude Artifact</strong>:
      </p>

      <blockquote>
        “You are an expert in chemistry education and the periodic table. Create an HTML game 
        using JavaScript and CSS to help students memorize and understand the periodic table of 
        elements focusing on names and symbols of elements. Approach this in a step-by-step 
        manner. Do you have any clarifying questions?”
      </blockquote>

      <p>
        <strong>NOTE:</strong> Claude Artifact is required to create this game.
      </p>
    `,
    aiTools: ["Claude Artifacts"],
    useCases: ["Content Creation", "Assessment"],
    resourceType: "url",
    resourceUrl:
      "https://claude.site/artifacts/ee8e2d73-be0d-44fe-8cd9-4befc302c9a5",
    tags: ["Gamification", "Chemistry", "Periodic Table"],
  },
  {
    id: 5,
    title: "Microbiology Concept Mapping Activity",
    author: "Joanna Klein",
    email: "joanna.klein@stthomas.edu",
    department: "Biology",
    date: "2025-05-09",
    description: `
      <p>
        This video demonstrates how to use <strong>ChatGPT AI</strong> to design a 
        <em>concept mapping activity</em> for a microbiology lecture for nursing students.
      </p>

      <p>
        The goal is for students to apply the <strong>principles of bacterial pathogenesis</strong> 
        to the bacterium <em>Streptococcus pyogenes</em>.
      </p>
    `,
    aiTools: ["Claude"],
    useCases: ["Content Creation", "Research"],
    resourceType: "url",
    resourceUrl:
      "https://stthomas.hosted.panopto.com/Panopto/Pages/Embed.aspx?" +
      "id=53b3c3e4-2865-4acc-b02b-b2d501355522&autoplay=false&offerviewer=true&" +
      "showtitle=true&showbrand=false&captions=false&interactivity=all",
    tags: [
      "Concept Map",
      "Microbiology",
      "Science",
      "Nursing",
      "Bacterial Pathogenesis",
    ],
  },
  {
    id: 6,
    title: "Modification of a Script for a Role Playing Activity",
    author: "Joanna Klein",
    email: "joanna.klein@stthomas.edu",
    department: "Biology",
    date: "2025-05-09",
    description: `
      <p>
        This video demonstrates how <strong>AI</strong> was used to update the dialogue in a 
        <em>role-playing activity</em> related to convincing someone to get a flu shot.
      </p>
    `,
    aiTools: ["Claude"],
    useCases: ["Content Creation"],
    resourceType: "url",
    resourceUrl:
      "https://stthomas.hosted.panopto.com/Panopto/Pages/Embed.aspx?" +
      "id=93a8a15d-cbdf-413d-a3c3-b2d501354f11&autoplay=false&offerviewer=true&" +
      "showtitle=true&showbrand=false&captions=false&interactivity=all",
    tags: ["Nursing", "Efficiency", "Role Play"],
  },
  {
    id: 7,
    title: "Creation of a Microbiology Tutor Bot",
    author: "Joanna Klein",
    email: "joanna.klein@stthomas.edu",
    department: "Biology",
    date: "2025-05-09",
    description: `
      <p>
        This video demonstrates how to design and train an <strong>AI tutor</strong> to help students 
        understand pathogens presented in a medical case study.
      </p>

      <p>
        <strong>Visit this link to use the tutor:</strong><br />
        <a href="https://box.boodle.ai/a/@MicroMentor" target="_blank">
          https://box.boodle.ai/a/@MicroMentor
        </a>
      </p>

      <p>
        <strong>NOTE:</strong> If you do not have a BoodleBox account, you will be prompted to create 
        a free account when you click on the link. A free account will allow a limited number of 
        interactions with the bot.
      </p>
    `,
    aiTools: ["Claude"],
    useCases: ["Content Creation"],
    resourceType: "url",
    resourceUrl:
      "https://stthomas.hosted.panopto.com/Panopto/Pages/Embed.aspx?" +
      "id=b45d5efd-66d9-43d2-86a5-b2d50135469d&autoplay=false&offerviewer=true&" +
      "showtitle=true&showbrand=false&captions=false&interactivity=all",
    tags: ["Tutor Bot", "Microbiology", "Nursing", "Biology", "Science"],
  },
  {
    id: 8,
    title:
      "Assignment Design and Rubric Creation for a Three Minute Thesis in Microbiology",
    author: "Joanna Klein",
    email: "joanna.klein@stthomas.edu",
    department: "Biology",
    date: "2025-05-09",
    description: `
      <p>
        This video demonstrates how to build an <strong>assignment</strong> and associated 
        <strong>grading rubric</strong> for a <em>science communication project</em> in which 
        students give a three-minute thesis.
      </p>
    `,
    aiTools: ["Claude"],
    useCases: ["Content Creation"],
    resourceType: "url",
    resourceUrl:
      "https://stthomas.hosted.panopto.com/Panopto/Pages/Embed.aspx?" +
      "id=262c82de-6eff-4a72-9ab6-b2d501354be2&autoplay=false&offerviewer=true&" +
      "showtitle=true&showbrand=false&captions=false&interactivity=all",
    tags: [
      "Assignment Design",
      "Grading Rubric",
      "Student Presentation",
      "Microbiology",
      "Biology",
    ],
  },
  {
    id: 9,
    title: "AI Policy Syllabus Statement Generator",
    author: "Glori Hinck",
    email: "ghinck@stthomas.edu",
    department: "STELAR",
    date: "2025-07-24",
    description: `
      <p>
        I used the <strong>BoodleBox bot builder</strong> to create a custom bot to help faculty craft 
        an <strong>AI policy statement</strong> for their syllabus.
      </p>

      <p>
        Users upload their syllabus and answer a short series of questions around their course and 
        their expectations for use. The bot then crafts the full statement as well as a one-paragraph version.
      </p>

      <p>
        Additional testing and feedback are appreciated! <br />
        <strong>Access the AI Policy Syllabus Statement here:</strong><br />
        <a href="https://box.boodle.ai/a/@AISyllabusStatement" target="_blank">
          https://box.boodle.ai/a/@AISyllabusStatement
        </a>
      </p>
    `,
    aiTools: ["Claude", "BoodleBox"],
    useCases: ["Content Creation", "Instructor Efficiency"],
    resourceType: "pdf",
    resourceUrl: "public/resources/AI-Policy-Syllabus-Statement-Generator.pdf",
    tags: ["Syllabus", "Content Creation"],
  },
  {
    id: 10,
    title: "Using AI to Convert Course Materials from In-Person to Online: Evaluating Information Sources on Food Processing and Ingredients",
    author: "Amber Roy",
    email: "roy07948@stthomas.edu",
    department: "Health and Exercise Science",
    date: "2025-07-28",
    description: `
      <p>
        This project demonstrates an effective <strong>redesign of a research assignment</strong> that incorporates 
        <strong>evidence-based evaluation methods</strong> (specifically the SIFT method) while maintaining alignment 
        with course learning objectives. The assignment transforms an existing in-person task into an online activity, 
        helping students develop <strong>critical thinking skills</strong> in evaluating information sources related 
        to <strong>food science</strong>.
      </p>
    `,
    aiTools: ["Claude", "BoodleBox"],
    useCases: ["Assessment", "Content Creation", "Course Design", "Student Projects"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Evaluating-Information-Sources-on-Food-Processing-and-Ingredients.pdf",
    tags: ["Redesign", "Assessment", "Food Science", "Public Health"],
  },
  {
    id: 11,
    title: "Creating Learning Targets with AI",
    author: "Gracie Scott",
    email: "scot4584@stthomas.edu",
    department: "STELAR",
    date: "2025-08-17",
    description: `
      <p>
        I used AI to help me translate my course assignments into clear, student-friendly 
        <strong>learning targets</strong>.
      </p>

      <p>
        My approach was to provide the AI with my planned assignments and ask it to generate 
        <strong>“I can…”</strong> statements that were both accessible and tied to higher-order thinking. 
        The challenge was making sure the language was accurate for college-level students while still being inclusive.
      </p>

      <p>
        The benefit is that it saves me time while also giving students clearer guidance on what they’re expected to learn, 
        which I believe will improve engagement and transparency in my online course.
      </p>

      <p>
        The outcome was a set of learning targets that I could easily post in Canvas and directly connect to assignments.
      </p>
    `,
    aiTools: ["ChatGPT", "Copilot", "Gemini"],
    useCases: ["Course Design", "Course Quality Assurance"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Prompt-1-Creating-Learning-Targeta-with-AI.pdf",
    tags: [
      "Generating Learning Targets",
      "Bloom's Taxonomy",
      "Assignment Alignment",
      "Student-Friendly Outcomes",
      "Online Course Design",
      "Accessibility",
      "Engaged Learning",
    ],
  },
  {
    id: 12,
    title: "Brainstorming Assignments for Specific Learning Targets",
    author: "Gracie Scott",
    email: "scot4584@stthomas.edu",
    department: "STELAR",
    date: "2025-08-17",
    description: `
      <p>
        I used AI to brainstorm a variety of <strong>assignment ideas</strong> that connected directly 
        to my learning targets.
      </p>

      <p>
        My approach was to be specific in the prompt, asking for activities that worked in an 
        <em>online setting</em>, encouraged engagement, and included accessibility considerations. 
      </p>

      <p>
        The challenge was making sure the suggestions fit my course context, but the benefit was that 
        AI saved me time and gave me creative options I might not have thought of.
      </p>

      <p>
        The outcome was a set of practical, <strong>student-centered assignments</strong> I could refine 
        and adapt for my class.
      </p>
    `,
    aiTools: ["Copilot", "ChatGPT", "Gemini"],
    useCases: ["Accessibility", "Assessment", "Content Creation", "Instructor Efficiency", "Student Projects", "Course Quality Assurance"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Brainstorming-Assignments-for-Specific-Learning-Targets.pdf",
    tags: [
      "Assignment Brainstorming",
      "Learning Target Alignment",
      "Student Engagement",
      "Online Course Design",
      "Accessibility in Higher Education",
    ],
  },
  {
    id: 13,
    title: "Accessibility & LMS-Ready Content",
    author: "Gracie Scott",
    email: "scot4584@stthomas.edu",
    department: "STELAR",
    date: "2025-08-17",
    description: `
      <p>
        I used AI to transform lecture content into a more <strong>accessible</strong> and 
        <strong>student-friendly</strong> format for an online course.
      </p>

      <p>
        My approach was to ask for <em>plain language</em>, structured formatting, and accessibility 
        features like <strong>alternative text</strong> and engagement options so that the material could 
        be uploaded directly into Canvas.
      </p>

      <p>
        The challenge was making sure the academic rigor stayed intact while simplifying the language.
      </p>

      <p>
        The potential benefit is that students with diverse learning needs can engage more effectively, 
        and professors save time preparing accessible materials.
      </p>
    `,
    aiTools: ["ChatGPT", "Copilot"],
    useCases: ["Accessibility", "Course Quality Assurance"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Accessibility-&-LMS-Ready-Content.pdf",
    tags: [
      "Accessible Course Materials",
      "Online Learning",
      "Canvas-ready Content",
      "Student Engagement",
      "inclusive Teaching",
    ],
  },
  {
    id: 14,
    title: "Class Assignment Example Generator",
    author: "Gracie Scott",
    email: "scot4584@stthomas.edu",
    department: "STELAR",
    date: "2025-08-17",
    description: `
      <p>
        I used AI via <strong>BoodleBox’s @class-assignments tool</strong> to generate a clear, 
        <strong>student-friendly example</strong> for a complex writing assignment.
      </p>

      <p>
        My approach involved inputting the full assignment description, specifying accessibility needs 
        (e.g., simplified language, step-by-step guidance, examples of common mistakes), and asking AI 
        to model a finished version.
      </p>

      <p>
        Challenges included ensuring that AI-generated examples did not oversimplify academic expectations 
        while remaining accessible.
      </p>

      <p>
        The potential benefits included providing students with a clear reference, reducing confusion, 
        and making the assignment approachable for all learners.
      </p>
    `,
    aiTools: ["BoodleBox"],
    useCases: ["Assessment", "Content Creation", "Course Design", "Instructor Efficiency", "Student Projects"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Creating-Assignment-Examples.pdf",
    tags: ["Assignment Example", "Student Reference", "Accessibility", "Scaffolded Learning"],
  },
  {
    id: 15,
    title: "Organizing Your Syllabus",
    author: "Gracie Scott",
    email: "scot4584@stthomas.edu",
    department: "STELAR",
    date: "2025-08-17",
    description: `
      <p>
        I uploaded my existing syllabus to <strong>BoodleBox’s @course-syllabus tool</strong> and applied 
        the <strong>UST Course Syllabus Template</strong>.
      </p>

      <p>
        My approach involved specifying the audience as first-year college English students and requesting 
        accessibility enhancements (e.g., alt text, clear headings, readable font).
      </p>

      <p>
        The main challenge was ensuring that AI properly left blank sections I couldn’t fill and maintained 
        the correct academic tone.
      </p>

      <p>
        Benefits included saving time on formatting, improving clarity, and creating a syllabus that was 
        more readable and inclusive.
      </p>

      <p>
        The outcome was a <strong>student-centered, well-structured syllabus</strong> that was fully 
        accessible and easy to navigate.
      </p>
    `,
    aiTools: ["BoodleBox"],
    useCases: ["Content Creation", "Instructor Efficiency", "Course Quality Assurance"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Syllabus-AI.pdf",
    tags: ["Syllabus Design", "Accessibility", "Student-Centered", "AI Syllabus Generator"],
  },
  {
    id: 16,
    title: "Creating a Rubric",
    author: "Gracie Scott",
    email: "scot4584@stthomas.edu",
    department: "STELAR",
    date: "2025-08-17",
    description: `
      <p>
        Using the <strong>@edu-rubric tool</strong>, I generated a <strong>rubric</strong> for a writing 
        assignment with defined criteria, point scales, and descriptive examples for each performance level.
      </p>

      <p>
        My approach involved specifying assignment details, performance expectations, and accessibility 
        considerations for students with reading or language challenges.
      </p>

      <p>
        Challenges included ensuring descriptors were precise enough to evaluate work consistently while 
        being understandable for all students.
      </p>

      <p>
        Benefits included faster rubric creation, clear grading standards, and enhanced transparency for students.
      </p>

      <p>
        The outcome was a detailed, <strong>accessible rubric</strong> that could be shared with students to 
        clarify expectations and support equitable assessment.
      </p>
    `,
    aiTools: ["BoodleBox"],
    useCases: ["Accessibility", "Content Creation", "Course Design", "Instructor Efficiency", "Student Projects", "Course Quality Assurance"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Creating-Rubric.pdf",
    tags: ["Rubric Creation", "AI Grading Support", "Accessibility", "Inclusive Assessment", "Performance Descriptors"],
  },
  {
    id: 17,
    title: "Scaffolding an Assignment",
    author: "Gracie Scott",
    email: "scot4584@stthomas.edu",
    department: "STELAR",
    date: "2025-08-17",
    description: `
      <p>
        My approach included requesting strategies to support diverse learning needs, such as <strong>visual aids</strong> 
        or <strong>alternative formats</strong>.
      </p>

      <p>
        Challenges included ensuring that the scaffolded plan balanced academic rigor with accessibility.
      </p>

      <p>
        Benefits included providing structured support for students, fostering independent learning, and increasing engagement.
      </p>

      <p>
        The outcome was a <strong>scaffolded assignment plan</strong> that guided students through the learning process 
        while being accessible for all.
      </p>
    `,
    aiTools: ["ChatGPT", "Copilot", "BoodleBox"],
    useCases: ["Assessment", "Collaboration", "Content Creation", "Course Design", "Instructor Efficiency", "Student Projects", "Course Quality Assurance"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Scaffolding-an-Assignment.pdf",
    tags: ["Assignment Scaffolding", "AI Lesson Planning", "Accessibility", "Student Engagement"],
  },
  {
    id: 18,
    title: "Converting an Individual Reflection Assignment to a Discussion Board",
    author: "Amber Roy",
    email: "roy07948@stthomas.edu",
    department: "Health and Exercise Science",
    date: "2025-10-08",
    description: `
      <p>
        In redesigning a hybrid course for fully online delivery, I used generative AI tools 
        (<strong>PromptBot</strong> and <strong>Claude 3.7 Sonnet in BoodleBox</strong>) to convert an 
        individual reflection assignment into an engaging <strong>discussion board activity</strong> that 
        promotes critical thinking and authentic peer interaction.
      </p>

      <p>
        Through iterative prompting, I guided the AI tools to condense and clarify outputs, integrate a 
        <strong>Game Analysis Framework</strong> (that it suggested), and format the final product.
      </p>

      <p>
        I also explored how to make the assignment more <strong>AI-resistant</strong>, prompting the model 
        to identify vulnerabilities and suggest solutions.
      </p>

      <p>
        The result was a structured, interactive discussion assignment—<em>“Gamification in Food Science 
        Education: Analyzing ‘Unpeeled’”</em>—that encourages personal reflection, concept application, 
        and meaningful peer dialogue while maintaining academic integrity.
      </p>
    `,
    aiTools: ["BoodleBox", "PromptBot", "Claude"],
    useCases: ["Content Creation", "Course Design", "Instructor Efficiency"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Assignment-Redesign-Converting-an-individual-reflection-assignment-to-a-discussion-board.pdf",
    tags: ["Gamification", "Curriculum Revision", "AI-Resistant", "Assignment Redesign", "Discussion", "Hybrid", "Online"],
  },
  {
    id: 19,
    title: "Designing AI-Resistant Video Reflection Assignments",
    author: "Amber Roy",
    email: "roy07948@stthomas.edu",
    department: "Health and Exercise Science",
    date: "2025-10-09",
    description: `
      <p>
        To make an existing online reflection assignment more <strong>AI-resistant</strong>, I used 
        <strong>PromptBot in BoodleBox</strong> to redesign an activity centered on a video about 
        <strong>George Washington Carver</strong>.
      </p>

      <p>
        The goal was to ensure that students genuinely engaged with the video content rather than 
        relying on AI-generated summaries. Through iterative prompting, I identified weaknesses in the 
        original assignment—such as overly general questions—and incorporated AI-informed strategies 
        like <strong>timestamp-based responses</strong>, <strong>direct quotes</strong>, 
        <strong>before/after comparisons</strong>, <strong>personal and cultural connections</strong>, 
        and explicit <strong>course concept links</strong>.
      </p>

      <p>
        The resulting assignment now requires students to provide <strong>time-specific evidence</strong> 
        and <strong>authentic reflections</strong> that connect scientific and cultural dimensions of food 
        science, promoting deeper learning and reducing the likelihood of AI-enabled shortcuts.
      </p>
    `,
    aiTools: ["BoodleBox", "PromptBot"],
    useCases: ["Content Creation", "Course Design", "Instructor Efficiency"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Assignment-Redesign-Designing-AI-Resistant-Video-Reflection-Assignments.pdf",
    tags: ["AI-Resistant", "Video", "Reflection", "Curriculum Revision", "Online"],
  },
  {
    id: 20,
    title: "Revising a Large, Multi-Step Hybrid Project to an Online Project",
    author: "Amber Roy",
    email: "roy07948@stthomas.edu",
    department: "Health and Exercise Science",
    date: "2025-10-09",
    description: `
      <p>
        In this project, I used <strong>PromptBot</strong> and <strong>Claude 3.7</strong> within the 
        <strong>BoodleBox AI platform</strong> to redesign a large, multi-step hybrid food science project 
        into a fully online, asynchronous format while preserving learning objectives and assessment integrity.
      </p>

      <p>
        Through iterative prompts, I guided the AI to generate a <strong>structured redesign template</strong> 
        including project overview, objectives, technology needs, tasks, assessments, and peer interaction components. 
        Subsequent refinement cycles focused on developing online peer learning exchanges, self-assessment checkpoints, 
        and discussion board structures to foster engagement and reflective learning.
      </p>

      <p>
        The process highlighted AI’s capacity to act as an <strong>instructional design collaborator</strong>, helping 
        synthesize complex course elements into a coherent, student-centered online project adaptable to diverse learning environments.
      </p>
    `,
    aiTools: ["BoodleBox", "PromptBot", "Claude"],
    useCases: ["Content Creation", "Course Design", "Instructor Efficiency", "Student Projects"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Assignment-Redesign-Revising-a-Large-Multi-Step-Hybrid-Project-to-an-Online-Project.pdf",
    tags: ["Curriculum", "Revision", "Hybrid", "Online", "Project"],
  },
  {
    id: 21,
    title: "Restructuring a Topic Research Assignment",
    author: "Amber Roy",
    email: "roy07948@stthomas.edu",
    department: "Health and Exercise Science",
    date: "2025-10-09",
    description: `
      <p>
        In this redesign, I used <strong>Claude 3.7</strong> in the <strong>BoodleBox AI platform</strong> 
        to restructure a topic research assignment within a larger, multi-part project focused on 
        <strong>evaluating information sources in food science</strong>.
      </p>

      <p>
        Starting with a clear learning objective—<em>“evaluating information sources related to food processing 
        and food ingredients”</em>—I prompted the AI to integrate the <strong>SIFT method</strong> and create 
        a more structured, transparent framework for assessing source credibility.
      </p>

      <p>
        Through iterative feedback, I used AI to refine the assignment to include both scientific and cultural 
        perspectives, a <strong>“Red Flags of Junk Science”</strong> component, and detailed evaluation templates 
        with point allocations and integration tips for broader project coherence.
      </p>

      <p>
        The process demonstrated how AI can serve as a <strong>responsive instructional partner</strong>, aligning 
        redesigned assignments with pedagogical goals while strengthening students’ critical evaluation and 
        research skills.
      </p>
    `,
    aiTools: ["BoodleBox", "Claude"],
    useCases: ["Content Creation", "Course Design", "Instructor Efficiency", "Student Projects"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Assignment-Redesign-Restructuring-a-Topic-Research-Assignment.pdf",
    tags: ["Curriculum Revision", "Online", "Research", "Project", "Evaluation"],
  },
  {
    id: 22,
    title: "Source Evaluation Coach",
    author: "Scott Kaihoi",
    email: "s.kaihoi@stthomas.edu",
    department: "Library",
    date: "2025-10-17",
    description: `
      <p>
        This project aimed to create a <strong>chatbot</strong> that students can use to evaluate the quality 
        of sources they find for their research assignments. Students often ask questions such as 
        <em>“Is this peer-reviewed?”</em> or <em>“Does this count for my bibliography?”</em> when conducting 
        research for course assignments. The goal was to design a chatbot that guides students through 
        critically assessing their sources without immediately providing a direct yes/no answer.
      </p>

      <p>
        The chatbot was developed using the paid <strong>ChatGPT “Plus”</strong> subscription and was designed 
        to reference both the student’s assignment and a pre-supplied knowledge base of reliable information 
        literacy principles to shape the conversation.
      </p>

      <p>
        The PowerPoint presentation below outlines the specific strategies and inputs used for those interested 
        in creating a similar chatbot. Users can also try my version of the tool by visiting this link: 
        <a href="https://chatgpt.com/g/g-685d5259054c819192529737be67faad-source-evaluation-coach" target="_blank">
          Source Evaluation Coach
        </a>.
      </p>
    `,
    aiTools: ["ChatGPT"],
    useCases: ["Student Projects"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Source-Evaluation-Coach.pdf",
    tags: ["Research"],
  },
  {
    id: 23,
    title: "AI Writing Coach: An AI Tool for Faculty Across Disciplines",
    author: "Suzy Kaback",
    email: "KABA7765@STTHOMAS.EDU",
    department: "Teacher Education",
    date: "2025-10-17",
    description: `
      <p>
        I used AI to create a <strong>faculty-facing tutor bot</strong> that helps instructors design 
        custom <strong>AI Writing Coaches</strong> for their students. These AI-coaches support 
        <strong>discipline-specific writing assignments</strong> by offering structured, stage-based guidance. 
        One of the project’s most distinctive features is its <strong>nested design</strong>: a faculty-facing 
        AI tutor guides instructors through the process of building a student-facing AI writing coach. 
        In other words, it’s a tutor that helps you build a tutor.
      </p>

      <p>
        The biggest challenge was setting boundaries so the AI <strong>reinforces rather than overrides</strong> 
        student thinking. Another challenge was designing a series of interactive prompts that reflected general 
        <em>“problems of practice”</em> college students encounter when writing, while also allowing instructors 
        to customize based on the particulars of a discipline-specific writing task.
      </p>

      <p>
        The tool is flexible across disciplines and encourages <strong>academic integrity</strong> by prompting 
        student reflection. Faculty can build a coach independently or through an interactive, guided process. 
        The result is a writing support tool that extends teaching beyond class and helps students engage more 
        confidently with complex writing tasks.
      </p>

      <p>
        When used as designed, the process of building a customized writing coach bot for a specific assignment 
        can be an <strong>educative experience</strong> for faculty.
      </p>
    `,
    aiTools: ["ChatGPT", "Gemini", "Claude", "Copilot"],
    useCases: ["Instructor Efficiency", "Student Projects"],
    resourceType: "pdf",
    resourceUrl: "public/resources/The-AI-Writing-Coach.pdf",
    tags: ["Writing", "Tutor", "Coach", "Discipline-Specific"],
  },
  {
    id: 24,
    title: "AI-Assisted Revision and Reflection in German Professional Writing",
    author: "Susanne Wagner",
    email: "wagn9302@stthomas.edu",
    department: "Modern and Classical Languages",
    date: "2025-10-24",
    description: `
      <p>
        Students developed a first draft of their essay (a professional letter) 
        <em>“Mängelrüge”</em> (a formal letter of complaint) in German using the 
        German standard professional letter-writing format without using AI. 
      </p>

      <p>
        Then, students were asked to select an appropriate AI model and craft a prompt 
        to help them revise their professional letter. Students had AI provide feedback 
        on their drafts on their <strong>German professionalism</strong>, 
        <strong>grammar</strong>, <strong>proper formatting</strong>, 
        <strong>German authenticity</strong>, <strong>writing and content</strong>, 
        and more.
      </p>
    `,
    aiTools: ["ChatGPT", "BoodleBox", "Claude"],
    useCases: ["Accessibility", "Content Creation", "Student Projects", "Workforce Development", "Language Acquisition", "Writing Skills"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Prompt-Engineering-and-Reflection-Activites-for-Foreign-Language-Teaching.pdf",
    tags: [
      "Prompt Engineering",
      "Student Projects",
      "Content Creation",
      "Editing",
      "Critical Thinking",
      "Language Acquisition",
      "German",
      "Foreign Language",
      "Writing",
    ],
  },
  {
    id: 25,
    title: "AI-Enabled Role-Play Simulations for Teaching Environmental Conflict Negotiation",
    author: "Obasesam Okoi",
    email: "okoi2278@stthomas.edu",
    department: "Justice and Society Studies",
    date: "2025-10-27",
    description: `
      <p>
        <strong>Approach:</strong>  
        The <em>AI-Enabled Role-Play Simulations for Teaching Environmental Conflict 
        Negotiation</em> project adopted a multi-platform AI approach that combined 
        generative dialogue, structured simulation, and digital animation. We integrated 
        ChatGPT for dialogue generation, BoodleBox for role-based simulation, and InVideo AI 
        for animation and visualization. This ecosystem created an end-to-end experiential 
        learning model in which students could collaboratively engage with negotiation 
        theory through practical, scenario-based exercises.
      </p>

      <p>
        The implementation followed five main stages:
      </p>

      <p style="margin-left: 20px;">
        1. <strong>Case Study Identification:</strong> Selection of real or hypothetical 
        environmental conflicts involving complex multi-stakeholder dynamics (e.g., water 
        governance, land use, or conservation).
      </p>
      <p style="margin-left: 20px;">
        2. <strong>Conflict and Stakeholder Analysis:</strong> Mapping power relations, 
        actor interests, and negotiation variables using tools such as the Stakeholder 
        Power–Interest Matrix, ABC Model, and BATNA/ZOPA analysis.
      </p>
      <p style="margin-left: 20px;">
        3. <strong>AI-Assisted Simulation:</strong> Programming AI agents in ChatGPT and 
        BoodleBox to represent stakeholders with defined goals, motivations, and negotiation 
        logics.
      </p>
      <p style="margin-left: 20px;">
        4. <strong>AI-Generated Visualization:</strong> Transforming negotiation scripts 
        into animated videos using InVideo AI to enhance engagement and comprehension.
      </p>
      <p style="margin-left: 20px;">
        5. <strong>Reflection and Pedagogical Integration:</strong> Encourages students to 
        analyze strategies, evaluate negotiation outcomes, and connect simulated insights 
        to real-world environmental policy disputes.
      </p>

      <p>
        This workflow allows students to experience both the analytical rigor and practical 
        challenges of environmental negotiation in a controlled yet dynamic setting.
      </p>

      <p>
        <strong>Challenges:</strong>  
        During the implementation process, we faced several challenges:
      </p>

      <p style="margin-left: 20px;">
        1. Designing accurate prompts that reflected stakeholder interests and negotiation 
        dynamics required precision and iterative refinement.
      </p>
      <p style="margin-left: 20px;">
        2. Ensuring that AI-generated dialogues mirrored realistic policy language and 
        behavior demanded careful moderation and human oversight.
      </p>
      <p style="margin-left: 20px;">
        3. AI occasionally reproduced biased assumptions that required continuous editing, 
        emphasizing the need for critical digital literacy and human interpretive control.
      </p>
      <p style="margin-left: 20px;">
        4. Converting long negotiation transcripts into coherent visual narratives using 
        InVideo AI required additional editing and scripting for flow and tone.
      </p>

      <p>
        Despite these challenges, the process strengthened students’ understanding of AI 
        limitations, bias awareness, and responsible digital tool use in academic settings.
      </p>

      <p>
        <strong>Potential Benefits and Impact:</strong>  
        The project yielded several significant pedagogical and disciplinary benefits:
      </p>

      <p style="margin-left: 20px;">
        1. <strong>Enhanced Learning Engagement:</strong> Students actively interact with 
        negotiation scenarios rather than passively learning theoretical concepts.
      </p>
      <p style="margin-left: 20px;">
        2. <strong>Applied Systems Thinking:</strong> The simulations deepen understanding 
        of interdependent ecological, political, and social factors in environmental policy.
      </p>
      <p style="margin-left: 20px;">
        3. <strong>Collaborative Skill Development:</strong> Role-based AI simulations foster 
        teamwork, empathy, and cross-perspective problem-solving.
      </p>
      <p style="margin-left: 20px;">
        4. <strong>Digital and Ethical Literacy:</strong> Students learn to critically engage 
        with AI as a mediator of communication and decision-making.
      </p>
      <p style="margin-left: 20px;">
        5. <strong>Pedagogical Innovation in Peace and Policy Education:</strong> The project 
        contributes to emerging models of AI-assisted experiential learning in peacebuilding 
        and environmental governance.
      </p>

      <p>
        Collectively, these benefits demonstrate AI’s potential to transform traditional 
        teaching into interactive, reflective, and interdisciplinary practice.
      </p>

      <p>
        <strong>Outcomes:</strong>  
        The project achieved several measurable outcomes:
      </p>

      <p style="margin-left: 20px;">
        1. <strong>Pedagogical Transformation:</strong> We moved from theoretical learning 
        to experiential participation in environmental conflict resolution.
      </p>
      <p style="margin-left: 20px;">
        2. <strong>Analytical Skill Building:</strong> We gained deeper insights into 
        stakeholder mapping, power dynamics, and interest-based negotiation.
      </p>
      <p style="margin-left: 20px;">
        3. <strong>Creative Visualization:</strong> The animated simulations provided new 
        ways to observe negotiation flow, emotional tone, and resolution dynamics.
      </p>
      <p style="margin-left: 20px;">
        4. <strong>Documented Learning Process:</strong> Reflections and analysis captured 
        our ability to translate AI-mediated experiences into lessons for real-world 
        application.
      </p>

      <p>
        Ultimately, the project demonstrated that AI-enabled role-play can serve as a powerful 
        pedagogical innovation—blending creativity, technology, and critical analysis to 
        prepare students for the complexities of 21st-century environmental negotiation and 
        governance.
      </p>
    `,
    aiTools: ["ChatGPT", "BoodleBox", "InVideo AI", "Mediator Bot", "Stakeholder Bots", "Observer Bot"],
    useCases: ["Collaboration", "Content Creation", "Course Design", "Student Projects"],
    resourceType: "pdf",
    resourceUrl: "public/resources/AI-Enabled-Role-Play-Simulations-for-Teaching-Environmental-Conflict-Negotiation.pdf",
    tags: [
      "Digital Peacebuilding",
      "AI-Mediated Negotiations",
      "PeaceTech",
      "Environmental Conflict Resolution"
    ],
  },
  {
    id: 26,
    title: "Generating Datasets for Assignments",
    author: "Jordan Barlow",
    email: "jordan.barlow@stthomas.edu",
    department: "Operations and Supply Chain Management",
    date: "2025-10-27",
    description: `
      <p>
        In the attached resource, I provide a set of <strong>steps</strong> as well as a <strong>template</strong> 
        for how you can use <em>AI</em> to generate a <strong>synthetic dataset</strong> that you wish students 
        to analyze as part of an assignment. The steps below detail how I came up with this framework and template; 
        the actual framework and template is in the attached <strong>PDF</strong>.
      </p>
      
      <p>
        <strong>Step 1:</strong> I first asked for best practices and suggestions from 
        <em>Claude 3.7 Sonnet</em> for generating datasets for academic assignments.
      </p>

      <p>
        <strong>Step 2:</strong> I next gathered best practices and suggestions from two 
        colleagues in OCB:
      </p>

      <p style="margin-left: 20px;">
        a. <strong>Mark Price</strong>, who led an <em>OCB AI Workshop</em> on developing 
        AI-generated datasets.
      </p>
      <p style="margin-left: 20px;">
        b. <strong>Darin Sullwold</strong>, who has developed datasets with AI for several 
        classes.
      </p>

      <p>
        <strong>Step 3:</strong> I jumped in and used <em>ChatGPT</em> (the tool of choice 
        of both Mark and Darin) to develop a dataset-based assignment for 
        <strong>BUAN-600: Introduction to Business Analytics</strong>.
      </p>

      <p>
        <strong>Step 4:</strong> Based on my experience creating this assignment, along with 
        the outline from Mark’s AI workshop, I started developing a detailed draft of this process.
      </p>

      <p>
        <strong>Step 5:</strong> I provided my draft to multiple generative AI tools and 
        asked for improvements and updates. After each conversation, I updated my draft 
        before uploading it to the next. I followed this step with the following AI tools, 
        in the following order:
      </p>

      <p style="margin-left: 20px;">
        a. <em>ChatGPT</em>
      </p>
      <p style="margin-left: 20px;">
        b. <em>Claude</em> (via <em>BoodleBox</em>)
      </p>
      <p style="margin-left: 20px;">
        c. <em>Gemini</em> (via <em>BoodleBox</em>)
      </p>
      <p style="margin-left: 20px;">
        d. <em>Copilot</em>
      </p>

      <p>
        <strong>Step 6:</strong> Based on the updated steps, I asked each AI tool listed 
        above to create a template. I chose my favorite template and modified it with details 
        that I liked from the other three generated templates.
      </p>

      <p>
        <strong>Step 7:</strong> Using my updated draft steps and template, I created a prompt 
        to draft a dataset for an assignment in <strong>BUAN-600</strong> requiring students 
        to use <em>PowerQuery</em>. I used the exact same prompt in each of the following tools:
      </p>

      <p style="margin-left: 20px;">
        a. <em>ChatGPT</em>
      </p>
      <p style="margin-left: 20px;">
        b. <em>Claude</em> (via <em>BoodleBox</em>)
      </p>
      <p style="margin-left: 20px;">
        c. <em>Gemini</em> (via <em>BoodleBox</em>)
      </p>
      <p style="margin-left: 20px;">
        d. <em>Copilot</em>
      </p>
      <p style="margin-left: 20px;">
        e. <em>Julius AI</em> (free trial)
      </p>
    `,
    aiTools: ["BoodleBox", "Claude", "Gemini", "Copilot", "ChatGPT"],
    useCases: ["Instructor Efficiency", "Content Creation", "Student Projects"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Generating-Datasets-for-Assignments.pdf",
    tags: [
      "Data",
      "Dataset",
      "Assignment",
      "Project",
      "Synthetic",
    ],
  },
  {
    id: 27,
    title: "Creating Video Transcripts",
    author: "Nancy McGinley Myers",
    email: "mcgi0084@stthomas.edu",
    department: "STELAR",
    date: "2025-10-29",
    description: `
      <p>
        A transcript is an <strong>accurate text version</strong> of the audio content of videos, 
        podcasts, and any other media with spoken language. Video transcripts should be a 
        <strong>word-for-word match</strong> of the content in the video or audio content.
      </p>

      <p>
        Video transcripts support student learning by providing <strong>reinforcement for visual learners</strong>, 
        <strong>support for students with disabilities</strong>, and an <strong>easy way to find information</strong> 
        (for study or assignments). Students can <strong>easily create their own transcripts</strong>, 
        or faculty can provide transcripts in their class.
      </p>

      <p>
        Please note: transcripts are based on video captions. The quality of the captions will affect 
        the quality of the transcript. Please also note that the only AI model that currently produces 
        an <strong>accurate transcript without changing the speaker's words</strong> is <em>Copilot</em>.
      </p>

      <p>
        Detailed instructions on how to make video transcripts are available in this Knowledgebase article: 
        <a href="https://services.stthomas.edu/TDClient/1898/ClientPortal/KB/ArticleDet?ID=167313" target="_blank" rel="noopener noreferrer">
          How to Create Video Transcripts
        </a>.
      </p>
    `,
    aiTools: ["Copilot"],
    useCases: ["Accessibility"],
    resourceType: "url",
    resourceUrl: "https://services.stthomas.edu/TDClient/1898/ClientPortal/KB/ArticleDet?ID=167313",
    tags: [
      "Transcripts",
    ],
  },
  {
    id: 28,
    title: "AI Resume-Writing in German: Help Students Tailor Their Foreign Language Resume to a Specific Job Application",
    author: "Susanne Wagner",
    email: "wagn9302@stthomas.edu",
    department: "Modern and Classical Languages",
    date: "2025-10-31",
    description: `
      <p>
        Students completed <strong>Essay 1, First Draft</strong>: a job application for a German internship posting. 
        Each submission included a <em>résumé (Lebenslauf)</em>, a <em>cover letter (Anschreiben)</em>, 
        and relevant <em>certificates, degrees, and transcripts</em>. 
      </p>

      <p>
        After completing their first draft without using AI tools, students engaged in an in-class 
        <strong>prompt engineering</strong> exercise. The goal was to design an effective prompt to 
        have AI assist in tailoring their résumé to a specific job posting. 
        In the <strong>final draft</strong>, students used AI-generated suggestions to revise their original documents, 
        focusing particularly on adapting their résumé (<em>Lebenslauf</em>) to match the requirements of the internship description.
      </p>

      <p>
        <strong>Challenges:</strong> Some students encountered difficulties during the prompt engineering stage and, as a result, 
        did not obtain meaningful or relevant feedback. Others accepted AI-generated suggestions without sufficient 
        critical evaluation. While AI provided useful ideas, some students did not fully incorporate these recommendations 
        to achieve a cohesive, visually appealing, and well-tailored résumé. 
        Additionally, BoodleBox’s version of ChatGPT-5 at the time was somewhat less robust than the web-based version. 
        It could not generate downloadable documents directly, requiring students to implement edits manually — 
        which sometimes affected the overall aesthetic quality of their final résumés.
      </p>

      <p>
        <strong>Benefits and Impact:</strong> Students expressed enthusiasm upon reviewing their improved documents. 
        When used thoughtfully, AI-assisted revision can have a substantial impact: 
        by analyzing and editing AI suggestions according to current résumé-writing conventions, 
        students enhance both their <strong>writing skills</strong> and <strong>language proficiency</strong>. 
        The use of the <em>“RoleBot Resume Writer”</em> in BoodleBox — a conversational writing partner that adapts 
        to each student’s needs — provided tailored coaching and feedback, functioning almost like a peer editor. 
        In contrast, other résumé-writing tools are typically more template-driven and offer less personalized guidance.
      </p>

      <p>
        <strong>Outcomes:</strong> When applied effectively, this process results in professional-looking résumés 
        that are clear, well-organized, and aligned with current standards — 
        ultimately increasing the likelihood of success within modern, AI-supported job application review systems.
      </p>
    `,
    aiTools: [
      "BoodleBox",
      "RoleBot Resume Writer",
      "ResumeBot",
    ],
    useCases: ["Assessment", "Collaboration", "Content Creation", "Student Projects", "Language Acquisition", "Professional Writing", "Workforce Development"],
    resourceType: "pdf",
    resourceUrl: "public/resources/AI-Resume-Tailoring.pdf",
    tags: [
      "Prompt Engineering",
      "Student Projects",
      "Content Creation",
      "Editing",
      "Critical Thinking",
      "Language Acquisition",
      "German",
      "Foreign Language",
      "Workforce Readiness",
    ],
  },
  {
    id: 29,
    title: "AI-Assisted Grading: Evaluating Whether Students Implemented Instructor Feedback",
    author: "Susanne Wagner",
    email: "wagn9302@stthomas.edu",
    department: "Modern and Classical Languages",
    date: "2025-10-31",
    description: `
      <p><em>Note: This implementation took place in December 2024.</em></p>

      <p>
        The instructor employed <strong>AI-assisted analysis</strong> to evaluate whether students effectively 
        implemented the feedback provided on their <em>first draft</em> when producing an improved 
        <em>second draft</em> of a written assignment. This method proved especially valuable for 
        <strong>multi-draft assignments</strong>, where grading depends on the student’s ability to 
        <em>revise thoughtfully</em> and respond meaningfully to prior feedback.
      </p>

      <p>
        The process unfolded in several structured steps: 
        instructors first <strong>uploaded the assignment instructions</strong>, 
        along with the <em>first and second drafts</em> of a student’s work and the 
        <em>instructor’s comments</em> on the initial submission. 
        The AI tool was then prompted to <strong>compare both drafts</strong> to determine whether 
        the student had successfully incorporated the recommended revisions.
      </p>

      <p>
        <strong>Sample Prompt:</strong><br/>
        “You are a college professor for a <em>GERM 300: Introduction to German Studies</em> course 
        evaluating the second version of a semester-long interdisciplinary research paper 
        (750–1250 words with five sources, three in German). 
        It is essential to assess whether the student implemented the instructor’s comments 
        and suggestions for improvement given on the first draft. 
        I will submit both my comments/suggestions and the student’s second version. 
        Do you need anything else to evaluate?”
      </p>

      <p>
        <strong>Challenges:</strong> While the process was faster overall than manually reviewing both drafts, 
        it remained somewhat <em>time-consuming and cumbersome</em>, particularly when uploading or 
        copy-pasting multiple documents into the AI platform. 
        The AI-generated feedback occasionally sounded overly formulaic or “machine-written,” 
        reflecting the limitations of earlier versions of ChatGPT. 
        In some cases, the system misidentified missing components that were, in fact, present. 
        The instructor mitigated these issues by <strong>critically reviewing and editing</strong> 
        AI-generated evaluations before sharing them with students.
      </p>

      <p>
        <strong>Benefits and Impact:</strong> Despite these challenges, this approach offered significant advantages: 
        <em>faster grading, more consistent feedback, and deeper comparative insight</em> into 
        how effectively students revised their work. 
        The AI tool’s capacity for detailed textual comparison enabled instructors to identify 
        nuanced changes and patterns in student revisions that might otherwise go unnoticed.
      </p>

      <p>
        <strong>Outcomes:</strong> This AI-supported grading workflow proved 
        <strong>more efficient, effective, and thorough</strong> than traditional manual comparison. 
        By automating the most repetitive aspects of feedback analysis, 
        instructors were able to devote more time to <em>high-impact teaching tasks</em> 
        and individualized student support.
      </p>
    `,
    aiTools: ["ChatGPT"],
    useCases: ["Assessment"],
    resourceType: "",
    resourceUrl: "",
    tags: [
      "Feedback",
      "Assignments",
      "Grading"
    ],
  },
  {
    id: 30,
    title: "Job Interview Preparation in German: Training with ChatGPT Voice Mode",
    author: "Susanne Wagner",
    email: "wagn9302@stthomas.edu",
    department: "Modern and Classical Languages",
    date: "2025-10-31",
    description: `
      <p>
        Students used <strong>ChatGPT Voice Mode</strong> as <em>job interview training</em> prior to their oral exam. 
        In this assignment, students were asked to conduct a <strong>simulated job interview (dialogue)</strong> with ChatGPT, 
        following specific prompt-engineering and procedural steps designed to mirror authentic interview conditions.
      </p>

      <p>
        <strong>Steps:</strong>
      </p>
      <ol style="margin-left: 20px;">
        <li>
          <strong>Prompt ChatGPT Voice Mode</strong> to conduct a simulated job interview considering the following:
          <ul style="margin-left: 20px;">
            <li>Review best practices for prompt engineering — <em>who, what, how, why</em>.</li>
            <li>Explain the scenario: who you are, what you are looking for, what it is for, and how it should be done.</li>
            <li>Upload the original job posting and mention that it should serve as the basis for the interview training.</li>
            <li>Explain that ChatGPT should adhere to <strong>German interview conventions</strong> and converse in German, 
            while playing the role of the interviewer.</li>
            <li>Specify that the interview should last at least <em>10 minutes</em> but no more than <em>15 minutes</em>.</li>
            <li>Once everything is clarified, begin the interview training and start an <strong>audio or video recording</strong> 
            (Panopto, Zoom, etc.) of the conversation.</li>
          </ul>
        </li>

        <li>
          <strong>After the conversation:</strong>
          <ul style="margin-left: 20px;">
            <li>Download the transcript as text (but ignore it during the conversation).</li>
            <li>Download the audio or Zoom file.</li>
            <li>Upload both the transcript and the recording to the assignment submission.</li>
          </ul>
        </li>

        <li>
          <strong>Reflection:</strong>
          <ul style="margin-left: 20px;">
            <li>Upload your <em>initial prompt</em>.</li>
            <li>Write a brief reflection in English (50–100 words): Did everything go well? 
            Did you have to give ChatGPT new instructions several times? 
            What went well? What didn’t go so well? 
            Did ChatGPT adhere to German interview conventions, or did it invent its own rules?</li>
          </ul>
        </li>
      </ol>

      <p>
        <strong>Challenges:</strong> Even though the assignment instructions clearly stated that this was a 
        <em>spoken dialogue</em> using ChatGPT Voice Mode, not every student realized it. 
        Because this was their first experience with the tool, some encountered <em>technical difficulties</em>. 
        Students at the <strong>B1/B2 proficiency level</strong> also felt that the AI occasionally 
        misunderstood their spoken German, which caused moments of frustration.
      </p>

      <p>
        <strong>Benefits and Impact:</strong> With the rapid improvements in ChatGPT’s voice capabilities, 
        there are now <em>tremendous benefits for language learners</em>. 
        AI demonstrates increasingly <strong>human-like responsiveness</strong> to comments and criticism, 
        allowing students to engage in realistic conversational practice that strengthens both 
        <em>language proficiency</em> and <em>confidence</em> in professional communication contexts.
      </p>

      <p>
        <strong>Outcomes:</strong> The quality of student outcomes varied according to the quality of their prompts, 
        yet overall results were highly positive. Students who used this activity as <em>job interview training</em> 
        prior to their oral exam reported feeling <strong>better prepared and more confident</strong> 
        during their actual Zoom-based assessments — a strong and encouraging result.
      </p>

      <p>
        <strong>Listen to an Example:</strong> 
        <a href="https://universityofsaintthomas.github.io/AI-Toolkit/public/resources/KI-Training-Job-Interview.mp3" 
          target="_blank" rel="noopener noreferrer">
          Click here to hear a student sample interview.
        </a>
      </p>
    `,
    aiTools: ["ChatGPT Voice Mode"],
    useCases: ["Assessment", "Collaboration", "Content Creation", "Student Projects", "Language Training", "Workforce Development"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Job-Interview-Prep-ChatGPT-Voice-Mode-Student-Reflections.pdf",
    tags: [
      "Prompt Engineering",
      "German",
      "Language Acquisition",
      "Interview Training",
      "Job Application",
      "Foreign Language",
    ],
  },
  {
    id: 31,
    title: "Designing AI-Enabled Role-Play Simulations for Teaching Environmental Conflict Negotiation",
    author: "Matthew Vernon",
    email: "vern0007@stthomas.edu",
    department: "Justice and Society Studies and STELAR",
    date: "2025-11-11",
    description: `
      <p>
        AI-mediated role-play to engage students in environmental conflict
        scenarios to improve their critical, ethical, and analytical reasoning skills.
      </p>

      <p><strong>Niger Delta Negotiation Simulation Resources:</strong></p>

      <ol style="margin-left: 20px;">
        <li>
          <a href="https://mavereks.github.io/tools/Niger%20Delta%20Negotiation%20Simulation.html" target="_blank">
            Complete System Prompt and Explanation
          </a>
        </li>
        <li>
          <a href="https://box.boodle.ai/a/@Negotiator1.24" target="_blank">
            Run the Niger Delta Simulation in BoodleBox
          </a>
        </li>
      </ol>
    `,
    aiTools: ["BoodleBox", "ChatGPT", "Claude"],
    useCases: ["Negotiation", "Role Play", "Student Engagement", "Formative Assessment"],
    resourceType: "pdf",
    resourceUrl: "public/resources/Nile-Delta-Negotiation-Simultation.pdf",
    tags: ["Simulation", "Context Engineering", "Negotiation Practice"]
  }
];
