import { Header } from '@/components/header';

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="container flex-1 p-4">{children}</main>
      <footer className="container flex justify-center px-4">
        Page footer
      </footer>
    </>
  );
}
