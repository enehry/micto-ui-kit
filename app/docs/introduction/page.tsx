import * as React from "react"

export default function IntroductionPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Introduction</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to the MICTO UI KIT. A collection of reusable components built for the Municipal ICT Office of Angono.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Modern & Accessible</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Built on top of shadcn/ui and Radix UI, ensuring top-tier accessibility and modern design.
          </p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Registry Driven</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Easily add components to your project using our custom shadcn registry.
          </p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Tailored for Angono</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Specific components like Inertia Pagination designed for our local development workflows.
          </p>
        </div>
      </div>
    </div>
  )
}
