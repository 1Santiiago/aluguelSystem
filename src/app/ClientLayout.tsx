"use client";
import "./globals.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const showSidebar = pathname !== "/login";

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Garante que o código só rode no client
    setIsMounted(true);
  }, []);

  const handleLogout = () => {
    // Remove cookie de login
    document.cookie =
      "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax";
    router.push("/login");
  };

  if (!isMounted) return null; // evita flash de conteúdo antes do client

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {showSidebar && (
          <Sidebar>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Navegação</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/imoveis">🏠 Imóveis</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/inquilinos">👥 Inquilinos</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/aluguéis">📑 Aluguéis</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={handleLogout}>
                        ↩ Sair
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
        )}

        <main className="flex-1">
          <div>
            <header className="flex items-center p-2 mx-2">
              {showSidebar && (
                <>
                  <SidebarTrigger />
                  <Link href="/">
                    <h1 className="font-bold text-xl ml-2">RoxoLar</h1>
                  </Link>
                </>
              )}
            </header>
            <div className="">{children}</div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
