import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "Sistema de Aluguéis",
  description: "Gerenciamento básico de imóveis, inquilinos e aluguéis",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen">
        <header className="bg-primary  p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/"><h1 className="text-xl font-bold lg:text-left, md:text-left ">🏠 RoxoLar</h1></Link>
            <nav className="space-x-4 lg:block, md:block hidden">
              <Link href="/Imoveis" className="hover:underline">Imóveis</Link>
              <Link href="/Inquilinos" className="hover:underline">Inquilinos</Link>
              <Link href="/Alugueis" className="hover:underline">Aluguéis</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto ">
          {children}
        </main>

        <footer className="bg-primary-light text-center p-4 mt-6">
          <p className="text-sm">© {new Date().getFullYear()} RoxoLar</p>
        </footer>
      </body>
    </html>
  )
}
