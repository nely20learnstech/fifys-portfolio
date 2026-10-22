import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nely — Software Engineer & AI Enthusiast",
  description: "Portfolio of Nely, a software engineer exploring intelligent systems and building reliable digital products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Caveat:wght@600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-[#FAFAFF] font-sans text-[#111747] antialiased selection:bg-[#DCD3FF] selection:text-[#3520A8]">
        {children}
      </body>
    </html>
  );
}
