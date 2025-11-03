// Resume Data Constants
// All content for the portfolio/resume site

export const PERSONAL_INFO = {
  name: 'Juan Zurita',
  title: 'Computer Scientist',
  profileImage: './yo-optimized.webp',
  about: `Hi! I'm Juan Zurita, a Computer Science student at BYU-Idaho. I was born in Bolivia 🇧🇴, but when I was 4 years old, my family moved to Spain 🇪🇸, where I grew up and have lived most of my life.
I'm passionate about technology and AI, and I love creating anything that can have a real impact in the world. I enjoy learning a broad range of topics and I'm continuously looking for new challenges. I built this static vanilla JavaScript website to host my resume and showcase my design abilities. I hope you enjoy it!`,
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
    title: 'IMMERSE Researcher',
    institution: 'Brigham Young University',
    place: 'Provo, UT',
    dateRange: 'May 2025 - July 2025',
    description: [
        "Participated in the BYU IMMERSE program focused on research opportunities for undergraduate students in Computer Science and Electrical Engineering. I worked on Hexagonal Grid Adaptation of Jump Point Search algorithm."
    ],
    responsibilities: [
      {
        text: 'Collaborated with a professor from the MAGICC Lab at BYU, and graduate-level researchers on a hexagonal grid adaptation of the Jump Point Search algorithm.',
      },
      {
        text: 'Documented regular progress updates and participated in team discussions facilitating knowledge and presentations on the research topic.',
      },
      {
        text: 'Implemented Python demonstrations for the algorithm and contributed with code to a new insight on pathfinding algorithms.',
      },
    ],
  },
  {
    id: 'online-grader',
    title: 'Online Grader for CSE and WDD courses',
    institution: 'Brigham Young University - Idaho & BYU Pathway Worldwide',
    place: 'Rexburg, ID (Remote)',
    dateRange: 'September 2024 - Present',
    description: [
      "As an Online Grader, I evaluate and provide feedback on student assignments for Computer Science and Web Development courses. This role has honed my ability to assess code quality and offer constructive criticism.",
    ],
    responsibilities: [
      {
        text: "Provided feedback and graded 100+ students' web design and development assignments each week.",
      },
      {
        text: 'Ensured students achieve proficiency in creating responsive, well-designed, and interactive web pages using HTML, CSS, and JavaScript.',
      },
      {
        text: 'Collaborated closely with instructors to provide essential data to Web Design and Development (WDD) courses to better achieve learning outcomes.',
      },
    ],
  },
  {
    id: 'teaching-assistant',
    title: 'Online Teacher Assistant for WDD230',
    institution: 'Brigham Young University - Idaho',
    place: 'Rexburg, ID',
    dateRange: 'April 2023 - July 2024',
    description: [
      'Being a TA has helped me acquire valuable skills which I can use on any project I work on. Troubleshooting is something really important as much as providing support to others. These abilities help me write clean code and think about the accessibility for my projects.',
    ],
    responsibilities: [
      {
        text: 'Provided guidance and support to 20+ students in web development using HTML, CSS, and JavaScript.',
      },
      {
        text: 'Guided students to achieve proficiency in creating responsive, well-designed, and interactive web pages using HTML, CSS, and JavaScript.',
      },
      {
        text: 'Assisted students in understanding and implementing web development concepts, troubleshoot coding issues, and contribute to a collaborative learning environment.',
      },
    ],
  },
]

export const EDUCATION = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'Brigham Young University - Idaho',
  dateRange: 'April 2022 - Present',
  gpa: '3.83/4.00',
  description: [
    'My education at BYU-Idaho has provided me with a strong foundation in computer science principles and practical skills. The coursework has equipped me with knowledge in various areas of computer science, preparing me for real-world challenges in the tech industry.',
    'I am currently studying Computer Science with an emphasis on Machine Learning at Brigham Young University-Idaho. Among the coursework that I have taken, I have learned the application of different data structures and algorithms, and the basics of Object-Oriented Programming. Other useful knowledge I have acquired includes work methodologies like SCRUM and DevOps, as well as web development tools like SASS and front-end libraries.',
  ],
  coursework: [
    'Data Structures and Algorithms',
    'Web Development (HTML, CSS, JavaScript, React)',
    'Database Management Systems',
    'Operating Systems',
    'Software Engineering Principles',
    'Computer Networks',
  ],
}

export const SKILLS = {
  'Programming Languages': [
    { name: 'Python', logoSrc: 'https://img.icons8.com/ios-filled/100/python.png', level: 5 },
    { name: 'JavaScript', logoSrc: 'https://img.icons8.com/ios-filled/100/javascript.png', level: 5 },
    { name: 'TypeScript', logoSrc: 'https://img.icons8.com/ios-filled/100/typescript.png', level: 4 },
    { name: 'C#', logoSrc: 'https://img.icons8.com/ios-filled/100/c-sharp-logo.png', level: 4 },
    { name: 'Rust', logoSrc: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-rust-is-a-multi-paradigm-system-programming-language-logo-bold-tal-revivo.png', level: 2 },
  ],
  'Tools & Technologies': [
    { name: 'VS Code', logoSrc: 'https://img.icons8.com/ios-filled/100/visual-studio.png', level: 5 },
    { name: 'Git & GitHub', logoSrc: 'https://img.icons8.com/sf-regular-filled/96/github.png', level: 4 },
    { name: 'Figma', logoSrc: 'https://img.icons8.com/ios-filled/100/figma.png', level: 4 },
    { name: 'Tailwind CSS', logoSrc: 'https://img.icons8.com/material-outlined/96/tailwind_css.png', level: 4 },
    { name: 'React', logoSrc: 'https://img.icons8.com/ios-glyphs/90/react.png', level: 3 },
    { name: 'Node.js', logoSrc: 'https://img.icons8.com/windows/96/nodejs.png', level: 3 },
  ],
  'Soft Skills': [
    { name: 'Problem Solving', logoSrc: 'https://img.icons8.com/ios-filled/100/brain.png', level: 5 },
    { name: 'Teamwork', logoSrc: 'https://img.icons8.com/ios-filled/100/collaborating-in-circle.png', level: 5 },
    { name: 'Ethical Awareness', logoSrc: 'https://img.icons8.com/ios-filled/100/earth-planet.png', level: 5 },
    { name: 'Project Management', logoSrc: 'https://img.icons8.com/ios-filled/100/analyzing-skill.png', level: 4 },
    { name: 'Adaptability', logoSrc: 'https://img.icons8.com/ios-filled/100/change-user-male.png', level: 4 },
    { name: 'Communication', logoSrc: 'https://img.icons8.com/ios-filled/100/communication-skill.png', level: 4 },
  ],
}

// Import paths for project images
import habitusImage from '@/assets/habitus.png'
import ibcReportGeneratorImage from '@/assets/ibc-report-generator.png'
import ibcSalesTrackerImage from '@/assets/ibc-sales-tool.png'
import combinedValidatorImage from '@/assets/combined-validator.png'
import dataSciencePortfolioImage from '@/assets/data-science-portfolio.png'
import membersDataCheckerImage from '@/assets/members-data-checker.png'
import uiRideImage from '@/assets/u-i-ride.png'

export const PROJECTS = [
  {
    id: 'habitus',
    title: 'Habitus Web App',
    description: "Web application developed during BYU-Idaho's hackathon event, created to manage households and roommates efficiently.",
    imageSrc: habitusImage,
    repository: 'https://github.com/juan-zv/running-potato-key',
  },
  {
    id: 'ibc-report',
    title: 'IBC Report Generator',
    description: 'A tool for generating reports from IBC data. It uses a Supabase database to store and manage data efficiently.',
    imageSrc: ibcReportGeneratorImage,
    repository: 'https://github.com/juan-zv/report_generator',
  },
  {
    id: 'ibc-sales',
    title: 'IBC Sales Tracker',
    description: 'A sales tracking tool for IBC. It records sales data and saves it in a Supabase database for easy access and analysis.',
    imageSrc: ibcSalesTrackerImage,
    repository: 'https://github.com/juan-zv/ibc-sales-tool',
  },
  {
    id: 'combined-validator',
    title: 'Combined Validator',
    description: "A tool for validating multiple pages' HTML and CSS in one go.",
    imageSrc: combinedValidatorImage,
    repository: 'https://juan-zv.github.io/combined-validator-vanillajs/',
  },
  {
    id: 'data-science',
    title: 'Data Science Portfolio',
    description: 'A portfolio showcasing data science projects.',
    imageSrc: dataSciencePortfolioImage,
    repository: 'https://juan-zv.github.io/data-science-portfolio/',
  },
  {
    id: 'members-checker',
    title: 'Members Data Checker',
    description: "A tool for checking student's members data integrity. Used to grade WDD 230 course.",
    imageSrc: membersDataCheckerImage,
    repository: 'https://juan-zv.github.io/members-data-checker/',
  },
  {
    id: 'ui-ride',
    title: 'U&I Ride',
    description: 'Mobile app concept aimed at optimizing ride-sharing services in the Idaho-Utah area. Started developing CSS for future components.',
    imageSrc: uiRideImage,
    repository: 'https://juan-zv.github.io/iride-web-app/',
  },
]

export const FOOTER_LINKS = [
  { label: 'Vite', url: 'https://vite.dev/' },
  { label: 'React', url: 'https://react.dev/' },
  { label: 'Lucide Icons', url: 'https://lucide.dev/' },
  { label: 'Icons8 Icons', url: 'https://icons8.com' },
  { label: 'Shadcn UI Components', url: 'https://ui.shadcn.com/' },
]

export const EXTERNAL_LINKS = {
  oldVersion: 'https://html-resume-juan-zurita.vercel.app/',
}
