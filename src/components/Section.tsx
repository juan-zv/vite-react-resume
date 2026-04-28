import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

import { motion } from "motion/react"

type SectionProps = {
  id: string;
  className?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

function Section({ id, title, description, children, className }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-[900px] mx-auto py-6 text-center"
    >
      <h2 className='my-2.5 text-xl font-semibold tracking-tight'>{title}</h2>
      <Separator className='mb-4 max-w-[600px] mx-auto' />
      {description && <p className="max-w-[600px] mx-auto text-muted-foreground text-lg mb-4 text-justify">{description}</p>}
      <div className={cn(className)}>
        {children}
      </div>
    </motion.section>
  )
}

export { Section }