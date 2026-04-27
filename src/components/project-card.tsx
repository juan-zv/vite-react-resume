import React, { useState } from 'react';
import { motion } from "motion/react"
import { 
    Card, 
    CardTitle, 
    CardDescription,
    CardHeader,
    CardFooter
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ProjectCardProps = React.ComponentProps<"div"> & {
    title?: string;
    description?: string;
    imageSrc?: string;
    liveDemo?: string;
    repository?: string;
};

function ProjectCard({title, description, imageSrc, liveDemo, repository }: ProjectCardProps) {
    const [isImageOpen, setIsImageOpen] = useState(false)

    return (
        <>
            <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.2 }} className="max-w-[450px] w-full h-full flex flex-col">
                <Card className={cn("hover:bg-accent hover:text-accent-foreground duration-500 h-full flex flex-col")}>
                <CardHeader>
                    <CardTitle className="mb-2">{title}</CardTitle>
                    <img 
                        className="mb-2 w-full h-auto object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-500" 
                        src={imageSrc} 
                        alt={title || 'Project image'}
                        onClick={() => setIsImageOpen(true)}
                    />
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button className="mx-auto cursor-pointer" variant="outline" onClick={() => window.open(liveDemo, "_blank")}>Live Demo</Button>
                    <Button className="mx-auto cursor-pointer" variant="outline" onClick={() => window.open(repository, "_blank")}>View Project</Button>
                </CardFooter>
                </Card>
            </motion.div>

            {/* Image Modal */}
            {isImageOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setIsImageOpen(false)}
                >
                    <div className="relative max-w-5xl max-h-[90vh] w-full">
                        <button
                            className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold cursor-pointer"
                            onClick={() => setIsImageOpen(false)}
                        >
                            ✕
                        </button>
                        <img 
                            src={imageSrc} 
                            alt={title || 'Project image'} 
                            className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export { ProjectCard }