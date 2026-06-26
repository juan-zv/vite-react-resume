import './App.css'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import ProjectCard from '@/components/ProjectCard'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { StickyNav } from '@/components/StickyNav'
import { Section } from '@/components/Section'
import { ExperienceCard } from '@/components/ExperienceCard'
import SocialLink from '@/components/SocialLink'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import Footer from '@/components/Footer'
import SkillSet from '@/components/SkillSet'
import { IconChevronUp } from '@tabler/icons-react'
import { motion, useScroll } from "motion/react"
import {
  PERSONAL_INFO,
  NAVIGATION_ITEMS,
  EXPERIENCES,
  EDUCATION,
  PROJECTS,
  SKILLS,
} from '@/data/resume-data'


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
          src={PERSONAL_INFO.profileImage}
          className="object-cover drop-shadow-lg mx-auto mt-2"
          alt={`${PERSONAL_INFO.name} profile`}
        />
        <motion.h1 variants={itemVariants} className="text-2xl font-bold mt-4">{PERSONAL_INFO.name}</motion.h1>
        <motion.h2 variants={itemVariants} className="text-m text-muted-foreground">{PERSONAL_INFO.title}</motion.h2>

        <motion.div variants={itemVariants} className="flex gap-2 justify-center">
          <SocialLink href="https://www.linkedin.com/in/juanzuritavasquez" icon={<IconBrandLinkedin className="size-10" stroke={1.5} />} label="LinkedIn" />
          <SocialLink href="https://github.com/juan-zv" icon={<IconBrandGithub className="size-10" stroke={1.5} />} label="GitHub" />
        </motion.div>
      </motion.div>

      <StickyNav navItems={NAVIGATION_ITEMS}>
        <NavigationMenu className='mx-auto w-full md:w-auto'>
          <NavigationMenuList className='flex-col md:flex-row w-full'>
            <NavigationMenuItem className='w-full md:w-auto'>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30')} href="#about">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='w-full md:w-auto'>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30')} href="#experience">
                Experience
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='w-full md:w-auto'>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30')} href="#education">
                Education
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='w-full md:w-auto'>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30')} href="#skills">
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='w-full md:w-auto'>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30')} href="#projects">
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
          description={PERSONAL_INFO.about}
        />

        <Section
          id='experience'
          title="Experience"
          className='flex flex-col gap-4'
        >
          {EXPERIENCES.map((exp) => (
            <ExperienceCard
              key={exp.id}
              className='max-w-[600px]'
              title={exp.title}
              institution={exp.institution}
              place={exp.place}
              dateRange={exp.dateRange}
              description={[]}
              responsibilities={exp.description.map((d) => ({ text: d }))}
            />
          ))}
        </Section>

        <Section
          id='education'
          title="Education"
          className='flex flex-col gap-4'
        >
          <ExperienceCard
            className='max-w-[750px]'
            title={EDUCATION.degree}
            place={EDUCATION.institution}
            dateRange={EDUCATION.dateRange}
            gpa={EDUCATION.gpa}
            description={EDUCATION.description}
            responsibilities={EDUCATION.coursework.map((c) => ({ text: c }))}
          />
        </Section>

        {/* Skills Section */}
        <Section
          id="skills"
          title="Skills"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center"
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
