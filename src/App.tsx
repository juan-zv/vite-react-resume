
import './App.css'
import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from './components/ui/button'
import { ButtonIcon } from '@/components/ui/button-icon'
import { ProjectCard } from './components/ui/projects'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './components/ui/navigation-menu'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { SectionCard } from './components/ui/section-card'
import { Skill } from './components/ui/skill'
import { Separator } from './components/ui/separator'
import { ChevronUp } from 'lucide-react'


function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />


      <AspectRatio ratio={1} className="w-12 mx-auto">
        <img
          src="https://www.juanzurita.dev/images/yo-optimized.webp"
          className="block w-full object-cover rounded-lg drop-shadow-2xl"
          alt="logo"
        />
      </AspectRatio>
      <h1 className="text-2xl font-bold">Juan Zurita</h1>
      <h2 className="text-m text-muted-foreground">Frontend Developer</h2>

      <ButtonIcon
        imageSrc="https://www.juanzurita.dev/images/linkedin.svg"
        label="LinkedIn"
        onClick={() => window.open("https://www.linkedin.com/in/juanzurita", "_blank")}
      />
      <ButtonIcon
        imageSrc="https://www.juanzurita.dev/images/github.svg"
        label="GitHub"
        onClick={() => window.open("https://github.com/juanzurita", "_blank")}
      />

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="#skills">Home</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator orientation='vertical' />
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="#experience">Experience</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="#education">Education</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="#skills">Skills</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="#projects">Projects</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button variant="outline" size={'icon-xl'} className='fixed bottom-4 right-4 '>
        <ChevronUp size={32} />
      </Button>

      <Card>
        <CardContent>
          <CardTitle>
            About Me
          </CardTitle>
          <CardDescription>
            Hello! I'm Juan Zurita, a passionate Frontend Developer with a knack for creating engaging and user-friendly web applications. With a strong foundation in modern web technologies, I strive to build seamless digital experiences that captivate users and drive results.
          </CardDescription>
        </CardContent>
      </Card>

      <SectionCard
        id='about'
        title="About Me"
      >
        <CardDescription>
          Hello! I'm Juan Zurita, a passionate Frontend Developer with a knack for creating engaging and user-friendly web applications. With a strong foundation in modern web technologies, I strive to build seamless digital experiences that captivate users and drive results.
        </CardDescription>
      </SectionCard>

      <SectionCard
        id='experience'
        title="Experience"
      >
        <Card>
          <CardHeader>
            <CardTitle>Frontend Developer at TechCorp</CardTitle>
            <CardDescription>Jan 2020 - Present</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5">
              <li>Developed and maintained the company website using React and TypeScript.</li>
              <li>Collaborated with designers to implement responsive UI designs.</li>
              <li>Optimized web applications for maximum speed and scalability.</li>
            </ul>
          </CardContent>
        </Card>
      </SectionCard>

      <SectionCard
        id='education'
        title="Education"
      >
        <Card>
          <CardHeader>
            <CardTitle>Bachelor of Science in Computer Science</CardTitle>
            <CardDescription>University of Technology, 2016 - 2020</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Graduated with honors, focusing on web development and user experience design.
            </p>
          </CardContent>
        </Card>
      </SectionCard>

      <SectionCard
        id='skills'
        title="Skills"
      >
        <Separator />
        <ul className="list-disc ml-5">
          <li>JavaScript</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>CSS & HTML</li>
          <li>Responsive Design</li>
        </ul>
        <Skill name="JavaScript" logoSrc='https://www.juanzurita.dev/images/javascript.svg' level={5} />
        <Skill name="React" level={4} />
        <Skill name="TypeScript" level={4} />
        <Skill name="CSS & HTML" level={5} />
        <Skill name="Responsive Design" level={4} />
      </SectionCard>

      <SectionCard
        id='projects'
        title="Projects"
      >
        <ProjectCard
          title="My Project"
          description="This is a description of my project."
          imageSrc="https://via.placeholder.com/150"
          repository="https://github.com/juanzurita/my-project"
        />
      </SectionCard>

      <footer>
        <p>© 2023 Juan Zurita. All rights reserved.</p>
      </footer>
    </ThemeProvider>
  )
}

export default App