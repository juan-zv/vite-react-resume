
import './App.css'
import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from './components/ui/button'
import { ButtonIcon } from '@/components/ui/button-icon'
import { ProjectCard } from './components/ui/project-card'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './components/ui/navigation-menu'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { SectionCard } from './components/ui/section-card'
import { Skill } from './components/ui/skill'
import { ChevronUp } from 'lucide-react'
import { ExperienceCard } from './components/ui/experience-card'
import { cn } from '@/lib/utils'

import habitusImage from '@/assets/habitus.png'
import ibcReportGeneratorImage from '@/assets/ibc-report-generator.png'
import ibcSalesTrackerImage from '@/assets/ibc-sales-tool.png'
import combinedValidatorImage from '@/assets/combined-validator.png'
import dataSciencePortfolioImage from '@/assets/data-science-portfolio.png'
import membersDataCheckerImage from '@/assets/members-data-checker.png'


function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <img
        src="https://www.juanzurita.dev/images/yo-optimized.webp"
        className="object-cover rounded-lg drop-shadow-2xl mx-auto mt-2"
        alt="logo"
        loading='lazy'
      />
      <h1 className="text-2xl font-bold">Juan Zurita</h1>
      <h2 className="text-m text-muted-foreground">Computer Scientist</h2>

      <ButtonIcon
        className='my-2 mb-4 drop-shadow-lg cursor-pointer'
        variant='outline'
        imageSrc="https://www.juanzurita.dev/images/linkedin.svg"
        label="LinkedIn"
        onClick={() => window.open("https://www.linkedin.com/in/juanzurita", "_blank")}
      />
      <ButtonIcon
        className='my-2 mb-4 drop-shadow-lg cursor-pointer'
        variant='outline'
        imageSrc="https://www.juanzurita.dev/images/github.svg"
        label="GitHub"
        onClick={() => window.open("https://github.com/juanzurita", "_blank")}
      />

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
        I'm passionate about technology and AI, and I love creating anything that can have a real impact in the world. I enjoy learning a broad range of topics and I'm continuously looking for new challenges. I built this static vanilla JavaScript website to host my resume and showcase my design abilities. I hope you enjoy it!"
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
            "Participated in the IMMERSE research project, focusing on developing immersive technologies and applications. Collaborated with a team of researchers to explore innovative solutions in virtual and augmented reality."
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
            { text: "Data Structures and Algorithms" },
            { text: "Web Development (HTML, CSS, JavaScript, React)" },
            { text: "Database Management Systems" },
            { text: "Operating Systems" },
            { text: "Software Engineering Principles" },
            { text: "Computer Networks" },
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
            <CardTitle>Programming Languages</CardTitle>
          </CardHeader>
          <CardContent className='mx-auto'>
            <Skill name="Python" logoSrc='https://img.icons8.com/ios-filled/100/python.png' level={5} />
            <Skill name="JavaScript" logoSrc='https://img.icons8.com/ios-filled/100/javascript.png' level={5} />
            <Skill name="TypeScript" logoSrc='https://img.icons8.com/ios-filled/100/typescript.png' level={4} />
            <Skill name="C#" logoSrc='https://img.icons8.com/ios-filled/100/c-sharp-logo.png' level={4} />
            <Skill name="Rust" logoSrc='https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-rust-is-a-multi-paradigm-system-programming-language-logo-bold-tal-revivo.png' level={2} />
          </CardContent>
        </Card>
        <Card className='w-full md:w-[280px]'>
          <CardHeader>
            <CardTitle>Tools & Technologies</CardTitle>
          </CardHeader>
          <CardContent className='mx-auto'>
            <Skill name="VS Code" logoSrc='https://img.icons8.com/ios-filled/100/visual-studio.png' level={5} />
            <Skill name="Git & GitHub" logoSrc='https://img.icons8.com/sf-regular-filled/96/github.png' level={4} />
            <Skill name="Figma" logoSrc='https://img.icons8.com/ios-filled/100/figma.png' level={4} />
            <Skill name="Tailwind CSS" logoSrc='https://img.icons8.com/material-outlined/96/tailwind_css.png' level={4} />
            <Skill name="React" logoSrc='https://img.icons8.com/ios-glyphs/90/react.png' level={3} />
            <Skill name="Node.js" logoSrc='https://img.icons8.com/windows/96/nodejs.png' level={3} />
          </CardContent>
        </Card>
        <Card className='w-full md:w-[280px]'>
          <CardHeader>
            <CardTitle>Soft Skills</CardTitle>
          </CardHeader>
          <CardContent className='mx-auto'>
            <Skill name="Problem Solving" logoSrc='https://img.icons8.com/ios-filled/100/brain.png' level={5} />
            <Skill name="Teamwork" logoSrc="https://img.icons8.com/ios-filled/100/collaborating-in-circle.png" level={5} />
            <Skill name="Ethical Awareness" logoSrc='https://img.icons8.com/ios-filled/100/earth-planet.png' level={5} />
            <Skill name="Project Management" logoSrc='https://img.icons8.com/ios-filled/100/analyzing-skill.png' level={4} />
            <Skill name="Adaptability" logoSrc='https://img.icons8.com/ios-filled/100/change-user-male.png' level={4} />
            <Skill name="Communication" logoSrc='https://img.icons8.com/ios-filled/100/communication-skill.png' level={4} />
          </CardContent>
        </Card>
      </SectionCard>

      <SectionCard
        id='projects'
        title="Projects"
        className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'
      >
        <ProjectCard
          title='Habitus Web App'
          description="Web application developed during BYU-Idaho's hackathon event, 
            created to manage households and roommates efficiently."
          imageSrc={habitusImage}
          repository="https://github.com/juan-zv/running-potato-key"
        />
        <ProjectCard
          title='IBC Report Generator'
          description="A tool for generating reports 
            from IBC data. It uses a Supabase database to store and manage
            data efficiently."
          imageSrc={ibcReportGeneratorImage}
          repository="https://github.com/juan-zv/report_generator"
        />

        <ProjectCard
          title='IBC Sales Tracker'
          description="A sales tracking tool for IBC. It records sales data 
            and saves it in a Supabase database for easy access and analysis."
          imageSrc={ibcSalesTrackerImage}
          repository="https://github.com/juan-zv/ibc-sales-tool"
        />

        <ProjectCard
          title='Combined Validator'
          description="A tool for validating multiple pages' HTML and CSS in one go."
          imageSrc={combinedValidatorImage}
          repository="https://github.com/juan-zv/combined-validator-vanillajs"
        />

        <ProjectCard
          title='Data Science Portfolio'
          description="A portfolio showcasing data science projects."
          imageSrc={dataSciencePortfolioImage}
          repository="https://github.com/juanzurita/data-science-portfolio"
        />

        <ProjectCard
          title='Members Data Checker'
          description="A tool for checking student's members data integrity. Used to grade WDD 230 course."
          imageSrc={membersDataCheckerImage}
          repository="https://juan-zv.github.io/members-data-checker/"
        />
        <ProjectCard
          title='U&I Ride'
          description="Mobile app concept aimed at optimizing ride-sharing services in the Idaho-Utah area. Started developing CSS for future components."
          imageSrc="https://www.juanzurita.dev/images/u-i-ride.png"
          repository="https://github.com/juan-zv/iride-web-app"
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
        size={'icon-xl'}
        className='fixed bottom-4 right-4 z-50 cursor-pointer'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp size={32} />
      </Button>
    </ThemeProvider>
  )
}

export default App