"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  language: string;
  code: string;
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative my-4">
      <div className="flex items-center justify-between bg-zinc-800 px-4 py-2 rounded-t-lg">
        <span className="text-sm text-zinc-400">{language}</span>
        <button
          onClick={copyToClipboard}
          className="text-zinc-400 hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
      <pre className="bg-zinc-900 p-4 rounded-b-lg overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
