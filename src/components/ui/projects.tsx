import type React from 'react';
import { 
    Card, 
    CardTitle, 
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
type ProjectCardProps = React.ComponentProps<"div"> & {
    title?: string;
    description?: string;
    imageSrc?: string;
    repository?: string;
};

function ProjectCard({ className, title, description, imageSrc, repository, ...props }: ProjectCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {/* review the trim thing */}
                <img className="mx-auto" src={imageSrc} alt={title?.trim()} />
            </CardContent>
            <CardFooter>
                <Button className="mx-auto" variant="outline" onClick={() => window.open(repository, "_blank")}>View Project</Button>
            </CardFooter>
        </Card>
    )
}

export { ProjectCard }