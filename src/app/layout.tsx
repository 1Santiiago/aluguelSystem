import "./globals.css";
import Link from "next/link";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const metadata = {
  title: "Sistema de Aluguéis",
  description: "Gerenciamento básico de imóveis, inquilinos e aluguéis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <Sidebar>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Navegação</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/Imoveis">🏠 Imóveis</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/Inquilinos">👥 Inquilinos</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/Alugueis">📑 Aluguéis</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <p className="text-xs text-center">
                  © {new Date().getFullYear()} RoxoLar
                </p>
              </SidebarFooter>
            </Sidebar>

            <main className="flex-1">
              <header className="flex items-center border-b p-2 mx-2">
                <SidebarTrigger />
                <Link href="/">
                  <h1 className="font-bold text-xl ml-2">RoxoLar</h1>
                </Link>
              </header>
              <div className="p-6 w-full">{children}</div>
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
