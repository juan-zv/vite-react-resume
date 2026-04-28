// Resume Data Constants
// All content for the portfolio/resume site

export const PERSONAL_INFO = {
  name: 'Juan Zurita',
  title: 'Computer Science Student',
  profileImage: './yo-optimized.webp',
  about: `Hi! I'm Juan Zurita, a Computer Science student at BYU-Idaho. I was born in Bolivia 🇧🇴, but when I was 4 years old, my family moved to Spain 🇪🇸, where I grew up and have lived most of my life.
I'm passionate about technology and AI, and I love creating anything that can have a real impact in the world. I enjoy learning a broad range of topics and I'm continuously looking for new challenges. I built this site to host my resume and showcase my design abilities.`,
  email: 'juanzurita@byui.edu',
  website: 'https://juanzurita.dev',
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
    title: 'Undergraduate Researcher – Pathfinding Algorithms',
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
    title: 'Online Grader – Web Design & Development',
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
    title: 'Teaching Assistant – WDD 230: Web Frontend Development I',
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
import membersDataCheckerImage from '@/assets/members-data-checker.png'
import uiRideImage from '@/assets/u-i-ride.png'

export const PROJECTS = [
  {
    id: 'data-science',
    title: 'Data Science Portfolio',
    description: 'A portfolio showcasing data science projects.',
    imageSrc: dataSciencePortfolioImage,
    repository: 'https://github.com/juan-zv/data-science-portfolio/',
    liveDemo: 'https://juan-zv.github.io/data-science-portfolio/',
  },
  {
    id: 'habitus',
    title: 'Habitus Web App',
    description: "Web application developed during BYU-Idaho's hackathon event, created to manage households and roommates efficiently.",
    imageSrc: habitusImage,
    repository: 'https://github.com/juan-zv/habitus/',
    liveDemo: 'https://juan-zv.github.io/habitus/',
  },
  {
    id: 'keystone-apparel',
    title: 'Keystone Apparel Sales System',
    description: 'Management system for a small business, developed to handle sales and pre-sales data. This is just a demo version of the system.',
    imageSrc: ibcReportGeneratorImage,
    repository: 'https://github.com/juan-zv/keystone-apparel-demo',
    liveDemo: 'https://juan-zv.github.io/keystone-apparel-demo/',
  },
  {
    id: 'combined-validator',
    title: 'Combined Validator',
    description: "A tool for validating multiple pages' HTML and CSS in one go.",
    imageSrc: combinedValidatorImage,
    repository: 'https://github.com/juan-zv/combined-validator-vanillajs/',
    liveDemo: 'https://juan-zv.github.io/combined-validator-vanillajs/',
  },
  {
    id: 'members-checker',
    title: 'Members Data Checker',
    description: "A tool for checking student's members data integrity. Used to grade WDD 230 course.",
    imageSrc: membersDataCheckerImage,
    repository: 'https://github.com/juan-zv/members-data-checker/',
    liveDemo: 'https://juan-zv.github.io/members-data-checker/',
  },
  {
    id: 'ui-ride',
    title: 'U&I Ride',
    description: 'Mobile app concept aimed at optimizing ride-sharing services in the Idaho-Utah area. Started developing CSS for future components.',
    imageSrc: uiRideImage,
    repository: 'https://github.com/juan-zv/iride-web-app/',
    liveDemo: 'https://juan-zv.github.io/iride-web-app/',
  },
]

export const FOOTER_LINKS = [
  { label: 'Vite', url: 'https://vite.dev/' },
  { label: 'React', url: 'https://react.dev/' },
  { label: 'Tabler Icons', url: 'https://tabler.io/icons' },
  { label: 'Icons8 Icons', url: 'https://icons8.com' },
  { label: 'Shadcn UI Components', url: 'https://ui.shadcn.com/' },
]

export const EXTERNAL_LINKS = {
  oldVersion: 'https://html-resume-juan-zurita.vercel.app/',
}
