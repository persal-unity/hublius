import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className='container mx-auto flex flex-1 items-center justify-center px-4'>
      {children}
    </main>
  );
}
