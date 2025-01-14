import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Petsoft",
  description: "Take care of people pets responsibly with petsoft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-sm min-h-screen text-zinc-900 bg-[#E5E8EC] `}>
        Header 
        {children}
        Footer 
      </body>
    </html>
  );
}
