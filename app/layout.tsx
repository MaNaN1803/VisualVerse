import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "VISUALVERSE",
  description: " Generative AI APP!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className="flex flex-col min-h-screen">
      <Header/>
        {children}</body>
    </html>
  );
}
