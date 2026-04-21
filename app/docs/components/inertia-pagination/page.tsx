"use client";

import * as React from "react";
import { ChevronRight, Terminal } from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import { InertiaPagination } from "@/components/inertia-pagination";
import { InstallCommandTabs } from "@/components/install-command-tabs";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview } from "@/components/component-preview";
import Link from "next/link";

const demoLinks = [
  { active: false, label: "&laquo; Previous", url: "/users?page=2" },
  { active: false, label: "1", url: "/users?page=1" },
  { active: false, label: "2", url: "/users?page=2" },
  { active: true, label: "3", url: "/users?page=3" },
  { active: false, label: "4", url: "/users?page=4" },
  { active: false, label: "5", url: "/users?page=5" },
  { active: false, label: "...", url: null },
  { active: false, label: "12", url: "/users?page=12" },
  { active: false, label: "Next &raquo;", url: "/users?page=4" },
];

const previewCode = `<InertiaPagination 
  links={[
    { active: false, label: "&laquo; Previous", url: "/users?page=2" },
    { active: false, label: "1", url: "/users?page=1" },
    { active: true, label: "3", url: "/users?page=3" },
    // ...
  ]} 
/>`;

const installCommands = [
  {
    label: "pnpm",
    value:
      "pnpm dlx shadcn@latest add https://micto-ui-kit.misangono.net/r/inertia-pagination.json",
  },
  {
    label: "npm",
    value:
      "npx shadcn@latest add https://micto-ui-kit.misangono.net/r/inertia-pagination.json",
  },
];

const usageCode = `import { Link } from "@inertiajs/react"
import { InertiaPagination } from "@/components/inertia-pagination"

export default function Page({ users }) {
  return (
    <InertiaPagination 
      links={users.links} 
      LinkComponent={Link} 
    />
  )
}`;

const propsData = [
  {
    name: "links",
    type: "Array<{ url: string | null, label: string, active: boolean }>",
    default: "[]",
    description:
      "The links array directly from the Laravel/Inertia paginator response.",
  },
  {
    name: "LinkComponent",
    type: "React.ComponentType",
    default: "a",
    description:
      "The Link component to use (e.g., Inertia's Link for SPA navigation).",
  },
  {
    name: "size",
    type: "'default' | 'sm' | 'lg' | 'icon'",
    default: "'default'",
    description: "The size of the pagination buttons.",
  },
];

export default function InertiaPaginationPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 pb-20">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Components</span>
          <ChevronRight className="size-3" />
          <span className="text-foreground font-medium">
            Inertia Pagination
          </span>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Inertia Pagination
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A high-performance pagination component optimized for Laravel and
              Inertia.js responses.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Badge
              variant="secondary"
              className="rounded-md px-2 py-0.5 text-[11px] uppercase tracking-wider"
            >
              React
            </Badge>
            <Badge
              variant="outline"
              className="rounded-md px-2 py-0.5 text-[11px] uppercase tracking-wider"
            >
              Inertia.js
            </Badge>
          </div>
        </div>
      </div>

      <Separator />

      {/* Main Content */}
      <div className="space-y-16">
        {/* Preview Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Preview</h2>
            <p className="text-muted-foreground">
              Interact with the live pagination component below to see how it
              handles active states and ellipsis.
            </p>
          </div>
          
          <ComponentPreview code={previewCode}>
            <InertiaPagination links={demoLinks} />
          </ComponentPreview>
        </section>

        {/* Installation Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Terminal className="size-4" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
          </div>
          <div className="rounded-xl border bg-muted/40 p-1">
            <InstallCommandTabs
              commands={installCommands}
              defaultValue="pnpm"
            />
          </div>
        </section>

        {/* Usage Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
          <p className="text-muted-foreground">
            Integrating the paginator is straightforward. Simply pass the links
            object from your controller.
          </p>
          <div className="overflow-hidden rounded-xl border">
            <CodeBlock code={usageCode} language="tsx" />
          </div>
        </section>

        {/* Props Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">API Reference</h2>
            <p className="text-muted-foreground">
              Configure the component using the following properties.
            </p>
          </div>
          <div className="rounded-xl border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead className="text-right">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {propsData.map((prop) => (
                  <TableRow key={prop.name}>
                    <TableCell className="font-mono text-xs font-semibold">
                      {prop.name}
                    </TableCell>
                    <TableCell className="font-mono text-xs text-blue-600 dark:text-blue-400">
                      {prop.type}
                    </TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">
                      {prop.default}
                    </TableCell>
                    <TableCell className="text-right text-xs leading-relaxed max-w-[300px]">
                      {prop.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
      <Separator />
      <div className="flex items-center justify-between pt-4">
        <Link
          href="/docs/installation"
          className="group flex flex-col gap-1 transition-colors hover:text-primary"
        >
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold group-hover:text-primary/50">
            Previous
          </span>
          <span className="text-sm font-medium">Installation</span>
        </Link>
        <Link
          href="/docs/components/button"
          className="group flex flex-col items-end gap-1 transition-colors hover:text-primary text-right"
        >
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold group-hover:text-primary/50">
            Next
          </span>
          <span className="text-sm font-medium">Button Component</span>
        </Link>
      </div>
    </div>
  );
}
