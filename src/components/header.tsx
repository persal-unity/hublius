import { cn } from '@/lib/utils/cn';
import { Link } from './ui/link';
import { ModeToggle } from './ui/mode-theme';

export function Header() {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-background/80 shadow-md backdrop-blur-md',
        'border-b border-border',
      )}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-3'>
        <p className='inline bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] bg-clip-text text-[clamp(1rem,10vw,2rem)] font-semibold tracking-tight text-transparent sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl'>
          HUBLIUS
        </p>
        <ModeToggle />
        <nav className='hidden items-center gap-6 md:flex'>
          <Link href='/'>Home</Link>
        </nav>
      </div>
    </header>
  );
}
