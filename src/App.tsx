import './App.css'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/project-card'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { StickyNav } from '@/components/StickyNav'
import { Section } from '@/components/Section'
import { Skill } from '@/components/Skill'
import { ExperienceCard } from '@/components/experience-card'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import SocialLink from '@/components/SocialLink'
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconChevronUp,
  IconChartDots,
  IconTable,
  IconBrain,
  IconCpu,
  IconCloud,
  IconBrandPython,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandCSharp,
  IconBrandFlutter,
  IconBrandAndroid,
  IconBrandRust,
  IconBrandVscode,
  IconBrandFigma,
  IconBrandGit,
  IconBrandTailwind,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandOpenai,
  IconBriefcase
} from '@tabler/icons-react'
import { motion, useScroll } from "motion/react"
import { PROJECTS, NAVIGATION_ITEMS } from '@/data/resume-data'

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



function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-50 shadow-md"
        style={{ scaleX: scrollYProgress }}
      />
      <ModeToggle />
      {/* <Button className='absolute top-4 right-4 drop-shadow-lg cursor-pointer' variant={'outline'} onClick={() => window.open("https://html-resume-juan-zurita.vercel.app/", "_blank")}>Old Version</Button> */}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center">
        <motion.img
          variants={itemVariants}
          fetchPriority='high'
          src="./juan-zurita.webp"
          className="object-cover drop-shadow-lg mx-auto mt-2"
          alt="logo"
        />
        <motion.h1 variants={itemVariants} className="text-2xl font-bold mt-4">Juan Zurita</motion.h1>
        <motion.h2 variants={itemVariants} className="text-m text-muted-foreground">Software Engineer | AI & ML Enthusiast</motion.h2>

        <motion.div variants={itemVariants} className="flex gap-2 justify-center">
          <SocialLink href="https://www.linkedin.com/in/juanzuritavasquez" icon={<IconBrandLinkedin className="size-10" stroke={1.5} />} label="LinkedIn" />
          <SocialLink href="https://github.com/juan-zv" icon={<IconBrandGithub className="size-10" stroke={1.5} />} label="GitHub" />
        </motion.div>
      </motion.div>

      <StickyNav navItems={NAVIGATION_ITEMS}>
        <NavigationMenu className='mx-auto w-full md:w-auto'>
          <NavigationMenuList className='flex-col md:flex-row w-full'>
            <NavigationMenuItem className='w-full md:w-auto'>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30 dark:hover:bg-accent')} href="#about">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='w-full md:w-auto'>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30 dark:hover:bg-accent')} href="#experience">
                Experience
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='w-full md:w-auto'>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30 dark:hover:bg-accent')} href="#education">
                Education
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='w-full md:w-auto'>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30 dark:hover:bg-accent')} href="#skills">
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='w-full md:w-auto'>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30 dark:hover:bg-accent')} href="#projects">
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </StickyNav>
      <main className="flex flex-col flex-1 w-full items-center">

        <Section
          id='about'
          title="About Me"
          description="Hi! I'm Juan Zurita. I recently graduated from BYU-Idaho with a degree in Computer Science and a focus on Machine Learning. 
        I built this space to share some of my projects and my resume. Thanks for stopping by, I'd love to connect!"
        >
        </Section>

        <Section
          id='experience'
          title="Experience"
          className='flex flex-col gap-4'
        >
          <ExperienceCard
            className='max-w-[600px]'
            title='Undergraduate Researcher - Pathfinding Algorithms'
            institution='Brigham Young University (IMMERSE Program, MAGICC Lab)'
            place='Provo, UT'
            dateRange='May 2025 - Jul 2025'
            description={[
              'Collaborated with faculty and graduate researchers to develop a hexagonal grid adaptation of the Jump Point Search (JPS) algorithm, contributing novel insights to pathfinding algorithm research.',
              'Implemented Python simulations and demos to validate algorithmic behavior, improving team’s ability to evaluate performance on grid-based environments.',
              'Authored progress documentation and delivered technical presentations, strengthening cross-team knowledge sharing and research visibility.'
            ]}
            responsibilities={[]}
          />
          <ExperienceCard
            className='max-w-[600px]'
            title='Online Grader - Web Design & Development'
            institution='Brigham Young University-Idaho'
            place='Rexburg, ID'
            dateRange='Apr 2024 - Apr 2026'
            description={[
              'Assessed and provided actionable feedback on 100+ student assignments per week covering HTML, CSS, JavaScript, and responsive design principles.',
              'Partnered with instructors to analyze student performance data and refine curriculum outcomes for WDD course offerings.',
              'Maintained grading consistency and rubric standards across a large student cohort, ensuring equitable and standards-aligned evaluation.'
            ]}
            responsibilities={[]}
          />
          <ExperienceCard
            className='max-w-[600px]'
            title='Teaching Assistant - WDD 230: Web Frontend Development I'
            institution='Brigham Young University-Idaho'
            place='Rexburg, ID'
            dateRange='Apr 2023 - Apr 2024'
            description={[
              'Tutored 20-30 students in front-end development fundamentals including semantic HTML, CSS layouts, and vanilla JavaScript DOM manipulation.',
              'Diagnosed and resolved student coding issues, reducing debugging turnaround and boosting student confidence and course completion.',
              'Fostered a collaborative learning environment by facilitating peer discussion, code reviews, and one-on-one mentoring sessions.'
            ]}
            responsibilities={[]}
          />
          <ExperienceCard
            className='max-w-[600px]'
            title='Full-Time Volunteer Representative'
            institution='The Church of Jesus Christ of Latter-day Saints'
            place='Santa Cruz, Bolivia'
            dateRange='Jan 2020 - Jan 2022'
            description={[
              'Led and mentored teams of 10-20 volunteers as district and zone leader, overseeing scheduling, goal setting, and performance coaching.',
              'Facilitated structured training sessions to improve volunteer effectiveness, communication, and accountability across multiple districts.'
            ]}
            responsibilities={[]}
          />
        </Section>

        <Section
          id='education'
          title="Education"
          className='flex flex-col gap-4'
        >
          <ExperienceCard
            className='max-w-[750px]'
            title='Bachelor of Science in Computer Science'
            place='Brigham Young University-Idaho'
            dateRange='Apr 2022 – Apr 2026'
            description={['GPA: 3.8/4.0',
              'Relevant Coursework: Machine Learning & Data Science, Full-Stack Web Development, Object-Oriented Programming, Parallel & Concurrent Programming, Database Systems & Design, Financial Accounting, Project Management, Product Development'
            ]}
            responsibilities={[
              { text: 'Machine Learning & Data Science' },
              { text: 'Full-Stack Web Development' },
              { text: 'Object-Oriented Programming' },
              { text: 'Parallel & Concurrent Programming' },
              { text: 'Database Systems & Design' },
              { text: 'Financial Accounting' },
              { text: 'Project Management' },
              { text: 'Product Development' },
            ]}
          />
        </Section>

        {/* Skills Section */}
        <Section
          id="skills"
          title="Skills"
          className="flex flex-col sm:flex-row gap-4 justify-center items-stretch"
        >
          <Card className='w-full md:w-[280px]'>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent className='mx-auto'>
              <Skill name="Python" icon={<IconBrandPython size={32} stroke={1.5} />} level={5} />
              <Skill name="JavaScript" icon={<IconBrandJavascript size={32} stroke={1.5} />} level={5} />
              <Skill name="TypeScript" icon={<IconBrandTypescript size={32} stroke={1.5} />} level={4} />
              <Skill name="C#" icon={<IconBrandCSharp size={32} stroke={1.5} />} level={4} />
              <Skill name="Java" icon={<IconBrandNodejs size={32} stroke={1.5} />} level={3} />
              <Skill name="Kotlin" icon={<IconBrandNodejs size={32} stroke={1.5} />} level={2} />
              <Skill name="Rust" icon={<IconBrandRust size={32} stroke={1.5} />} level={2} />
            </CardContent>
          </Card>
          <Card className='w-full md:w-[280px]'>
            <CardHeader>
              <CardTitle>Web & Mobile</CardTitle>
            </CardHeader>
            <CardContent className='mx-auto'>
              <Skill name="React" icon={<IconBrandReact size={32} stroke={1.5} />} level={4} />
              <Skill name="Next.js" icon={<IconBrandNodejs size={32} stroke={1.5} />} level={3} />
              <Skill name="Node.js" icon={<IconBrandNodejs size={32} stroke={1.5} />} level={3} />
              <Skill name="Tailwind CSS" icon={<IconBrandTailwind size={32} stroke={1.5} />} level={4} />
              <Skill name="SCSS" icon={<IconBrandFigma size={32} stroke={1.5} />} level={3} />
              <Skill name="Flutter" icon={<IconBrandFlutter size={32} stroke={1.5} />} level={2} />
              <Skill name="Android Studio" icon={<IconBrandAndroid size={32} stroke={1.5} />} level={2} />
              <Skill name="REST APIs" icon={<IconBrandFigma size={32} stroke={1.5} />} level={3} />
            </CardContent>
          </Card>
          <Card className='w-full md:w-[280px]'>
            <CardHeader>
              <CardTitle>ML & Data Science</CardTitle>
            </CardHeader>
            <CardContent className='mx-auto'>
              <Skill name="Pandas" icon={<IconTable size={32} stroke={1.5} />} level={4} />
              <Skill name="Polars" icon={<IconChartDots size={32} stroke={1.5} />} level={3} />
              <Skill name="PySpark" icon={<IconCpu size={32} stroke={1.5} />} level={2} />
              <Skill name="Databricks" icon={<IconCpu size={32} stroke={1.5} />} level={2} />
              <Skill name="R" icon={<IconChartDots size={32} stroke={1.5} />} level={2} />
              <Skill name="SQL" icon={<IconTable size={32} stroke={1.5} />} level={3} />
              <Skill name="OpenAI SDK" icon={<IconBrandOpenai size={32} stroke={1.5} />} level={2} />
              <Skill name="Model Context Protocol (MCP)" icon={<IconBrain size={32} stroke={1.5} />} level={2} />
            </CardContent>
          </Card>
          <Card className='w-full md:w-[280px]'>
            <CardHeader>
              <CardTitle>Tools & Platforms</CardTitle>
            </CardHeader>
            <CardContent className='mx-auto'>
              <Skill name="Git" icon={<IconBrandGit size={32} stroke={1.5} />} level={4} />
              <Skill name="GitHub" icon={<IconBrandGithub size={32} stroke={1.5} />} level={4} />
              <Skill name="VS Code" icon={<IconBrandVscode size={32} stroke={1.5} />} level={5} />
              <Skill name="Cloud Databases" icon={<IconCloud size={32} stroke={1.5} />} level={3} />
              <Skill name="Agile/Scrum methodologies" icon={<IconBriefcase size={32} stroke={1.5} />} level={3} />
            </CardContent>
          </Card>
        </Section>

        {/* Projects Section */}
        <Section
          id="projects"
          title="Projects"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center"
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              repository={project.repository}
              liveDemo={project.liveDemo}
            />
          ))}
        </Section>
      </main>
      <footer className='flex flex-col gap-2 justify-center items-center mt-8 mb-4'>
        <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite</a>
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>
        <a href="https://tabler.io/icons" target="_blank" rel="noopener noreferrer">Tabler Icons</a>
        <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">Shadcn UI Components</a>
        <p>©{new Date().getFullYear()} | Juan Zurita.</p>
      </footer>

      {/* Scroll to Top Button */}
      <Button
        aria-label='Scroll to top'
        variant="outline"
        className='fixed bottom-4 right-4 z-50 cursor-pointer w-14 h-14'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <IconChevronUp size={32} stroke={1.5} />
      </Button>
    </>
  )
}

export default App
