import './App.css'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import ProjectCard from '@/components/ProjectCard'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { StickyNav } from '@/components/StickyNav'
import { Section } from '@/components/Section'
import { ExperienceCard } from '@/components/ExperienceCard'
import { cn } from '@/lib/utils'
import SocialLink from '@/components/SocialLink'
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconChevronUp,
} from '@tabler/icons-react'
import { motion, useScroll } from "motion/react"
import { PROJECTS, NAVIGATION_ITEMS, SKILLS } from '@/data/resume-data'
import Footer from '@/components/Footer'
import SkillSet from '@/components/SkillSet'

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
            description={[]}
            responsibilities={[
              { text: 'Collaborated with faculty and graduate researchers to develop a hexagonal grid adaptation of the Jump Point Search (JPS) algorithm, contributing novel insights to pathfinding algorithm research.' },
              { text: 'Implemented Python simulations and demos to validate algorithmic behavior, improving team’s ability to evaluate performance on grid-based environments.' },
              { text: 'Authored progress documentation and delivered technical presentations, strengthening cross-team knowledge sharing and research visibility.' }
            ]}
          />
          <ExperienceCard
            className='max-w-[600px]'
            title='Online Grader - Web Design & Development'
            institution='Brigham Young University-Idaho'
            place='Rexburg, ID'
            dateRange='Apr 2024 - Apr 2026'
            description={[]}
            responsibilities={[
              { text: 'Assessed and provided actionable feedback on 100+ student assignments per week covering HTML, CSS, JavaScript, and responsive design principles.' },
              { text: 'Partnered with instructors to analyze student performance data and refine curriculum outcomes for WDD course offerings.' },
              { text: 'Maintained grading consistency and rubric standards across a large student cohort, ensuring equitable and standards-aligned evaluation.' }
            ]}
          />
          <ExperienceCard
            className='max-w-[600px]'
            title='Teaching Assistant - WDD 230: Web Frontend Development I'
            institution='Brigham Young University-Idaho'
            place='Rexburg, ID'
            dateRange='Apr 2023 - Apr 2024'
            description={[]}
            responsibilities={[
              { text: 'Tutored 20-30 students in front-end development fundamentals including semantic HTML, CSS layouts, and vanilla JavaScript DOM manipulation.' },
              { text: 'Diagnosed and resolved student coding issues, reducing debugging turnaround and boosting student confidence and course completion.' },
              { text: 'Fostered a collaborative learning environment by facilitating peer discussion, code reviews, and one-on-one mentoring sessions.' }
            ]}
          />
          <ExperienceCard
            className='max-w-[600px]'
            title='Full-Time Volunteer Representative'
            institution='The Church of Jesus Christ of Latter-day Saints'
            place='Santa Cruz, Bolivia'
            dateRange='Jan 2020 - Jan 2022'
            description={[]}
            responsibilities={[
              {text: 'Led and mentored teams of 10-20 volunteers as district and zone leader, overseeing scheduling, goal setting, and performance coaching.'},
              {text: 'Facilitated structured training sessions to improve volunteer effectiveness, communication, and accountability across multiple districts.'},
            ]}
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
            dateRange='Apr 2022 - Apr 2026'
            gpa="3.8/4.0"
            description={[
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-stretch"
        >
          {Object.entries(SKILLS).map(([category, skills]) => (
            <SkillSet key={category} title={category} skills={skills} />
          ))}
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
              skills={project.skills}
              imageSrc={project.imageSrc}
              repository={project.repository}
              liveDemo={project.liveDemo}
            />
          ))}
        </Section>
      </main>
      <Footer />

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
