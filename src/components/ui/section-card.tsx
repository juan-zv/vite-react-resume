import { Card, 
    CardContent,
     CardTitle,
     CardDescription } from '@/components/ui/card'

type SectionCardProps = {
  id: string;
  className?: string  | undefined;
  title: string;
  description?: string | undefined;
  children: React.ReactNode;
};

function SectionCard({ id, title, description, children, className }: SectionCardProps) {
  return (
    <Card id={id} className={`w-max mx-auto bg-transparent shadow-none border-none ${className}`}>
        <CardContent>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
            {children}
        </CardContent>
    </Card>
    )
}

export { SectionCard }