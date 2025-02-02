import { ReactNode } from 'react';
import { Header } from '@/components/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className='container mx-auto flex flex-1 items-center justify-center px-4'>
        {children}
      </main>
    </>
  );
}
