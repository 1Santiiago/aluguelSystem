import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Pegando o "token" ou "email" do cookie
  const token = req.cookies.get("email"); // ou "auth" se você tiver um token JWT

  // Se não estiver logado e tentar acessar qualquer rota diferente de /login
  if (!token && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Se estiver logado e acessar /login, redireciona para home
  if (token && req.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Continua normalmente
  return NextResponse.next();
}

// Define quais rotas o middleware deve interceptar
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
