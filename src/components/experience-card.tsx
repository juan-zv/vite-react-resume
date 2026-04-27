import { CalendarIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react"

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
        <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.2 }} className={`mx-auto w-full h-full ${className}`}>
            <Card className="h-full">
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
                <motion.ul 
                    className="ml-5 text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                >
                    {responsibilities?.map((resp, index) => (
                        <motion.li 
                            key={index} 
                            className={resp.iconSrc ? "flex items-start gap-2 list-none text-left" : "list-disc text-left"}
                            variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            {resp.iconSrc && (
                                <img 
                                    src={resp.iconSrc} 
                                    alt="responsibility icon" 
                                    className="w-4 h-4 mt-1 shrink-0" 
                                />
                            )}
                            <span className="text-sm text-left">{resp.text}</span>
                        </motion.li>
                    ))}
                </motion.ul>
            </CardContent>
            </Card>
        </motion.div>
    )
}

export { ExperienceCard }