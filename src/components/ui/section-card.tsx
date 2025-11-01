import { Card, 
    CardContent,
     CardTitle,
     CardDescription } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

type SectionCardProps = {
  id: string;
  className?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

function SectionCard({ id, title, description, children, className, ...props }: SectionCardProps) {
  return (
    <Card id={id} className={cn("w-full max-w-[900px] mx-auto bg-transparent shadow-none border-none")} {...props}>
        <CardContent>
            <CardTitle className='my-2.5 text-xl'>{title}</CardTitle>
            <Separator className='mb-4 max-w-[600px] mx-auto' />
            {description && <CardDescription className="max-w-[600px] mx-auto text-muted-foreground text-lg mb-4 text-justify">{description}</CardDescription>}
            <div className={cn(className)}>
              {children}
            </div>
        </CardContent>
    </Card>
    )
}

export { SectionCard }