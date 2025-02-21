import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stonxis - A melhor aplicação de finanças do mundo",
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
        className='antialiased bg-yellow-500 text-white dark:bg-gray-900 dark:text-gray-50'
      >
        {children}
      </body>
    </html>
  );
}
