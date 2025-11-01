import { Moon, Sun, Computer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <>
      <Button className="mx-1" variant="outline" size="icon" onClick={() => setTheme("light")}>
        <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-100 dark:rotate-360" />
      </Button>
      <Button className="mx-1" variant="outline" size="icon" onClick={() => setTheme("dark")}>
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-100 dark:rotate-360" />
      </Button>
      <Button className="mx-1" variant="outline" size="icon" onClick={() => setTheme("system")}>
        <Computer className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-100 dark:rotate-360" />
      </Button>
    </>
  )
}