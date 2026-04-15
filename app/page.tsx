import * as React from "react";
import { CodeBlock } from "@/components/code-block";
import { InertiaPagination } from "@/components/inertia-pagination";
import { InstallCommandTabs } from "@/components/install-command-tabs";

const demoLinks = [
  { active: false, label: "&laquo; Previous", url: "/users?page=2" },
  { active: false, label: "1", url: "/users?page=1" },
  { active: false, label: "2", url: "/users?page=2" },
  { active: true, label: "3", url: "/users?page=3" },
  { active: false, label: "4", url: "/users?page=4" },
  { active: false, label: "5", url: "/users?page=5" },
  { active: false, label: "6", url: "/users?page=6" },
  { active: false, label: "7", url: "/users?page=7" },
  { active: false, label: "8", url: "/users?page=8" },
  { active: false, label: "9", url: "/users?page=9" },
  { active: false, label: "10", url: "/users?page=10" },
  { active: false, label: "...", url: null },
  { active: false, label: "12", url: "/users?page=12" },
  { active: false, label: "13", url: "/users?page=13" },
  { active: false, label: "14", url: "/users?page=14" },
  { active: false, label: "Next &raquo;", url: "/users?page=4" },
];

const installCommands = [
  {
    label: "PNPM",
    value:
      "pnpm dlx shadcn@latest add https://micto-ui-kit.misangono.net/r/inertia-pagination.json",
  },
  {
    label: "NPM",
    value:
      "npx shadcn@latest add https://micto-ui-kit.misangono.net/r/inertia-pagination.json",
  },
];

const usageCode = `import { Link } from "@inertiajs/react"
import { InertiaPagination } from "@/components/inertia-pagination"

<InertiaPagination links={links} LinkComponent={Link} />`;

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-4xl flex-col gap-8 px-4 py-10">
      <header className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted-foreground">
          shadcn registry
        </p>
        <h1 className="text-3xl font-bold tracking-tight">
          Inertia Pagination
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          A compact paginator for Laravel and Inertia responses, designed to
          drop into a shadcn-based UI.
        </p>
      </header>

      <main className="flex flex-1 flex-col gap-8">
        <section className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Sample UI</h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Renders previous and next controls, disables empty URLs, and
              treats ellipsis entries as passive markers.
            </p>
          </div>

          <div className="mt-6 rounded-lg border border-dashed bg-muted/30 px-4 py-12">
            <InertiaPagination links={demoLinks} size="default" />
          </div>
        </section>

        <section className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Installation</h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Add the component from this registry with your preferred package
              manager.
            </p>
          </div>

          <div className="mt-6">
            <InstallCommandTabs
              commands={installCommands}
              defaultValue="PNPM"
            />
          </div>
        </section>

        <section className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Usage</h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Pass the backend paginator `links` array directly. In an Inertia
              app, supply `LinkComponent=Link` so navigation keeps client-side
              state and scroll behavior.
            </p>
          </div>

          <div className="mt-6">
            <CodeBlock code={usageCode} language="tsx" />
          </div>
        </section>
      </main>
    </div>
  );
}
