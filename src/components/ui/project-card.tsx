import React, { useState } from 'react';
import { 
    Card, 
    CardTitle, 
    CardDescription,
    CardContent,
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
            <Card className={cn("max-w-[450px] w-full hover:bg-accent duration-500")}>
                <CardContent>
                    <CardTitle className="mb-2">{title}</CardTitle>
                    <img 
                        className="mb-2 w-full h-auto object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-500" 
                        src={imageSrc} 
                        alt={title || 'Project image'}
                        onClick={() => setIsImageOpen(true)}
                    />
                    <CardDescription>{description}</CardDescription>
                </CardContent>
                <CardFooter className='flex flex-col gap-2'>
                    <Button className="mx-auto cursor-pointer" variant="outline" onClick={() => window.open(liveDemo, "_blank")}>Live Demo</Button>
                    <Button className="mx-auto cursor-pointer" variant="outline" onClick={() => window.open(repository, "_blank")}>View Project</Button>
                </CardFooter>
            </Card>

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