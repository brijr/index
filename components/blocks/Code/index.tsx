"use client";

import { useState } from "react";
import { toast } from "sonner";
import { CopyIcon } from "@/components/icons/copy";

interface CodeBlockProps {
  language: string;
  code: string;
}

export const CodeBlock = ({ language, code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full my-4 rounded-lg overflow-hidden bg-accent/10 ring-1 ring-accent/20">
      <div className="flex items-center justify-between pl-3 pr-2 py-2 bg-accent/5 border-b border-accent/20">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="hover:text-accent/80 transition-colors cursor-pointer"
        >
          <CopyIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="px-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-6 text-accent">{code}</pre>
      </div>
    </div>
  );
};

export default CodeBlock;
