import { Skill } from "@/components/Skill";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { Icon } from "@tabler/icons-react";

type SkillItem = {
    name: string;
    icon: Icon;
    level: number;
};

export default function SkillSet({ title, skills }: { title: string; skills: SkillItem[] }) {
    return (
        <Card className='w-full'>
            <CardHeader>
              <CardTitle className="mx-auto text-md">{title}</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center">
              {skills.map((skill) => (
                <Skill key={skill.name} name={skill.name} icon={<skill.icon size={32} stroke={1.5} />} level={skill.level} />
              ))}
            </CardContent>
          </Card>
    )
}