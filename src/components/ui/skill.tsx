import { Progress } from "@/components/ui/progress"

type SkillProps = {
    name: string;
    logoSrc?: string;
    level?: number;
};

function Skill({ name, logoSrc, level }: SkillProps) {
  return (
    <div className="flex items-center space-x-2">
      {logoSrc && <img src={logoSrc} alt={`${name} logo`} className="w-6 h-6" />}
      <div>
        <div className="font-medium">{name}</div>
        {level && <div className="text-sm text-muted-foreground">{level}</div>}
        <Progress value={level} max={5} />
      </div>
    </div>
  );
}

export { Skill }