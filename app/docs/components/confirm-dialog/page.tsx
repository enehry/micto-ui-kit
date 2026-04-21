"use client";

import * as React from "react";
import { ChevronRight, Layers, Terminal } from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import { InstallCommandTabs } from "@/components/install-command-tabs";
import { Button } from "@/components/ui/button";
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
import { confirm } from "@/components/ui/confirm";
import { ComponentPreview } from "@/components/component-preview";
import Link from "next/link";

const installCommands = [
  {
    label: "pnpm",
    value: "pnpm dlx shadcn@latest add https://micto-ui-kit.misangono.net/r/confirm.json",
  },
  {
    label: "npm",
    value: "npx shadcn@latest add https://micto-ui-kit.misangono.net/r/confirm.json",
  },
];

const basicUsage = `import { confirm } from "@/components/ui/confirm"

export function DeleteButton() {
  const handleDelete = async () => {
    const ok = await confirm({
      title: "Are you absolutely sure?",
      body: "This action cannot be undone. This will permanently delete your account.",
      icon: "danger",
      confirmText: "Delete Account",
    });

    if (ok) {
      // Proceed with deletion
    }
  }

  return <Button onClick={handleDelete}>Delete</Button>
}`;

const propsData = [
  {
    name: "title",
    type: "string",
    default: "undefined",
    description: "The title of the dialog shown in bold.",
  },
  {
    name: "body",
    type: "string | ReactNode",
    default: "required",
    description: "The main content of the alert. Supports custom components.",
  },
  {
    name: "icon",
    type: "'warning' | 'danger' | 'info' | 'ghost'",
    default: "'warning'",
    description: "The visual style and Lucide icon to display.",
  },
  {
    name: "confirmText",
    type: "string",
    default: "'Confirm'",
    description: "Text for the primary action button.",
  },
  {
    name: "onConfirm",
    type: "() => Promise<boolean | void> | boolean | void",
    default: "undefined",
    description: "Optional async handler called when confirming. Returning false prevents closing.",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "The width and text size profile of the dialog.",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    description: "Tailwind classes to override the dialog styling (e.g. width, text-alignment).",
  },
  {
    name: "dismissable",
    type: "boolean",
    default: "true",
    description: "Whether clicking the backdrop closes the dialog.",
  },
];

const providerProps = [
  {
    name: "defaultSize",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "Setting a project-wide default size for all confirmations.",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    description: "Styling the backdrop and stack container globally.",
  },
];

const demoCode = `// 1. Simple Alert
confirm({
  title: "Account Update",
  body: "Your profile has been saved successfully.",
  icon: "info",
  confirmText: "Great",
});

// 2. Trigger Stack
confirm({ title: "First Alert", ... });
confirm({ title: "Second Alert", ... });
confirm({ title: "Danger Zone", ... });

// 3. Async Lifecycle
confirm({
  title: "Syncing Data",
  body: "This will start a background sync...",
  onConfirm: async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return true;
  },
});`;

export default function ConfirmDialogPage() {
  const triggerSimple = () => {
    confirm({
      title: "Account Update",
      body: "Your profile has been saved successfully.",
      icon: "info",
      confirmText: "Great",
    });
  };

  const triggerStack = () => {
    confirm({
      title: "First Alert",
      body: "This is the first layer of the stack.",
      icon: "info",
    });
    setTimeout(() => {
      confirm({
        title: "Second Alert",
        body: "Look! I pushed the previous one back.",
        icon: "warning",
      });
    }, 200);
    setTimeout(() => {
      confirm({
        title: "Danger Zone",
        body: "Now we have a complete stack of confirmations.",
        icon: "danger",
        confirmText: "I understand",
      });
    }, 400);
  };

  const triggerAsync = () => {
    confirm({
      title: "Syncing Data",
      body: "This will start a background sync that takes about 2 seconds.",
      onConfirm: async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return true;
      },
    });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-12 pb-20">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Components</span>
          <ChevronRight className="size-3" />
          <span className="text-foreground font-medium">Global Confirm</span>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
              Global Confirm
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A singleton, promise-based confirmation system inspired by Sonner. Handles multiple stacked dialogs with ease.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Badge variant="secondary" className="rounded-md px-2 py-0.5 text-[11px] uppercase tracking-wider">Singleton</Badge>
            <Badge variant="outline" className="rounded-md px-2 py-0.5 text-[11px] uppercase tracking-wider border-primary/20 bg-primary/5 text-primary">Promise-Based</Badge>
          </div>
        </div>
      </div>

      <Separator />

      {/* Preview Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <Layers className="size-5 text-primary" />
            Interactive Demo
          </h2>
          <p className="text-muted-foreground">
            Test the functional API. Notice how dialogs stack and scale when triggered simultaneously.
          </p>
        </div>
        
        <ComponentPreview code={demoCode}>
           <div className="flex flex-wrap gap-4 justify-center">
             <Button onClick={triggerSimple} variant="outline" className="h-11 px-6 shadow-sm">
               Simple Alert
             </Button>
             <Button onClick={triggerStack} variant="secondary" className="h-11 px-6 shadow-sm">
               Trigger Stack (3)
             </Button>
             <Button onClick={triggerAsync} className="h-11 px-6 shadow-md shadow-primary/20">
               Async Lifecycle
             </Button>
           </div>
        </ComponentPreview>
      </section>

      {/* Installation Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
            <Terminal className="size-4" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Installation</h2>
        </div>
        <div className="rounded-xl border bg-muted/40 p-1">
          <InstallCommandTabs
            commands={installCommands}
            defaultValue="pnpm"
          />
        </div>
      </section>

      {/* Setup Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Setup</h2>
        <p className="text-muted-foreground">
          Add the `ConfirmProvider` to your root layout or app component. This ensures the confirmation stack is available globally.
        </p>
        <div className="overflow-hidden rounded-xl border">
          <CodeBlock 
            code={`import { ConfirmProvider } from "@/components/ui/confirm"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ConfirmProvider />
      </body>
    </html>
  )
}`} 
            language="tsx" 
          />
        </div>
      </section>

      {/* Usage Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Functional API Usage</h2>
        <p className="text-muted-foreground">
          Import `confirm` and await the result. No component wrapping or local state required per call.
        </p>
        <div className="overflow-hidden rounded-xl border">
          <CodeBlock code={basicUsage} language="tsx" />
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-6 text-foreground">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">API Reference</h2>
          <p className="text-muted-foreground">
            Options passed to the lifecycle functions.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold italic opacity-80">confirm(options)</h3>
          <div className="rounded-xl border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="w-[150px]">Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead className="text-right">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {propsData.map((prop) => (
                  <TableRow key={prop.name} className="border-b transition-colors hover:bg-muted/5 font-sans">
                    <TableCell className="font-mono text-xs font-semibold">{prop.name}</TableCell>
                    <TableCell className="font-mono text-xs text-blue-600 dark:text-blue-400">{prop.type}</TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">{prop.default}</TableCell>
                    <TableCell className="text-right text-xs leading-relaxed max-w-[300px]">
                      {prop.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-semibold italic opacity-80">ConfirmProvider</h3>
          <div className="rounded-xl border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="w-[150px]">Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead className="text-right">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {providerProps.map((prop) => (
                  <TableRow key={prop.name} className="border-b transition-colors hover:bg-muted/5 font-sans">
                    <TableCell className="font-mono text-xs font-semibold">{prop.name}</TableCell>
                    <TableCell className="font-mono text-xs text-blue-600 dark:text-blue-400">{prop.type}</TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">{prop.default}</TableCell>
                    <TableCell className="text-right text-xs leading-relaxed max-w-[300px]">
                      {prop.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <Separator />
      <div className="flex items-center justify-between pt-4 pb-12">
        <Link href="/docs/components/inertia-pagination" className="group flex flex-col gap-1 transition-colors hover:text-primary">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold group-hover:text-primary/50">Previous</span>
          <span className="text-sm font-medium">Inertia Pagination</span>
        </Link>
        <Link href="/docs/components/button" className="group flex flex-col items-end gap-1 transition-colors hover:text-primary text-right">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold group-hover:text-primary/50">Next</span>
          <span className="text-sm font-medium">Button Component</span>
        </Link>
      </div>
    </div>
  );
}
