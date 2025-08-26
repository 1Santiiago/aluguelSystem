import ClientLayout from "./ClientLayout";
import "./globals.css";

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
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
