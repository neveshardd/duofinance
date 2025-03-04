import type { Metadata } from "next";
import "./globals.css";
import "@/lib/supressAuthErrors"

export const metadata: Metadata = {
  title: "Stonxis - Educação Financeira Sem Complicação.",
  description: "Educação Financeira Sem Complicação.",
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
