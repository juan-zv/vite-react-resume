export default function Footer() {
    return (
        <footer className='flex flex-col gap-2 justify-center items-center mt-8 mb-4'>
            <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite</a>
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>
            <a href="https://tabler.io/icons" target="_blank" rel="noopener noreferrer">Tabler Icons</a>
            <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">Shadcn UI Components</a>
            <p>©{new Date().getFullYear()} | Juan Zurita.</p>
        </footer>
    )
}