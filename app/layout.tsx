import type { Metadata } from "next";
import "./globals.css";
import { MainNavigation } from "@/components/main-navigation/main-navigation";
import { Footer } from "@/components/footer";
import ToasterContext from "@/context/toaster-context";

export const metadata: Metadata = {
  title: "Atlas Turkish Cuisine",
  description: "Some description...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ToasterContext />
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
