import { Button } from "@/components/ui/button"

interface ButtonIconProps {
  /** Either a URL to an image to render inside the button (preferred), or an icon name */
  imageSrc?: string
  icon?: string
  label: string
  onClick?: () => void
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | "icon-xl" | "icon-xxl"
}

export function ButtonIcon({
  imageSrc,
  icon,
  label,
  onClick,
  variant = "default",
  size = "icon-xxl",
}: ButtonIconProps) {
  return (
    <Button variant={variant} size={size} onClick={onClick} aria-label={label}>
      {imageSrc ? (
        <img src={imageSrc} alt={label} className=" block h-full w-full object-cover" />
      ) : (
        <img src={icon} alt={label} />
      )}
    </Button>
  )
}