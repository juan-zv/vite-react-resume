import { Button } from '@/components/ui/button';

export default function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <Button
            className='mx-1 my-2 mb-4 drop-shadow-lg cursor-pointer w-18 h-18'
            variant='outline'
            size="icon-lg"
            aria-label={label}
            onClick={() => window.open(href, "_blank")}
        >
            {icon}
        </Button>
    );
}