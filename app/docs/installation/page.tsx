import * as React from "react"
import { CodeBlock } from "@/components/code-block"

export default function InstallationPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
        <p className="text-lg text-muted-foreground">
          Step-by-step guide to setting up MICTO UI KIT in your project.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Initialize shadcn/ui</h2>
        <p className="text-sm text-muted-foreground">
          Ensure you have a shadcn/ui project ready.
        </p>
        <CodeBlock code="npx shadcn@latest init" language="shell" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Add MICTO Components</h2>
        <p className="text-sm text-muted-foreground">
          Use our registry URL to add specific components.
        </p>
        <CodeBlock 
          code="npx shadcn@latest add https://micto-ui-kit.misangono.net/r/inertia-pagination.json" 
          language="shell" 
        />
      </section>
    </div>
  )
}
