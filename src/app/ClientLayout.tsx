"use client";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
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

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [emailStorage, setEmailStorage] = useState<string | null>(null);
  const pathname = usePathname();
  const showSidebar = pathname !== "/login";

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (!storedEmail) {
      router.push("/login");
    } else {
      setEmailStorage(storedEmail);
    }
  }, [router]);

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
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link
                          href="/login"
                          onClick={() => localStorage.clear()}
                        >
                          ↩ Sair
                        </Link>
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
