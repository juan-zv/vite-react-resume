import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from "motion/react"
import { 
    Card, 
    CardTitle, 
    CardHeader,
    CardFooter,
    CardContent
} from '@/components/ui/card'
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator';
import { IconLiveView } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';

type ProjectCardProps = React.ComponentProps<"div"> & {
    title: string;
    description: string;
    imageSrc?: string;
    liveDemo: string;
    repository: string;
    skills?: string[];
};

export default function ProjectCard({
    title,
    description,
    imageSrc,
    liveDemo,
    repository,
    skills,
    className,
}: ProjectCardProps) {
    const [isImageOpen, setIsImageOpen] = useState(false)
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)
    const prefersReducedMotion = useReducedMotion()

    const modalRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)

    const closeModal = useCallback(() => {
        setIsImageOpen(false)
    }, [])

    // Focus trap + Escape key handling for modal
    useEffect(() => {
        if (!isImageOpen) return

        const previouslyFocused = document.activeElement as HTMLElement

        // Focus the modal close button on open
        const closeButton = modalRef.current?.querySelector<HTMLButtonElement>('[data-modal-close]')
        closeButton?.focus()

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal()
                return
            }

            // Trap focus within modal
            if (e.key === 'Tab') {
                const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                )
                if (!focusableElements || focusableElements.length === 0) return

                const firstEl = focusableElements[0]
                const lastEl = focusableElements[focusableElements.length - 1]

                if (e.shiftKey && document.activeElement === firstEl) {
                    e.preventDefault()
                    lastEl.focus()
                } else if (!e.shiftKey && document.activeElement === lastEl) {
                    e.preventDefault()
                    firstEl.focus()
                }
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        // Prevent body scroll while modal is open
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
            // Return focus to the trigger element
            previouslyFocused?.focus()
        }
    }, [isImageOpen, closeModal])

    return (
        <>
            <motion.div
                transition={{ duration: 0.2 }}
                className={cn("max-w-[450px] w-full h-full flex flex-col", className)}
            >
                <Card className="h-full flex flex-col pt-0 hover:bg-muted hover:text-foreground transition-colors">
                    {/* Image as direct child of Card, before CardHeader (shadcn pattern) */}
                    {imageSrc && !imageError && (
                        <div
                            ref={triggerRef}
                            role="button"
                            tabIndex={0}
                            aria-label={`View full screenshot of ${title}`}
                            className="relative w-full aspect-video overflow-hidden bg-muted group cursor-pointer"
                            onClick={() => setIsImageOpen(true)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    setIsImageOpen(true)
                                }
                            }}
                        >
                            {!isImageLoaded && (
                                <Skeleton className="absolute inset-0 w-full h-full" aria-hidden="true" />
                            )}
                            <img 
                                className={cn(
                                    "w-full h-full object-cover transition-transform duration-500",
                                    !prefersReducedMotion,
                                    isImageLoaded ? "opacity-100" : "opacity-0"
                                )}
                                src={imageSrc} 
                                alt={`Screenshot of ${title}`}
                                loading="lazy"
                                onLoad={() => setIsImageLoaded(true)}
                                onError={() => setImageError(true)}
                            />
                        </div>
                    )}
                    {imageSrc && imageError && (
                        <div
                            role="status"
                            className="w-full aspect-video bg-muted flex items-center justify-center text-muted-foreground text-sm border-b border-border/50"
                        >
                            Image unavailable
                        </div>
                    )}

                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                        <Separator />
                        {skills && skills.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                                {skills.map((skill) => (
                                    <Badge key={skill} variant="outline" className="bg-background">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </CardHeader>

                    <CardContent className='h-24 overflow-auto justify-start'>
                        {description}
                    </CardContent>

                    <CardFooter className="flex gap-2 justify-center mt-auto">
                        <a
                            href={liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center justify-center rounded-none border border-border bg-background hover:bg-muted hover:text-foreground text-xs font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 h-8 gap-1.5 px-2.5 cursor-pointer dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
                        >
                            <IconLiveView />
                            Live Demo
                        </a>
                        <a
                            href={repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center justify-center rounded-none border border-border bg-background hover:bg-muted hover:text-foreground text-xs font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 h-8 gap-1.5 px-2.5 cursor-pointer dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
                        >
                            <IconBrandGithub />
                            Repository
                        </a>
                    </CardFooter>
                </Card>
            </motion.div>

            {/* Accessible Image Modal */}
            {isImageOpen && imageSrc && (
                <div
                    ref={modalRef}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Full size screenshot of ${title}`}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-w-5xl max-h-[90vh] w-full flex justify-center items-center">
                        <button
                            data-modal-close
                            className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold cursor-pointer"
                            onClick={closeModal}
                            aria-label="Close image preview"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 6 6 18"/>
                                <path d="m6 6 12 12"/>
                            </svg>
                        </button>
                        <img 
                            src={imageSrc} 
                            alt={`Full size screenshot of ${title}`}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </>
    )
}