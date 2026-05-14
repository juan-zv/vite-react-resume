import './App.css'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { ButtonIcon } from '@/components/ui/button-icon'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExperienceCard } from '@/components/ExperienceCard'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { StickyNav } from '@/components/StickyNav'
import ProjectCard from '@/components/ProjectCard'
import { Section as SectionCard } from '@/components/Section'
import Footer from '@/components/Footer'
import { Skill } from '@/components/Skill'
import { cn } from '@/lib/utils'
import { IconChevronUp } from '@tabler/icons-react'
import {
  EDUCATION,
  EXPERIENCES,
  NAVIGATION_ITEMS,
  PERSONAL_INFO,
  PROJECTS,
  SKILLS,
  SOCIAL_LINKS,
} from '@/data/resume-data'

function App() {
  return (
    <>
      {/* Header Section */}
      <ModeToggle />
      
      {/* Profile Section */}
      <img
        src={PERSONAL_INFO.profileImage}
        className="object-cover drop-shadow-lg mx-auto mt-2"
        alt={`${PERSONAL_INFO.name} profile`}
        fetchPriority="high"
      />
      <h1 className="text-2xl font-bold">{PERSONAL_INFO.name}</h1>
      <h2 className="text-m text-muted-foreground">{PERSONAL_INFO.title}</h2>

      {/* Social Links */}
      {SOCIAL_LINKS.map((social) => (
        <ButtonIcon
          key={social.id}
          className="my-2 mb-4 drop-shadow-lg cursor-pointer"
          variant="outline"
          imageSrc={social.icon}
          label={social.label}
          onClick={() => window.open(social.url, '_blank')}
        />
      ))}

      {/* Navigation Menu */}
      <StickyNav navItems={NAVIGATION_ITEMS}>
        <NavigationMenu className="mx-auto w-full md:w-auto">
          <NavigationMenuList className="flex-col md:flex-row w-full">
            {NAVIGATION_ITEMS.map((item) => (
              <NavigationMenuItem key={item.id} className="w-full md:w-auto">
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30 dark:hover:bg-accent'
                  )}
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </StickyNav>
      <main className="flex flex-col flex-1 w-full items-center">

      {/* About Section */}
      <SectionCard id="about" title="About Me" description={PERSONAL_INFO.about2} />

      {/* Experience Section */}
      <SectionCard id="experience" title="Experience" className="flex flex-col gap-4">
        {EXPERIENCES.map((exp) => (
          <ExperienceCard
            key={exp.id}
            className="max-w-[600px]"
            title={exp.title}
            institution={exp.institution}
            place={exp.place}
            dateRange={exp.dateRange}
            description={[]}
            responsibilities={exp.description.map(desc => ({ text: desc }))}
          />
        ))}
      </SectionCard>

      {/* Education Section */}
      <SectionCard id="education" title="Education">
        <ExperienceCard
          className="max-w-[750px]"
          title={EDUCATION.degree}
          place={EDUCATION.institution}
          dateRange={EDUCATION.dateRange}
          description={[EDUCATION.gpa, ...EDUCATION.description, 'Relevant Coursework:']}
          responsibilities={EDUCATION.coursework.map((course) => ({ text: course }))}
        />
      </SectionCard>

      {/* Skills Section */}
      <SectionCard
        id="skills"
        title="Skills"
        className="flex flex-col sm:flex-row gap-4 justify-center items-stretch"
      >
        {Object.entries(SKILLS).map(([category, skills]) => (
          <Card key={category} className="w-full md:w-[280px]">
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent className="mx-auto">
              {skills.map((skill) => (
                <Skill
                  key={skill.name}
                  name={skill.name}
                  logoSrc={skill.logoSrc}
                  level={skill.level}
                />
              ))}
            </CardContent>
          </Card>
        ))}
      </SectionCard>

      {/* Projects Section */}
      <SectionCard
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
      </SectionCard>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <Button
        aria-label='Scroll to top'
        variant="outline"
        className="fixed bottom-4 right-4 z-50 cursor-pointer w-14 h-14"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <IconChevronUp size={32} stroke={1.5} />
      </Button>
    </>
  )
}

export default App
