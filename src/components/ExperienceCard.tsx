import { IconCalendar, IconMapPin, IconBuilding, IconSchool   } from "@tabler/icons-react"
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
    gpa?: string;
};

function ExperienceCard({ title, institution, place, dateRange, description, responsibilities, className, gpa }: ExperienceCardProps) {
    return (
        <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.2 }} className={`mx-auto w-full h-full ${className}`}>
            <Card className="h-full">
                <CardHeader className="text-center">
                    <CardTitle className="text-lg">{title}</CardTitle>
                    {institution && <CardDescription className="text-sm flex gap-1.5 mx-auto justify-center"><IconBuilding size={16} stroke={1.5} />{institution}</CardDescription>}
                    {place && <CardDescription className="text-sm flex gap-1.5 mx-auto justify-center"><IconMapPin size={16} stroke={1.5} />{place}</CardDescription>}
                    <CardDescription className="flex gap-1.5 mx-auto justify-center"><IconCalendar size={16} stroke={1.5} />{dateRange}</CardDescription>
                    {gpa && <CardDescription className="flex gap-1.5 mx-auto justify-center"><IconSchool size={16} stroke={1.5} />{gpa}</CardDescription>}
                </CardHeader>
                <CardContent className="text-left">
                {description && description.map((desc, index) => (
                    <CardDescription 
                        key={index}
                        className="text-sm mb-4 text-left"
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