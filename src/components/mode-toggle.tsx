import { IconMoon, IconSun, IconDeviceDesktop } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <>
      <Button aria-label="Light mode" className="mx-1" variant="outline" size="icon" onClick={() => setTheme("light")}>
        <IconSun className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-100 dark:rotate-360" />
      </Button>
      <Button aria-label="Dark mode" className="mx-1" variant="outline" size="icon" onClick={() => setTheme("dark")}>
        <IconMoon className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-100 dark:rotate-360" />
      </Button>
      <Button aria-label="System mode" className="mx-1" variant="outline" size="icon" onClick={() => setTheme("system")}>
        <IconDeviceDesktop className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-100 dark:rotate-360" />
      </Button>
    </>
  )
}