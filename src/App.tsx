
import './App.css'
import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { AspectRatio } from '@/components/ui/aspect-ratio'


function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
        <img src="/vite.svg" className="App-logo" alt="logo" />
      </AspectRatio>
    </ThemeProvider>
  )
}

export default App
