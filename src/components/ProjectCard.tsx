import React, { useState } from 'react';
import { motion } from "motion/react"
import { 
    Card, 
    CardTitle, 
    CardDescription,
    CardHeader,
    CardFooter,
    CardContent
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils'

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

    return (
        <>
            <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.2 }} className={cn("max-w-[450px] w-full h-full flex flex-col", className)}>
                <Card className="hover:bg-accent hover:text-accent-foreground duration-500 h-full flex flex-col">
                <CardHeader className="pb-2">
                    <CardTitle className="mb-2">{title}</CardTitle>
                    {imageSrc && (
                        <img 
                            className="w-full h-auto object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-500" 
                            src={imageSrc} 
                            alt={title || 'Project image'}
                            onClick={() => setIsImageOpen(true)}
                        />
                    )}
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                    {skills && skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="bg-background">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex gap-2 justify-center mt-auto">
                    <Button className="cursor-pointer" variant="outline" onClick={() => window.open(liveDemo, "_blank")}>Live Demo</Button>
                    <Button className="cursor-pointer" variant="outline" onClick={() => window.open(repository, "_blank")}>Repository</Button>
                </CardFooter>
                </Card>
            </motion.div>

            {/* Image Modal */}
            {isImageOpen && imageSrc && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setIsImageOpen(false)}
                >
                    <div className="relative max-w-5xl max-h-[90vh] w-full flex justify-center items-center">
                        <button
                            className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold cursor-pointer"
                            onClick={() => setIsImageOpen(false)}
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                        <img 
                            src={imageSrc} 
                            alt={title || 'Project image'} 
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </>
    )
}