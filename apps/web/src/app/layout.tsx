import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Duofinance - A melhor aplicação de finanças do mundo",
  description: "A melhor aplicação de finanças do mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
