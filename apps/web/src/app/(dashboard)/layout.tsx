import type { Metadata } from "next";
import "../../app/globals.css";

export const metadata: Metadata = {
  title: "Stonxis - Educação Financeira Sem Complicação.",
  description: "Educação Financeira Sem Complicação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
          {children}
      </body>
    </html>
  );
}
