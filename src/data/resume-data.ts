// Resume Data Constants
// All content for the portfolio/resume site

import {
  // Languages
  IconBrandPython,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandCSharp,
  IconBrandRust,
  IconBrandKotlin,
  IconCode,
  // Web & Mobile
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandTailwind,
  IconBrandSass,
  IconBrandFlutter,
  IconBrandAndroid,
  IconApi,
  // ML & Data Science
  IconBrandDatabricks,
  IconCircleLetterR,
  IconSql,
  IconBrandOpenai,
  IconAi,
  // Tools & Platforms
  IconBrandGit,
  IconBrandGithub,
  IconBrandVscode,
  IconCloud,
  IconLayoutKanban,
} from "@tabler/icons-react"

export const PERSONAL_INFO = {
  name: 'Juan Zurita',
  title: 'Software Engineer | AI & ML Enthusiast',
  profileImage: './juan-zurita.webp',
  about: `Computer Science graduate with a 3.8 GPA, undergraduate research experience in pathfinding algorithms, and a full-stack development background spanning React, Python, and cloud data tools. Seeking a software engineering or ML engineering role where strong fundamentals and cross-functional communication skills can drive real product impact.`,
  email: 'juanzurita@byui.edu',
  website: 'https://juanzurita.dev',
  about2: `Computer Science graduate with a 3.8 GPA, undergraduate research experience in pathfinding algorithms, and a full-stack development background spanning React, Python, and cloud data tools. Seeking a software engineering or ML engineering role where strong fundamentals and cross-functional communication skills can drive real product impact.`,
}

export const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/juanzuritavasquez',
    icon: './linkedin.svg',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/juan-zv',
    icon: './github.svg',
  }
]

export const NAVIGATION_ITEMS = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
]

export const EXPERIENCES = [
  {
    id: 'seeusshine',
    title: 'Web Developer - See Us Shine',
    institution: 'See Us Shine - Nonprofit Organization',
    place: 'Reno, NV (Remote)',
    dateRange: 'Jun 2026 - Present',
    description: [
      'Architected and executed the migration of legacy data into a distributed system, implementing relational database principles to significantly improve scalability, data integrity, and administrative efficiency.',
      'Refactored core provider registration workflows utilizing Wix and Velo/JavaScript, ensuring seamless, secure data ingestion directly into the new database system.',
      'Accelerated development and testing cycles by leveraging AI-assisted coding and engineering custom JavaScript scripts for migration, testing and validation.',
      'Established Git/GitHub version control workflows for the development team, establishing code review practices and streamlining collaborative feature deployment.'],
    responsibilities: [],
  },
  {
    id: 'immerse',
    title: 'Undergraduate Researcher - Pathfinding Algorithms',
    institution: 'Brigham Young University (IMMERSE Program, MAGICC Lab)',
    place: 'Provo, UT',
    dateRange: 'May 2025 - Jul 2025',
    description: [
      "Collaborated with faculty and graduate researchers to develop a hexagonal grid adaptation of the Jump Point Search (JPS) algorithm, contributing novel insights to pathfinding algorithm research.",
      "Implemented Python simulations and demos to validate algorithmic behavior, improving the team's ability to evaluate performance on grid-based environments.",
      "Authored progress documentation and delivered technical presentations, strengthening cross-team knowledge sharing and research visibility."
    ],
    responsibilities: [],
  },
  {
    id: 'online-grader',
    title: 'Online Grader - Web Design & Development',
    institution: 'Brigham Young University-Idaho',
    place: 'Rexburg, ID',
    dateRange: 'Apr 2024 - Apr 2026',
    description: [
      'Evaluated 100+ student assignments per week on HTML, CSS, JavaScript, and responsive design with consistent sub-24-hour turnaround; maintained rubric alignment across a 200+ student cohort.',
      'Partnered with instructors to analyze grade-distribution data and identify recurring misconceptions, leading to targeted curriculum revisions that reduced common error rates by ~30%.',
      'Authored reusable feedback templates and rubric documentation adopted across all WDD course sections.'
    ],
    responsibilities: [],
  },
  {
    id: 'teaching-assistant',
    title: 'Teaching Assistant - WDD 230: Web Frontend Development I',
    institution: 'Brigham Young University-Idaho',
    place: 'Rexburg, ID',
    dateRange: 'Apr 2023 - Apr 2024',
    description: [
      'Tutored 20-30 students in front-end development fundamentals including semantic HTML, CSS layouts, Flexbox/Grid, and vanilla JavaScript DOM manipulation, contributing to a 15% improvement in section pass rates.',
      'Diagnosed and resolved student coding issues in real time during office hours, averaging 10+ debugging sessions per week and reducing average issue resolution time from days to under an hour.',
      'Led peer code-review sessions that built collaborative habits and deepened student understanding of web accessibility and responsive-design best practices.',
      'Developed automated grading tools using JavaScript that reduced per-assignment evaluation time, allowing more time for high-quality feedback.'
    ],
    responsibilities: [],
  },
  {
    id: 'volunteer',
    title: 'Full-Time Volunteer Representative',
    institution: 'The Church of Jesus Christ of Latter-day Saints',
    place: 'Santa Cruz, Bolivia',
    dateRange: 'Jan 2020 - Jan 2022',
    description: [
      'Led and mentored teams of 10-20 volunteers as district and zone leader, overseeing scheduling, goal setting, and performance coaching.',
      'Facilitated structured training sessions to improve volunteer effectiveness, communication, and accountability across multiple districts.'
    ],
    responsibilities: [],
  },
]

export const EDUCATION = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'Brigham Young University-Idaho',
  dateRange: 'Apr 2022 - Apr 2026',
  gpa: '3.8/4.0',
  description: [
    'Relevant Coursework: Machine Learning & Data Science, Full-Stack Web Development, Object-Oriented Programming, Parallel & Concurrent Programming, Database Systems & Design, Massive Data Engineering, Calculus, Linear Algebra, Discrete Mathematics, Data Structures and Algorithms (Python + C#), Web Design (HTML + CSS + JavaScript), Web Backend (Node.js + Express.js + PostgreSQL), Data Science (R + Python Pandas/Polars).'
  ],
  coursework: [
    'Machine Learning & Data Science',
    'Full-Stack Web Development',
    'Object-Oriented Programming',
    'Parallel & Concurrent Programming',
    'Database Systems & Design',
    'Massive Data Engineering',
    'Calculus',
    'Linear Algebra',
    'Discrete Mathematics',
    'Data Structures and Algorithms (Python + C#)',
    'Web Design (HTML + CSS + JavaScript)',
    'Web Backend (Node.js + Express.js + PostgreSQL)',
  ],
}

export const SKILLS = {
  'Languages': [
    { name: 'Python', icon: IconBrandPython, level: 5 },
    { name: 'JavaScript', icon: IconBrandJavascript, level: 5 },
    { name: 'TypeScript', icon: IconBrandTypescript, level: 4 },
    { name: 'C#', icon: IconBrandCSharp, level: 4 },
    { name: 'Java', icon: IconCode, level: 2 },
    { name: 'Kotlin', icon: IconBrandKotlin, level: 2 },
    { name: 'Rust', icon: IconBrandRust, level: 2 },
  ],
  'Web & Mobile': [
    { name: 'React', icon: IconBrandReact, level: 4 },
    { name: 'Next.js', icon: IconBrandNextjs, level: 3 },
    { name: 'Node.js', icon: IconBrandNodejs, level: 3 },
    { name: 'Tailwind CSS', icon: IconBrandTailwind, level: 4 },
    { name: 'SCSS', icon: IconBrandSass, level: 3 },
    { name: 'Flutter', icon: IconBrandFlutter, level: 2 },
    { name: 'Android Studio', icon: IconBrandAndroid, level: 2 },
    { name: 'REST APIs', icon: IconApi, level: 3 },
  ],
  'ML & Data Science': [
    { name: 'Pandas', icon: IconBrandPython, level: 4 },
    { name: 'Polars', icon: IconBrandPython, level: 3 },
    { name: 'PySpark', icon: IconBrandPython, level: 2 },
    { name: 'Databricks', icon: IconBrandDatabricks, level: 2 },
    { name: 'R', icon: IconCircleLetterR, level: 2 },
    { name: 'SQL', icon: IconSql, level: 3 },
    { name: 'OpenAI SDK', icon: IconBrandOpenai, level: 2 },
    { name: 'Model Context Protocol (MCP)', icon: IconAi, level: 2 },
  ],
  'Tools & Platforms': [
    { name: 'Git', icon: IconBrandGit, level: 4 },
    { name: 'GitHub', icon: IconBrandGithub, level: 4 },
    { name: 'VS Code', icon: IconBrandVscode, level: 5 },
    { name: 'Cloud Databases', icon: IconCloud, level: 3 },
    { name: 'Agile/Scrum methodologies', icon: IconLayoutKanban, level: 3 },
  ],
}

const getScreenshot = (url: string) => url ? `https://api.microlink.io/?url=${url}&screenshot&meta=false&embed=screenshot.url` : '';

export const PROJECTS = [

  {
    id: 'dual-validator',
    title: 'Dual Validator',
    description: "A tool for validating multiple pages' HTML and CSS in one go.",
    skills: ['Astro', 'JavaScript', 'HTML', 'CSS', 'REST APIs'],
    imageSrc: getScreenshot('https://juan-zv.github.io/dual-validator/'),
    repository: 'https://github.com/juan-zv/dual-validator/',
    liveDemo: 'https://juan-zv.github.io/dual-validator/',
  },
  {
    id: 'ui-ride',
    title: 'U&I Ride',
    description: 'Web app concept aimed at optimizing ride-sharing services in the Idaho-Utah area.',
    skills: ['TypeScript', 'Vite', 'React', 'Tailwind CSS', 'Supabase', 'Shadcn/ui', 'REST APIs'],
    imageSrc: getScreenshot('https://u-i-ride-alpha.vercel.app/'),
    repository: 'https://github.com/juan-zv/u-i-ride-alpha',
    liveDemo: 'https://u-i-ride-alpha.vercel.app/',
  },
  {
    id: 'movie-matching-webapp',
    title: 'Movie Matching Web App',
    description: "A React + TypeScript web application for browsing movies, rating titles, and managing user access with Supabase authentication, featuring personalized movie recommendations and pair-based matching.",
    skills: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'React Router DOM', 'React Query', 'Framer Motion', 'shadcn/ui', 'Supabase', 'pnpm', 'Zod', 'React Hook Form'],
    imageSrc: getScreenshot('https://movie-matching-webapp.vercel.app/'),
    repository: 'https://github.com/juan-zv/movie-matching-webapp/',
    liveDemo: 'https://movie-matching-webapp.vercel.app/',
  },
  {
    id: 'life-app',
    title: 'Life App',
    description: "A comprehensive life dashboard application designed to integrate and visualize key personal metrics including finances, habits, and goals (developed as a hackathon project).",
    skills: ['Hackathon Project', 'TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Clerk', 'REST APIs'],
    imageSrc: getScreenshot('https://life-app-hackathon.vercel.app/'),
    repository: 'https://github.com/juan-zv/life-app-hackathon',
    liveDemo: 'https://life-app-hackathon.vercel.app/',
  },
  {
    id: 'habitus',
    title: 'Habitus Web App',
    description: "Web application developed during BYU-Idaho's hackathon event for household and roommate management with browser-only local persistence.",
    skills: ['Hackathon Project', 'TypeScript', 'Vite', 'React', 'Tailwind CSS', 'shadcn/ui'],
    imageSrc: getScreenshot('https://juan-zv.github.io/habitus/'),
    repository: 'https://github.com/juan-zv/habitus',
    liveDemo: 'https://juan-zv.github.io/habitus/',
  },
  {
    id: 'keystone-apparel',
    title: 'Keystone Apparel Sales System',
    description: 'Management system for a small business, developed to handle sales and pre-sales data (demo version).',
    skills: ['Vite', 'TypeScript', 'React', 'Tailwind CSS', 'REST APIs'],
    imageSrc: getScreenshot('https://juan-zv.github.io/keystone-apparel-demo/'),
    repository: 'https://github.com/juan-zv/keystone-apparel-demo',
    liveDemo: 'https://juan-zv.github.io/keystone-apparel-demo/',
  },
  {
    id: 'data-science',
    title: 'Data Science Portfolio',
    description: 'A portfolio showcasing data science projects focused on data analysis and visualization, and machine learning using Python libraries.',
    skills: ['Python', 'NumPy', 'Pandas', 'Plotly Express', 'Scikit-learn', 'SQL', 'SQLite3', 'Jupyter Notebook', 'YAML', 'Quarto'],
    imageSrc: getScreenshot('https://juan-zv.github.io/data-science-portfolio/'),
    repository: 'https://github.com/juan-zv/data-science-portfolio/',
    liveDemo: 'https://juan-zv.github.io/data-science-portfolio/',
  },
  {
    id: 'store-dashboard',
    title: 'Data Analysis Dashboard',
    description: 'An interactive Streamlit dashboard for exploring retail performance across five Idaho stores, featuring analytics views over local parquet datasets.',
    skills: ['Python', 'Streamlit', 'Polars', 'Plotly', 'Great Tables', 'Pandas', 'Requests', 'PyArrow'],
    imageSrc: getScreenshot('https://idaho-data-dashboard.streamlit.app/'),
    repository: 'https://github.com/juan-zv/data-dashboard/',
    liveDemo: 'https://idaho-data-dashboard.streamlit.app/',
  },
];

