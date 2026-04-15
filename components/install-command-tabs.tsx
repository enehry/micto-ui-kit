"use client";

import { CodeBlock } from "@/components/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CommandItem = {
  label: string;
  value: string;
};

type Props = {
  commands: CommandItem[];
  defaultValue?: string;
};

export function InstallCommandTabs({ commands, defaultValue }: Props) {
  const fallbackValue = commands[0]?.label;

  if (!commands.length || !fallbackValue) {
    return null;
  }

  return (
    <Tabs defaultValue={defaultValue ?? fallbackValue} className="w-full">
      <div className="flex items-center justify-between gap-3">
        <TabsList className="h-8 rounded-md bg-muted/60">
          {commands.map((command) => (
            <TabsTrigger
              key={command.label}
              value={command.label}
              className="h-7 rounded-sm px-3 text-xs data-[state=active]:bg-background"
            >
              {command.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {commands.map((command) => (
        <TabsContent key={command.label} value={command.label} className="mt-0">
          <CodeBlock code={command.value} language="shell" />
        </TabsContent>
      ))}
    </Tabs>
  );
}
