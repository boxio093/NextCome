// components/ui/ButtonDemo.tsx
"use client";

import Button from "./Button";

export default function ButtonDemo() {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button onClick={() => alert("Primary clicked!")}>Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost" size="sm">
        Ghost Small
      </Button>
      <Button variant="primary" size="lg">
        Large Primary
      </Button>
    </div>
  );
}
