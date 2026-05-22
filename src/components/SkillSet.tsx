import { Skill } from "@/components/Skill";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { Icon } from "@tabler/icons-react";
import { motion } from "motion/react";

type SkillItem = {
    name: string;
    icon: Icon;
    level: number;
};

export default function SkillSet({ title, skills }: { title: string; skills: SkillItem[] }) {
    return (
      <motion.div transition={{ duration: 0.2 }} className={"max-w-[450px] w-full h-full flex flex-col"}>
        <Card className="h-full flex flex-col justify-items-center">
            <CardHeader>
              <CardTitle className="mx-auto text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center">
              {skills.map((skill) => (
                <Skill key={skill.name} name={skill.name} icon={<skill.icon size={32} stroke={1.5} />} level={skill.level} />
              ))}
            </CardContent>
        </Card>
      </motion.div>
    )
}