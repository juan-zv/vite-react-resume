import { Card, 
    CardContent,
     CardTitle,
     CardDescription } from '@/components/ui/card'

type SectionCardProps = {
  title: string;
  description?: string | undefined;
  children: React.ReactNode;
};

function SectionCard({ title, description, children }: SectionCardProps) {
  return (
    <Card className="w-max mx-auto bg-transparent shadow-none border border-muted/50">
        <CardContent>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
            {children}
        </CardContent>
    </Card>
    )
}

export { SectionCard }