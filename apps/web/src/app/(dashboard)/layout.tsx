import type { Metadata } from "next";
import "../../app/globals.css";
import Sidebar from "@/components/dashboard/Sidebar";

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
      <body className="flex h-screen">
        <div className="w-56">
          <Sidebar />
        </div>
        <div className="flex-1 p-3">
          {children}
        </div>
      </body>
    </html>
  );
}
