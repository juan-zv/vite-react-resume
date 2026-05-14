// Resume Data Constants
// All content for the portfolio/resume site

export const PERSONAL_INFO = {
  name: 'Juan Zurita',
  title: 'Software Engineer | AI & ML Enthusiast',
  profileImage: './juan-zurita.webp',
  about: `Hi! I'm Juan Zurita, a Computer Science student at BYU-Idaho. I was born in Bolivia 🇧🇴, but when I was 4 years old, my family moved to Spain 🇪🇸, where I grew up and have lived most of my life.
I'm passionate about technology and AI, and I love creating anything that can have a real impact in the world. I enjoy learning a broad range of topics and I'm continuously looking for new challenges. I built this site to host my resume and showcase my design abilities.`,
  email: 'juanzurita@byui.edu',
  website: 'https://juanzurita.dev',
  about2: `Hi! I'm Juan Zurita. I recently graduated from BYU-Idaho with a degree in Computer Science and a focus on Machine Learning. 
        I built this space to share some of my projects and my resume. Thanks for stopping by, I'd love to connect!. 
        My journey has taken me from Bolivia to Spain and back again, including two years of volunteer service that shaped how I approach teamwork and leadership.
        I really enjoy the process of building—whether that's researching pathfinding algorithms, helping students as a TA, or developing full-stack tools with Python and React.        `
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
  },
  {
    id: 'website',
    label: 'Website',
    url: 'https://juanzurita.dev',
    icon: './website.svg',
  },
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
    id: 'immerse',
    title: 'Undergraduate Researcher - Pathfinding Algorithms',
    institution: 'Brigham Young University (IMMERSE Program, MAGICC Lab)',
    place: 'Provo, UT',
    dateRange: 'May 2025 - Jul 2025',
    description: [
      'Collaborated with faculty and graduate researchers to develop a hexagonal grid adaptation of the Jump Point Search (JPS) algorithm, contributing novel insights to pathfinding algorithm research.',
      'Implemented Python simulations and demos to validate algorithmic behavior, improving team’s ability to evaluate performance on grid-based environments.',
      'Authored progress documentation and delivered technical presentations, strengthening cross-team knowledge sharing and research visibility.'
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
      'Assessed and provided actionable feedback on 100+ student assignments per week covering HTML, CSS, JavaScript, and responsive design principles.',
      'Partnered with instructors to analyze student performance data and refine curriculum outcomes for WDD course offerings.',
      'Maintained grading consistency and rubric standards across a large student cohort, ensuring equitable and standards-aligned evaluation.'
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
      'Tutored 20-30 students in front-end development fundamentals including semantic HTML, CSS layouts, and vanilla JavaScript DOM manipulation.',
      'Diagnosed and resolved student coding issues, reducing debugging turnaround and boosting student confidence and course completion.',
      'Fostered a collaborative learning environment by facilitating peer discussion, code reviews, and one-on-one mentoring sessions.'
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
  dateRange: 'Apr 2022 – Apr 2026',
  gpa: '3.8/4.0',
  description: [
    'Relevant Coursework: Machine Learning & Data Science, Full-Stack Web Development, Object-Oriented Programming, Parallel & Concurrent Programming, Database Systems & Design, Financial Accounting, Project Management, Product Development'
  ],
  coursework: [
    'Machine Learning & Data Science',
    'Full-Stack Web Development',
    'Object-Oriented Programming',
    'Parallel & Concurrent Programming',
    'Database Systems & Design',
    'Financial Accounting',
    'Project Management',
    'Product Development',
  ],
}

export const SKILLS = {
  'Languages': [
    { name: 'Python', logoSrc: 'https://img.icons8.com/ios-filled/100/python.png', level: 5 },
    { name: 'JavaScript', logoSrc: 'https://img.icons8.com/ios-filled/100/javascript.png', level: 5 },
    { name: 'TypeScript', logoSrc: 'https://img.icons8.com/ios-filled/100/typescript.png', level: 4 },
    { name: 'C#', logoSrc: 'https://img.icons8.com/ios-filled/100/c-sharp-logo.png', level: 4 },
    { name: 'Java', logoSrc: 'https://img.icons8.com/ios-filled/100/java-coffee-cup-logo.png', level: 3 },
    { name: 'Kotlin', logoSrc: 'https://img.icons8.com/color/96/kotlin.png', level: 2 },
    { name: 'Rust', logoSrc: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-rust-is-a-multi-paradigm-system-programming-language-logo-bold-tal-revivo.png', level: 2 },
  ],
  'Web & Mobile': [
    { name: 'React', logoSrc: 'https://img.icons8.com/ios-glyphs/90/react.png', level: 4 },
    { name: 'Next.js', logoSrc: 'https://img.icons8.com/ios-filled/100/nextjs.png', level: 3 },
    { name: 'Node.js', logoSrc: 'https://img.icons8.com/windows/96/nodejs.png', level: 3 },
    { name: 'Tailwind CSS', logoSrc: 'https://img.icons8.com/material-outlined/96/tailwind_css.png', level: 4 },
    { name: 'SCSS', logoSrc: 'https://img.icons8.com/color/96/sass.png', level: 3 },
    { name: 'Flutter', logoSrc: 'https://img.icons8.com/color/96/flutter.png', level: 2 },
    { name: 'Android Studio', logoSrc: 'https://img.icons8.com/color/96/android-studio--v2.png', level: 2 },
    { name: 'REST APIs', logoSrc: 'https://img.icons8.com/ios-filled/100/api-settings.png', level: 3 },
  ],
  'ML & Data Science': [
    { name: 'Pandas', logoSrc: 'https://img.icons8.com/external-soft-fill-juicy-fish/60/external-pandas-coding-and-development-soft-fill-soft-fill-juicy-fish.png', level: 4 },
    { name: 'Polars', logoSrc: 'https://img.icons8.com/color/96/polar-bear.png', level: 3 },
    { name: 'PySpark', logoSrc: 'https://img.icons8.com/color/96/apache-spark.png', level: 2 },
    { name: 'Databricks', logoSrc: 'https://img.icons8.com/color/96/databricks.png', level: 2 },
    { name: 'R', logoSrc: 'https://img.icons8.com/ios-filled/100/r-project.png', level: 2 },
    { name: 'SQL', logoSrc: 'https://img.icons8.com/ios-filled/100/sql.png', level: 3 },
    { name: 'OpenAI SDK', logoSrc: 'https://img.icons8.com/color/96/openai.png', level: 2 },
    { name: 'Model Context Protocol (MCP)', logoSrc: 'https://img.icons8.com/color/96/artificial-intelligence.png', level: 2 },
  ],
  'Tools & Platforms': [
    { name: 'Git', logoSrc: 'https://img.icons8.com/ios-filled/100/git.png', level: 4 },
    { name: 'GitHub', logoSrc: 'https://img.icons8.com/sf-regular-filled/96/github.png', level: 4 },
    { name: 'VS Code', logoSrc: 'https://img.icons8.com/ios-filled/100/visual-studio.png', level: 5 },
    { name: 'Cloud Databases', logoSrc: 'https://img.icons8.com/ios-filled/100/cloud.png', level: 3 },
    { name: 'Agile/Scrum methodologies', logoSrc: 'https://img.icons8.com/ios-filled/100/scrum.png', level: 3 },
  ],
}

// Import paths for project images
import habitusImage from '@/assets/habitus.png'
import ibcReportGeneratorImage from '@/assets/ibc-report-generator.png'
import combinedValidatorImage from '@/assets/combined-validator.png'
import dataSciencePortfolioImage from '@/assets/data-science-portfolio.png'
import uiRideImage from '@/assets/u-i-ride.png'

export const PROJECTS = [
  {
    id: 'data-science',
    title: 'Data Science Portfolio',
    description: 'A portfolio showcasing data science projects.',
    skills: ['Python', 'Pandas', 'R', 'SQL'],
    imageSrc: dataSciencePortfolioImage,
    repository: 'https://github.com/juan-zv/data-science-portfolio/',
    liveDemo: 'https://juan-zv.github.io/data-science-portfolio/',
  },
  {
    id: 'store-dashboard',
    title: 'Data Analysis Dashboard',
    description: 'A dashboard visualizing data for 5 different convenience stores in Idaho.',
    skills: ['Python', 'Numpy', 'Pandas', 'Plotly', 'Scikit-learn', 'SQL', 'YAML', 'Quarto', 'Python Notebooks'],
    imageSrc: dataSciencePortfolioImage,
    repository: 'https://github.com/juan-zv/data-science-portfolio/',
    liveDemo: 'https://juan-zv.github.io/data-science-portfolio/',
  },
  {
    id: 'movie-matching-webapp',
    title: 'Movie Matching Web App',
    description: "A web application that helps users find movies to watch based on their preferences.",
    skills: ['TypeScript', 'Vite', 'React', 'Shadcn/ui', 'Tailwind CSS', 'PostgreSQL', 'Framer Motion', 'TMDB API', 'REST APIs'],
    imageSrc: dataSciencePortfolioImage,
    repository: 'https://github.com/juan-zv/movie-matching-webapp/',
    liveDemo: 'https://movie-matching-webapp.vercel.app/',
  },
  {
    id: 'life-app',
    title: 'Life App',
    description: "A comprehensive life dashboard application designed to integrate and visualize key personal metrics including finances, habits, and goals.",
    skills: ['Hackathon Project', 'TypeScript', 'Next.js', 'Shadcn/ui', 'Tailwind CSS', 'PostgreSQL', 'Clerk', 'REST APIs'],
    imageSrc: dataSciencePortfolioImage,
    repository: 'https://github.com/juan-zv/life-app-hackathon',
    liveDemo: 'https://life-app-hackathon.vercel.app/',
  },
  {
    id: 'habitus',
    title: 'Habitus Web App',
    description: "Web application developed during BYU-Idaho's hackathon event, created to manage households and roommates efficiently.",
    skills: ['Hackathon Project', 'TypeScript', 'Vite', 'React', 'Tailwind CSS', 'Supabase', 'Shadcn/ui', 'REST APIs'],
    imageSrc: habitusImage,
    repository: 'https://github.com/juan-zv/habitus',
    liveDemo: 'https://juan-zv.github.io/habitus/',
  },
  {
    id: 'keystone-apparel',
    title: 'Keystone Apparel Sales System',
    description: 'Management system for a small business, developed to handle sales and pre-sales data. This is just a demo version of the system.',
    skills: ['Python', 'Pandas', 'R', 'SQL'],
    imageSrc: ibcReportGeneratorImage,
    repository: 'https://github.com/juan-zv/keystone-apparel-demo',
    liveDemo: 'https://juan-zv.github.io/keystone-apparel-demo/',
  },
  {
    id: 'combined-validator',
    title: 'Combined Validator',
    description: "A tool for validating multiple pages' HTML and CSS in one go.",
    skills: ['Python', 'Pandas', 'R', 'SQL'],
    imageSrc: combinedValidatorImage,
    repository: 'https://github.com/juan-zv/combined-validator-vanillajs/',
    liveDemo: 'https://juan-zv.github.io/combined-validator-vanillajs/',
  },
  {
    id: 'ui-ride',
    title: 'U&I Ride',
    description: 'Web app concept aimed at optimizing ride-sharing services in the Idaho-Utah area. Started developing CSS for future components.',
    skills: ['TypeScript', 'Vite', 'React', 'Tailwind CSS', 'Supabase', 'Shadcn/ui', 'REST APIs'],
    imageSrc: uiRideImage,
    repository: 'https://github.com/juan-zv/u-i-ride-alpha',
    liveDemo: 'https://juan-zv.github.io/iride-web-app/',
  },
]
