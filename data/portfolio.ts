export const profile = {
  name: "Tushar Panwar",
  role: "Full-Stack Developer | AI & RAG Builder",
  phone: "+91 7428402064",
  email: "panwartushar23@gmail.com",
  linkedin: "https://www.linkedin.com/in/tushar-panwar-55b754382/",
  github: "https://github.com/tush-dev",
  resume: "https://drive.google.com/file/d/1sFGMvcMmObraebMil5jqABI2vmqXEoIK/view?usp=sharing",
  photo: "/IMG_8646.jpg",
  location: "NIT Jalandhar, Punjab, India",
  summary:
    "B.Tech student at NIT Jalandhar building full-stack products, AI-powered retrieval systems, and clean frontend experiences with React, Node.js, databases, and modern LLM tooling. An avid national-level basketball player — basketball is my primary hobby.",
  hobbies: ["Basketball (national-level) - primary hobby"],
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "Java", "C++"],
  },
  {
    label: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "Material-UI", "Bootstrap", "Chart.js"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.IO"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Pinecone"],
  },
  {
    label: "AI & LLM Stack",
    items: [
      "RAG Pipelines",
      "Voyage AI",
      "Cohere Reranking",
      "Groq LLaMA-3",
      "Tesseract OCR",
      "Hybrid Search",
      "Query Expansion",
      "HyDE",
    ],
  },
  {
    label: "Analytics & Tools",
    items: ["Pandas", "Matplotlib", "Jupyter", "Git", "GitHub", "Vercel", "Figma"],
  },
];

export const skills = [
  { name: "Full-Stack Development", level: 90 },
  { name: "AI/RAG Systems", level: 86 },
  { name: "Frontend UI Engineering", level: 88 },
  { name: "Data Analytics", level: 78 },
];

export const projects = [
  {
    title: "Oracle AI",
    description:
      "Advanced RAG assistant for querying documents and GitHub repositories with hybrid search, reranking, OCR, and grounded LLM answers.",
    slug: "oracle-ai",
    imageUrl:
      "/image-1780683192292.png",
    tags: ["React", "TypeScript", "Pinecone", "Groq", "RAG"],
    links: {
      demo: "https://advanced-rag-pipeline.vercel.app/",
      github: "https://github.com/tush-dev/Oracle.git",
    },
    content: [
      "Built an AI-powered RAG assistant for intelligent querying over documents and GitHub repositories using hybrid search that combines semantic retrieval with BM25 and Cohere reranking.",
      "Implemented repository ingestion, OCR-powered document processing, contextual retrieval, and grounded response generation pipelines for reliable answers over user-provided sources.",
      "Designed the full-stack architecture with vector databases, backend APIs, conversational workflows, and persistent chat history management.",
      "Integrated Voyage AI embeddings, Pinecone vector search, Groq LLM inference, Tesseract OCR, and AssemblyAI-powered speech-to-text workflows.",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Pinecone", "Voyage AI", "Cohere", "Groq", "Tesseract OCR"],
  },
  {
    title: "SplitApp",
    description:
      "Expense management web app for groups with responsive UX, REST APIs, authentication, balances, and analytics dashboards.",
    slug: "splitapp",
    imageUrl:
      "/image-1780683358136.png",
    tags: ["MERN", "Material-UI", "Chart.js"],
    links: {
      demo: "https://split-wise-chi-five.vercel.app/",
      github: "https://github.com/tush-dev/SplitWise-",
    },
    content: [
      "Designed the end-to-end UI/UX from wireframes to a polished interface, applying user-centered design principles for intuitive group expense management.",
      "Built a fully responsive frontend using React and Material-UI, keeping the experience consistent across devices and aligned with accessibility best practices.",
      "Developed reusable UI components and integrated REST APIs for expense tracking, authentication, and balance management workflows.",
      "Integrated Chart.js dashboards for spending analytics and expense visualization, improving financial insight for users.",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Material-UI", "Chart.js"],
  },
  {
    title: "Birth Reports Data Analysis",
    description:
      "Analytics project over 10,000+ Indian birth records using SQL, Python, Pandas, and Matplotlib to uncover demographic patterns.",
    slug: "birth-reports-data-analysis",
    imageUrl:
      "/image-1780683484802.png",
    tags: ["MySQL", "Python", "Pandas", "Analytics"],
    links: {
      demo: "",
      github: "https://github.com/tush-dev",
    },
    content: [
      "Designed and structured a relational database containing 10,000+ birth records with an optimized schema for efficient querying and analysis.",
      "Applied advanced SQL techniques including joins, CTEs, aggregations, and window functions to uncover demographic trends across Indian states.",
      "Performed exploratory data analysis using Pandas and generated Matplotlib visualizations to identify temporal and regional birth patterns.",
      "Created yearly comparative reports and analytical dashboards to support evidence-based public health and demographic insights.",
    ],
    stack: ["MySQL", "Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
  },
  {
    title: "Netflix Landing Page Clone",
    description:
      "A pixel-perfect replica of Netflix's landing page with modern UI, responsive design, and engaging hero section showcasing streaming content.",
    slug: "netflix-landing-page",
    imageUrl:
      "/image-1780694772431.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    links: {
      demo: "https://netnet-two.vercel.app/",
      github: "https://github.com/tush-dev/netflix-landing-page-tush.dev",
    },
    content: [
      "Recreated Netflix's iconic landing page with pixel-perfect accuracy, focusing on visual hierarchy and user engagement patterns.",
      "Implemented fully responsive design that adapts seamlessly across mobile, tablet, and desktop viewports maintaining consistent branding and layout.",
      "Built interactive UI elements including hover effects, smooth transitions, and dynamic content sections to replicate Netflix's streaming experience.",
      "Optimized performance with semantic HTML, CSS Grid/Flexbox layouts, and efficient JavaScript interactions for smooth user experience.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel"],
  },
  {
    title: "Mintlify Landing Page",
    description:
      "Clean, modern landing page UI for an intelligent knowledge platform with responsive layouts, engaging hero section, partner showcase, and feature cards.",
    slug: "mintlify-landing-page",
    imageUrl:
      "/image-1780695103350.png",
    tags: ["React", "Tailwind CSS", "Responsive Design", "Modern UI"],
    links: {
      demo: "https://mintlify-landing-page-seven.vercel.app",
      github: "https://github.com/tush-dev/mintlify-landing-page",
    },
    content: [
      "Designed and built a sophisticated landing page with clean, modern UI principles emphasizing visual clarity and brand consistency.",
      "Created a fully responsive layout using Tailwind CSS that delivers seamless experiences across desktop, tablet, and mobile devices.",
      "Implemented dynamic hero section with email subscription CTA, smooth scrolling, and engaging animations to drive user engagement.",
      "Built partners/brands showcase section with card-based feature components highlighting key value propositions and multi-column footer for navigation.",
      "Integrated interactive elements including hover states, smooth transitions, and optimized performance for fast load times and excellent UX.",
    ],
    stack: ["React", "Tailwind CSS", "JavaScript", "Responsive Design", "Vercel"],
  },
  {
    title: "Kanban Board",
    description:
      "A simple and interactive Kanban Board application for efficient task management with drag-and-drop functionality, multiple columns (Todo, In Progress, Done), and real-time task updates.",
    slug: "kanban-board",
    imageUrl:
      "/image-1780695407396.png",
    tags: ["HTML", "CSS", "JavaScript", "Drag & Drop API", "DOM"],
    links: {
      demo: "https://kan-ban-two.vercel.app",
      github: "https://github.com/tush-dev/KAN-BAN",
    },
    content: [
      "Built an interactive Kanban Board with HTML5 structure, custom CSS styling, and vanilla JavaScript to deliver a smooth task management experience.",
      "Implemented native Drag & Drop API enabling users to seamlessly move tasks between Todo, In Progress, and Done columns with intuitive interactions.",
      "Leveraged DOM manipulation for real-time task creation, deletion, and status updates with immediate visual feedback and no page reloads.",
      "Designed a clean, minimalist UI with visual hierarchy and responsive layout that works efficiently on desktop and tablet devices.",
      "Optimized performance using event delegation and efficient DOM querying to handle multiple tasks without performance degradation.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Drag & Drop API", "DOM API", "Vercel"],
  },
];

export const blogPosts = [
  {
    title: "What Cooks Inside Node.js?",
    excerpt:
      "A deep dive into the internals that make Node.js run, from its runtime model to the systems thinking behind JavaScript on the server.",
    slug: "what-cooks-inside-nodejs",
    date: new Date("2026-01-15"),
    imageUrl:
      "/image-1780684932961.png",
    readTime: 7,
    url: "https://nodejs-internals-tush.hashnode.dev/what-cooks-inside-nodejs",
  },
  {
    title: "J/S Is Calling Back",
    excerpt:
      "A JavaScript callbacks explainer focused on how async code hands control around and why callback patterns still matter.",
    slug: "js-is-calling-back",
    date: new Date("2026-01-20"),
    imageUrl:
      "/image-1780684975483.png",
    readTime: 5,
    url: "https://callback-js.hashnode.dev/j-s-is-calling-back",
  },
  {
    title: "TCP vs UDP: Which Protocol Should You Use?",
    excerpt:
      "A practical comparison of TCP and UDP, when reliability matters, when speed matters, and how to pick the right protocol.",
    slug: "tcp-vs-udp",
    date: new Date("2026-01-25"),
    imageUrl:
      "/image-1780685007940.png",
    readTime: 6,
    url: "https://tcpvudp.hashnode.dev/tcp-vs-udp-which-protocol-should-you-use",
  },
  {
    title: "Git Explained: What It Is, Why You Need It, and How to Get Started",
    excerpt:
      "Understand Git from the ground up. Learn what version control is, why it's essential for developers, and how to get started with Git.",
    slug: "git-explained",
    date: new Date("2026-02-01"),
    imageUrl:
      "/image-1780693528184.png",
    readTime: 8,
    url: "https://gitbybirth.hashnode.dev/git-explained-what-it-is-why-you-need-it-and-how-to-get-started",
  },
  {
    title: "From URL to Website: What Happens When You Press Enter",
    excerpt:
      "Ever wondered what happens behind the scenes when you enter a URL and press Enter? A complete walkthrough of the web request lifecycle.",
    slug: "from-url-to-website",
    date: new Date("2026-02-02"),
    imageUrl:
      "/image-1780693575413.png",
    readTime: 9,
    url: "https://tushhtml.hashnode.dev/from-url-to-website-what-happens-when-you-press-enter",
  },
  {
    title: "Why VCS (Version Control System) Exists",
    excerpt:
      "Explore the reasons version control systems are critical for modern software development, collaboration, and maintaining code integrity.",
    slug: "why-vcs-exists",
    date: new Date("2026-02-03"),
    imageUrl:
      "/image-1780693621658.png",
    readTime: 6,
    url: "https://tushpendrive.hashnode.dev/why-vcs-version-control-system-exists",
  },
  {
    title: "DOM: The Tree",
    excerpt:
      "A deep dive into the Document Object Model (DOM) structure, how browsers parse HTML into the DOM tree, and how to interact with it.",
    slug: "dom-the-tree",
    date: new Date("2026-02-04"),
    imageUrl:
      "/image-1780693645467.png",
    readTime: 7,
    url: "https://dom-js-tush.hashnode.dev/dom-the-do-tree",
  },
  {
    title: "An In-Depth Look at How Git Works",
    excerpt:
      "Understand Git's internal architecture, how commits are stored, the role of the staging area, and the mechanics that power version control.",
    slug: "how-git-works",
    date: new Date("2026-02-05"),
    imageUrl:
      "/image-1780693668422.png",
    readTime: 10,
    url: "https://tushinsidegit.hashnode.dev/an-in-depth-look-at-how-git-works",
  },
];

export const experience = [
  {
    role: "Growth Intern",
    company: "LevelUpForWomen",
    location: "Gurgaon",
    period: "Dec 2025 - Feb 2026",
    points: [
      "Collaborated with cross-functional teams to streamline 3+ business workflows, reducing manual effort by about 20%.",
      "Managed 1,000+ user records using MS Excel and SQL, then analyzed engagement data through pivot tables to generate actionable insights.",
      "Prepared structured reports and data summaries for stakeholders, helping improve project tracking. ",
    ],
    certificate: "https://drive.google.com/file/d/19rIhCgheyAw4lybAjKoAUeiY88TuzWUk/view",
  },
  {
    role: "Analyst Intern",
    company: "Public Works Department (PWD)",
    location: "Muzaffarnagar",
    period: "Jul - Aug 2025",
    points: [
      "Collected, cleaned, and analyzed construction site data to support project tracking and operational planning.",
      "Developed structured reports and dashboards for monitoring project status, timelines, and field-level activities.",
      "Worked with large datasets to identify trends, inconsistencies, and performance indicators across ongoing infrastructure projects.",
      
    ],
    certificate: "https://drive.google.com/file/d/1A8UUknMp7QvH4LEt-ID_jJStwPSCrEmN/view?usp=drivesdk",
  },
];

export const certifications = [
  {
    name: "Cisco Cybersecurity Essentials - FutureSkills Prime (NASSCOM), Gold Category, Score: 97/100, 2026",
    url: "https://fsp-assessment-certificates.s3.ap-southeast-1.amazonaws.com/%27/s3/buckets/fsp-assessment-certificates%27/TUSHAR%2B._45179.pdf.pdf",
  },
  {
    name: "Introduction to Cybersecurity + Getting Started with Cisco Packet Tracer - FutureSkills Prime (NASSCOM), Gold Category, Score: 97/100, 2026",
    url: "https://fsp-assessment-certificates.s3.ap-southeast-1.amazonaws.com/%27/s3/buckets/fsp-assessment-certificates%27/TUSHAR%2B._45178.pdf.pdf",
  },
];

export const achievements = [
  "Built 10+ responsive website UI clones using HTML, CSS, and React.",
  "Serving as official Chai aur Code Campus Ambassador at NIT Jalandhar.",
  "Represented institute as a National-level Basketball Player in All India Inter-NIT competitions.",
];

export const activities = [
  {
    title: "Head Coordinator - AIINIT ",
    period: "NIT Jalandhar | Jan 2025 - Feb 2025",
    points: [
      "Managed end-to-end operations for a national-level tournament and led a large volunteer team.",
      "Created SOPs for registrations, match scheduling, real-time issue handling, logistics, hospitality, and transport.",
    ],
  },
  {
    title: "Core Team Member - TEDx ",
    period: "NIT Jalandhar | Aug 2023 - Apr 2024",
    points: [
      "Coordinated speaker outreach, audience management, and live session execution for a large-scale public event.",
      "Collaborated with cross-functional teams to manage event logistics, oversee registrations, and coordinate on-ground operations.",
    ],
  },
  
];

export const education = {
  school: "Dr. B.R. Ambedkar National Institute of Technology, Jalandhar",
  degree: "Bachelor of Technology",
  period: "2022 - 2026",
  location: "Punjab, India",
};
