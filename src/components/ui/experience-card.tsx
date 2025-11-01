import { CalendarIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Responsibility = {
    text: string;
    iconSrc?: string;
};

type ExperienceCardProps = {
    title: string;
    institution?: string;
    place?: string;
    dateRange: string;
    description: string[];
    className?: string;
    responsibilities?: Responsibility[];
};

function ExperienceCard({ title, institution, place, dateRange, description, responsibilities, className }: ExperienceCardProps) {
    return (
        <Card className={`mx-auto ${className}`}>
            <CardHeader className="text-center">
                <CardTitle className="text-md">{title}</CardTitle>
                {institution && <CardDescription className="text-sm">{institution}</CardDescription>}
                {place && <CardDescription className="text-sm">{place}</CardDescription>}
                <CardDescription className="flex gap-1.5 mx-auto justify-center">
                    <CalendarIcon size={16} />{dateRange}
                </CardDescription>
            </CardHeader>
            <CardContent className="text-left">
                {description && description.map((desc, index) => (
                    <CardDescription 
                        key={index}
                        className="text-muted-foreground text-sm mb-4 text-left"
                    >
                        {desc}
                    </CardDescription>
                ))}
                <ul className="ml-5 text-left">
                    {responsibilities?.map((resp, index) => (
                        <li 
                            key={index} 
                            className={resp.iconSrc ? "flex items-start gap-2 list-none text-left" : "list-disc text-left"}
                        >
                            {resp.iconSrc && (
                                <img 
                                    src={resp.iconSrc} 
                                    alt="responsibility icon" 
                                    className="w-4 h-4 mt-1 flex-shrink-0" 
                                />
                            )}
                            <span className="text-sm text-left">{resp.text}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

export { ExperienceCard }