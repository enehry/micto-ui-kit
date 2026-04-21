"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Command, Search, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navData } from "./docs-sidebar";

export function DocsNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-8">
        <div className="mr-8 flex items-center gap-2.5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex aspect-square size-6 items-center justify-center rounded-[4px] bg-primary text-primary-foreground">
              <Command className="size-3.5" />
            </div>
            <span className="font-bold tracking-tight text-sm">MICTO UI</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between gap-4 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/30" />
              <Input
                placeholder="Search documentation..."
                className="h-9 w-full pl-9 md:w-[300px] lg:w-[400px] border-none bg-muted/20 focus-visible:bg-muted/40 focus-visible:ring-0"
              />
              <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 gap-1 md:flex">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </div>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] pr-0">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <div className="flex aspect-square size-6 items-center justify-center rounded-[4px] bg-primary text-primary-foreground">
                    <Command className="size-3.5" />
                  </div>
                  MICTO UI
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation menu for mobile devices.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-8 pb-10">
                {navData.map((section) => (
                  <div key={section.title} className="flex flex-col gap-3">
                    <h4 className="px-2 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/50">
                      {section.title}
                    </h4>
                    <div className="flex flex-col gap-1">
                      {section.items.map((item) => {
                        const isActive = pathname === item.url;
                        return (
                          <Link
                            key={item.url}
                            href={item.url}
                            className={cn(
                              "flex h-9 items-center px-3 text-sm font-medium transition-colors hover:text-foreground rounded-md",
                              isActive
                                ? "bg-muted text-foreground"
                                : "text-muted-foreground/70 hover:bg-muted/50"
                            )}
                          >
                            {item.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
