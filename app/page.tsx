import * as React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
      <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
        Initial Release v1.0.0
      </div>
      <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
        Build modern web apps for <span className="text-primary">Angono</span> with MICTO UI KIT.
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        A collection of accessible, themeable, and high-performance components designed 
        specifically for our local development ecosystem.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/docs/introduction">
            Get Started
            <MoveRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/docs/components/inertia-pagination">
            Browse Components
          </Link>
        </Button>
      </div>
    </div>
  );
}
