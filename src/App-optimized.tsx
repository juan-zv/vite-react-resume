import './App.css'
import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { ButtonIcon } from '@/components/ui/button-icon'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExperienceCard } from '@/components/ui/experience-card'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { ProjectCard } from '@/components/ui/project-card'
import { SectionCard } from '@/components/ui/section-card'
import { Skill } from '@/components/ui/skill'
import { cn } from '@/lib/utils'
import { ChevronUp } from 'lucide-react'
import {
  EDUCATION,
  EXPERIENCES,
  EXTERNAL_LINKS,
  FOOTER_LINKS,
  NAVIGATION_ITEMS,
  PERSONAL_INFO,
  PROJECTS,
  SKILLS,
  SOCIAL_LINKS,
} from '@/data/resume-data'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* Header Section */}
      <ModeToggle />
      <Button
        className="absolute top-4 right-4 drop-shadow-lg cursor-pointer"
        variant="outline"
        onClick={() => window.open(EXTERNAL_LINKS.oldVersion, '_blank')}
      >
        Old Version
      </Button>

      {/* Profile Section */}
      <img
        src={PERSONAL_INFO.profileImage}
        className="object-cover rounded-lg drop-shadow-2xl mx-auto mt-2"
        alt={`${PERSONAL_INFO.name} profile`}
        loading="lazy"
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
      <NavigationMenu className="mx-auto w-full md:w-auto">
        <NavigationMenuList className="flex-col md:flex-row w-full">
          {NAVIGATION_ITEMS.map((item) => (
            <NavigationMenuItem key={item.id} className="w-full md:w-auto">
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  'w-full md:w-max text-xl drop-shadow-md dark:bg-input/30 dark:hover:bg-accent'
                )}
              >
                <a href={item.href}>{item.label}</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* About Section */}
      <SectionCard id="about" title="About Me" description={PERSONAL_INFO.about} />

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
            description={exp.description}
            responsibilities={exp.responsibilities}
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
            imageSrc={project.imageSrc}
            repository={project.repository}
          />
        ))}
      </SectionCard>

      {/* Footer */}
      <footer className="flex flex-col gap-2 justify-center items-center mt-8 mb-4">
        {FOOTER_LINKS.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
        <p>©2025 | {PERSONAL_INFO.name}.</p>
      </footer>

      {/* Scroll to Top Button */}
      <Button
        variant="outline"
        size="icon-xl"
        className="fixed bottom-4 right-4 z-50 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp size={32} />
      </Button>
    </ThemeProvider>
  )
}

export default App
