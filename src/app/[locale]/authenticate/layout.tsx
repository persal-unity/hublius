import { Logo } from '@/components/logo';
import { LocalSwitcher } from '@/components/ui/local-switcher';
import { ModeToggle } from '@/components/ui/mode-theme';
import { ReactNode } from 'react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <header className="sticky flex h-16 justify-center">
        <div className="flex w-full max-w-4xl items-center justify-between px-4">
          <Logo />
          <div className="flex items-center gap-4">
            <LocalSwitcher />
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="container mx-auto flex flex-1 items-center justify-center px-4">
        {children}
      </main>
    </>
  );
}
