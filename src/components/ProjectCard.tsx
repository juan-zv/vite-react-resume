import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
    title: string;
    description: string;
    imageSrc?: string;
    liveDemo: string;
    repository: string;
    skills: string[];
}

export default function ProjectCard({
    title,
    description,
    imageSrc,
    liveDemo,
    repository,
    skills,
    className,
}: ProjectCardProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <Card className={cn("w-full max-w-md", className)}> 
            {imageSrc && (
                <CardContent className="p-0">
                    <img src={imageSrc} alt={`${title} screenshot`} className="w-full h-48 object-cover rounded-t-md" />
                </CardContent>
            )}
            <CardContent>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                    {skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button variant="outline" onClick={() => window.open(liveDemo, "_blank")}>
                    Live Demo
                </Button>
                <Button variant="outline" onClick={() => window.open(repository, "_blank")}>
                    Repository
                </Button>
            </CardFooter>
        </Card>
    );
}