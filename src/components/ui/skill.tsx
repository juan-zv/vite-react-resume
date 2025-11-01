import { Progress } from "@/components/ui/progress"

type SkillProps = {
    name: string;
    logoSrc?: string;
    level?: number;
};

function Skill({ name, logoSrc, level }: SkillProps) {
  return (
    <div className="grid grid-cols-[50px_120px] gap-2 rounded-lg hover:bg-accent/50 transition-colors p-2">
      {/* Left column: 50px wide, 50px tall for logo */}
      <div className="w-full flex items-center justify-center">
        {logoSrc && (
          <img 
            src={logoSrc} 
            alt={`${name} logo`} 
            className="w-8 h-8 dark:invert object-contain" 
          />
        )}
      </div>
      
      {/* Right column: 150px wide, 100px tall with 2 rows */}
      <div className="grid grid-rows-2 gap-1 content-center">
        <span className="font-medium text-sm self-end">{name}</span>
        <Progress className="w-full h-2 self-start" value={level ? level * 20 : 0} />
      </div>
    </div>
  );
}

export { Skill }