import { Card, 
    CardContent,
     CardTitle,
     CardDescription } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

import { motion } from "motion/react"

type SectionCardProps = {
  id: string;
  className?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

function SectionCard({ id, title, description, children, className, ...props }: SectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
    </motion.div>
    )
}

export { SectionCard }