
import './App.css'
import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from './components/ui/button'
import { ProjectCard } from './components/ui/project-card'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './components/ui/navigation-menu'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { SectionCard } from './components/ui/section-card'
import { Skill } from './components/ui/skill'
import { ExperienceCard } from './components/ui/experience-card'
import { cn } from '@/lib/utils'
import { 
  IconBrandLinkedin, 
  IconBrandGithub, 
  IconChevronUp,
  IconChartDots,
  IconTable,
  IconMath,
  IconBrain,
  IconCpu,
  IconBrandPython,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandCSharp,
  IconBrandRust,
  IconBrandVscode,
  IconBrandFigma,
  IconBrandTailwind,
  IconBrandReact,
  IconBrandNodejs,
  IconUsers,
  IconGlobe,
  IconBriefcase,
  IconArrowsExchange,
  IconMessages
} from '@tabler/icons-react'
import { motion, useScroll } from "motion/react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

import habitusImage from '@/assets/habitus.png'
import ibcReportGeneratorImage from '@/assets/ibc-report-generator.png'
import combinedValidatorImage from '@/assets/combined-validator.png'
import dataSciencePortfolioImage from '@/assets/data-science-portfolio.png'
import membersDataCheckerImage from '@/assets/members-data-checker.png'
import uiRideImage from '@/assets/u-i-ride.png'


function App() {
  const { scrollYProgress } = useScroll();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-50 shadow-md"
        style={{ scaleX: scrollYProgress }}
      />
      <ModeToggle />
      <Button className='absolute top-4 right-4 drop-shadow-lg cursor-pointer' variant={'outline'} onClick={() => window.open("https://html-resume-juan-zurita.vercel.app/", "_blank")}>Old Version</Button>
      
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center">
        <motion.img
          variants={itemVariants}
          src="./yo-optimized.webp"
          className="object-cover rounded-lg drop-shadow-2xl mx-auto mt-2"
          alt="logo"
          loading='lazy'
        />
        <motion.h1 variants={itemVariants} className="text-2xl font-bold mt-4">Juan Zurita</motion.h1>
        <motion.h2 variants={itemVariants} className="text-m text-muted-foreground">Computer Scientist</motion.h2>

        <motion.div variants={itemVariants} className="flex gap-2 justify-center">
          <Button
            className='mx-1 my-2 mb-4 drop-shadow-lg cursor-pointer w-12 h-12'
            variant='outline'
            size='icon'
            aria-label="LinkedIn"
            onClick={() => window.open("https://www.linkedin.com/in/juanzuritavasquez", "_blank")}
          >
            <IconBrandLinkedin size={28} stroke={1.5} />
          </Button>
          <Button
            className='mx-1 my-2 mb-4 drop-shadow-lg cursor-pointer w-12 h-12'
            variant='outline'
            size='icon'
            aria-label="GitHub"
            onClick={() => window.open("https://github.com/juan-zv", "_blank")}
          >
            <IconBrandGithub size={28} stroke={1.5} />
          </Button>
        </motion.div>
      </motion.div>

      <NavigationMenu className='mx-auto w-full md:w-auto'>
        <NavigationMenuList className='flex-col md:flex-row w-full'>
          <NavigationMenuItem className='w-full md:w-auto'>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30 dark:hover:bg-accent')}>
              <a href="#about">About</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className='w-full md:w-auto'>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30 dark:hover:bg-accent')}>
              <a href="#experience">Experience</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className='w-full md:w-auto'>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30 dark:hover:bg-accent')}>
              <a href="#education">Education</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className='w-full md:w-auto'>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30 dark:hover:bg-accent')}>
              <a href="#skills">Skills</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className='w-full md:w-auto'>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30 dark:hover:bg-accent')}>
              <a href="#projects">Projects</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <SectionCard
        id='about'
        title="About Me"
        description="Hi! I'm Juan Zurita, a Computer Science student at BYU-Idaho. I was born in Bolivia 🇧🇴, but when I was 4 years old, my family moved to Spain 🇪🇸, where I grew up and have lived most of my life.
        I'm passionate about technology and AI, which is why I am specializing my Computer Science degree in Machine Learning. I love creating anything that can have a real impact, from algorithmic research to full-stack web applications. I enjoy learning a broad range of topics and I'm continuously looking for new challenges. I built this static React SPA using TypeScript to host my resume and showcase my design abilities. I hope you enjoy it!"
      >
      </SectionCard>

      <SectionCard
        id='experience'
        title="Experience"
        className='flex flex-col gap-4'
      >
        <ExperienceCard
          className='max-w-[600px]'
          title='IMMERSE Researcher'
          institution='Brigham Young University'
          place='Provo, UT'
          dateRange='May 2025 - July 2025'
          description={[
            "Participated in the BYU IMMERSE program focused on research opportunities for undergraduate students in Computer Science and Electrical Engineering. I worked on Hexagonal Grid Adaptation of Jump Point Search algorithm."
          ]}
          responsibilities={[
            { text: "Collaborated with a professor from the MAGICC Lab at BYU, and graduate-level researchers on a hexagonal grid adaptation of the Jump Point Search algorithm." },
            { text: "Documented regular progress updates and participated in team discussions facilitating knowledge and presentations on the research topic." },
            { text: "Implemented Python demonstrations for the algorithm and contributed with code to a new insight on pathfinding algorithms." },
          ]}
        />
        <ExperienceCard
          className='max-w-[600px]'
          title='Online Grader for CSE and WDD courses'
          institution='Brigham Young University - Idaho & BYU Pathway Worldwide'
          place='Rexburg, ID (Remote)'
          dateRange='September 2024 - Present'
          description={[
            "As an Online Grader, I evaluate and provide feedback on student assignments for Computer Science and Web Development courses. This role has honed my ability to assess code quality and offer constructive criticism."
          ]}
          responsibilities={[
            { text: "Provided feedback and graded 100+ students’ web design and development assignments each week. " },
            { text: "Ensured students achieve proficiency in creating responsive, well-designed, and interactive web pages using HTML, CSS, and JavaScript." },
            { text: "Collaborated closely with instructors to provide essential data to Web Design and Development (WDD) courses to better achieve learning outcomes." },
          ]}
        />
        <ExperienceCard
          className='max-w-[600px]'
          title="Online Teacher Assistant for WDD230"
          institution="Brigham Young University - Idaho"
          place="Rexburg, ID"
          dateRange="April 2023 - July 2024"
          description={[
            "Being a TA has helped me acquire valuable skills which I can use on any project I work on. Troubleshooting is something really important as much as providing support to others. These abilities help me write clean code and think about the accessibility for my projects."
          ]}
          responsibilities={[
            { text: "Provided guidance and support to 20+ students in web development using HTML, CSS, and JavaScript." },
            { text: "Guided students to achieve proficiency in creating responsive, well-designed, and interactive web pages using HTML, CSS, and JavaScript." },
            { text: "Assisted students in understanding and implementing web development concepts, troubleshoot coding issues, and contribute to a collaborative learning environment." },
          ]}
        />
      </SectionCard>

      <SectionCard
        id='education'
        title="Education"
        className='flex flex-col gap-4'
      >
        <ExperienceCard
          className='max-w-[750px]'
          title='Bachelor of Science in Computer Science'
          place='Brigham Young University - Idaho'
          dateRange='April 2022 - Present'
          description={['GPA: 3.83/4.00',
            'My education at BYU-Idaho has provided me with a strong foundation in computer science principles and practical skills. The coursework has equipped me with knowledge in various areas of computer science, preparing me for real-world challenges in the tech industry.',
            'I am currently studying Computer Science with an emphasis on Machine Learning at Brigham Young University-Idaho. Among the coursework that I have taken, I have learned the application of different data structures and algorithms, and the basics of Object-Oriented Programming. Other useful knowledge I have acquired includes work methodologies like SCRUM and DevOps, as well as web development tools like SASS and front-end libraries.',
            'Relevant Coursework:'
          ]}
          responsibilities={[
            { text: "Web Development (HTML, CSS, SCSS, JavaScript)" },
            { text: "Database Management" },
            { text: "Data Structures and Algorithms" },
            { text: "Parallelism and Concurrency" },
            { text: "Applied Calculus for Data Analysis" },
            { text: "Machine Learning" },
          ]}
        />

        <ExperienceCard
          className='max-w-[650px]'
          title="Minor in Business Management"
          place="Brigham Young University - Idaho"
          dateRange="April 2022 - Present"
          description={[
            'Being able to complement my Computer Science degree with a Business Management minor allows me to gain a broader perspective on how technology can be applied in business contexts. This combination equips me with both technical skills and business acumen, making me a well-rounded professional ready to tackle challenges in the tech industry.',
            'Relevant Coursework:'
          ]}
          responsibilities={[
            { text: "Survey of Accounting" },
            { text: "Business Fundamentals" },
            { text: "Small Business Management" },
            { text: "Integrated Business Core (IBC)" },
          ]}
        />
      </SectionCard>

      <SectionCard
        id='skills'
        title="Skills"
        className='flex flex-col sm:flex-row gap-4 justify-center items-stretch'
      >
        <Card className='w-full md:w-[280px]'>
          <CardHeader>
            <CardTitle>Machine Learning & AI</CardTitle>
          </CardHeader>
          <CardContent className='mx-auto'>
            <Skill name="RStudio" icon={<IconChartDots size={32} stroke={1.5} />} level={5} />
            <Skill name="Pandas" icon={<IconTable size={32} stroke={1.5} />} level={4} />
            <Skill name="NumPy" icon={<IconMath size={32} stroke={1.5} />} level={4} />
            <Skill name="Scikit-Learn" icon={<IconBrain size={32} stroke={1.5} />} level={4} />
            <Skill name="TensorFlow" icon={<IconCpu size={32} stroke={1.5} />} level={3} />
          </CardContent>
        </Card>
        <Card className='w-full md:w-[280px]'>
          <CardHeader>
            <CardTitle>Programming Languages</CardTitle>
          </CardHeader>
          <CardContent className='mx-auto'>
            <Skill name="Python" icon={<IconBrandPython size={32} stroke={1.5} />} level={5} />
            <Skill name="JavaScript" icon={<IconBrandJavascript size={32} stroke={1.5} />} level={5} />
            <Skill name="TypeScript" icon={<IconBrandTypescript size={32} stroke={1.5} />} level={4} />
            <Skill name="C#" icon={<IconBrandCSharp size={32} stroke={1.5} />} level={4} />
            <Skill name="Rust" icon={<IconBrandRust size={32} stroke={1.5} />} level={2} />
          </CardContent>
        </Card>
        <Card className='w-full md:w-[280px]'>
          <CardHeader>
            <CardTitle>Tools & Technologies</CardTitle>
          </CardHeader>
          <CardContent className='mx-auto'>
            <Skill name="VS Code" icon={<IconBrandVscode size={32} stroke={1.5} />} level={5} />
            <Skill name="Git & GitHub" icon={<IconBrandGithub size={32} stroke={1.5} />} level={4} />
            <Skill name="Figma" icon={<IconBrandFigma size={32} stroke={1.5} />} level={4} />
            <Skill name="Tailwind CSS" icon={<IconBrandTailwind size={32} stroke={1.5} />} level={4} />
            <Skill name="React" icon={<IconBrandReact size={32} stroke={1.5} />} level={4} />
            <Skill name="Node.js" icon={<IconBrandNodejs size={32} stroke={1.5} />} level={3} />
          </CardContent>
        </Card>
        <Card className='w-full md:w-[280px]'>
          <CardHeader>
            <CardTitle>Soft Skills</CardTitle>
          </CardHeader>
          <CardContent className='mx-auto'>
            <Skill name="Problem Solving" icon={<IconBrain size={32} stroke={1.5} />} level={5} />
            <Skill name="Teamwork" icon={<IconUsers size={32} stroke={1.5} />} level={5} />
            <Skill name="Ethical Awareness" icon={<IconGlobe size={32} stroke={1.5} />} level={5} />
            <Skill name="Project Management" icon={<IconBriefcase size={32} stroke={1.5} />} level={4} />
            <Skill name="Adaptability" icon={<IconArrowsExchange size={32} stroke={1.5} />} level={4} />
            <Skill name="Communication" icon={<IconMessages size={32} stroke={1.5} />} level={4} />
          </CardContent>
        </Card>
      </SectionCard>

      <SectionCard
        id='projects'
        title="Projects"
        className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'
      >
        <ProjectCard
          title='Data Science Portfolio'
          description="A portfolio showcasing data science projects."
          imageSrc={dataSciencePortfolioImage}
          liveDemo="https://juan-zv.github.io/data-science-portfolio/"
          repository="https://github.com/juan-zv/data-science-portfolio/"
        />

        <ProjectCard
          title='Habitus Web App'
          description="Web application developed during BYU-Idaho's hackathon event, 
            created to manage households and roommates efficiently."
          imageSrc={habitusImage}
          liveDemo="https://juan-zv.github.io/habitus/"
          repository="https://github.com/juan-zv/habitus/"
        />

        <ProjectCard
          title='Keystone Apparel Sales System'
          description="Management system for a small business, developed
            to handle sales and pre-sales data. This is just a demo version of the system."
          imageSrc={ibcReportGeneratorImage}
          liveDemo="https://juan-zv.github.io/keystone-apparel-demo/"
          repository="https://github.com/juan-zv/keystone-apparel-demo"
        />

        <ProjectCard
          title='Combined Validator'
          description="A tool for validating multiple pages' HTML and CSS in one go."
          imageSrc={combinedValidatorImage}
          liveDemo="https://juan-zv.github.io/combined-validator-vanillajs/"
          repository="https://github.com/juan-zv/combined-validator-vanillajs/"
        />

        <ProjectCard
          title='Members Data Checker'
          description="A tool for checking student's members data integrity. Used to grade WDD 230 course."
          imageSrc={membersDataCheckerImage}
          liveDemo="https://juan-zv.github.io/members-data-checker/"
          repository="https://github.com/juan-zv/members-data-checker/"
        />
        <ProjectCard
          title='U&I Ride'
          description="Mobile app concept aimed at optimizing ride-sharing services in the Idaho-Utah area. Started developing CSS for future components."
          imageSrc={uiRideImage}
          liveDemo="https://juan-zv.github.io/iride-web-app/"
          repository="https://github.com/juan-zv/iride-web-app/"
        />
      </SectionCard>
      <footer className='flex flex-col gap-2 justify-center items-center mt-8 mb-4'>
        <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite</a>
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>
        <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer">Lucide Icons</a>
        <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8 Icons</a>
        <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">Shadcn UI Components</a>
        <p>©2025 | Juan Zurita.</p>
      </footer>
      <Button
        variant="outline"
        className='fixed bottom-4 right-4 z-50 cursor-pointer w-14 h-14'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <IconChevronUp size={32} stroke={1.5} />
      </Button>
    </ThemeProvider>
  )
}

export default App