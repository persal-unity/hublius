import { AppSidebar } from '@/components/app-sidebar/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { PrivatHeader } from '@/components/privat-header';

export default async function PrivatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <PrivatHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
