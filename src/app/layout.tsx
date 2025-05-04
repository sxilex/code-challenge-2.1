import type { Metadata } from "next";
import NavBar from "../components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Honkai Starrail Newest Characters",
  description: "Send help",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
