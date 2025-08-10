"use client";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
      <pre className="text-sm font-mono">{code}</pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 px-3 py-1 bg-gray-700 text-xs rounded hover:bg-gray-600"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
