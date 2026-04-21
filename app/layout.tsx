import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DocsNavbar } from "@/components/docs-navbar";
import { DocsSidebar } from "@/components/docs-sidebar";
import { ConfirmProvider } from "@/components/ui/confirm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistHeading = Geist({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MICTO UI KIT",
  description:
    "A collection of UI components and utilities for building modern web applications with shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans antialiased",
        geistSans.variable,
        geistMono.variable,
        geistHeading.variable,
        inter.variable,
      )}
    >
      <body className="min-h-screen bg-background text-foreground tracking-tight">
        <TooltipProvider>
          <ConfirmProvider />
          <div className="relative flex min-h-screen flex-col">
            <DocsNavbar />
            <div className="flex-1 items-start md:grid md:grid-cols-[260px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]">
              <DocsSidebar />
              <main className="py-10 px-6 md:px-10 lg:px-20 min-h-[calc(100vh-4rem)]">
                {children}
              </main>
            </div>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
