// components/ui/CardDemo.tsx
"use client";

import Card from "./Card";

export default function CardDemo() {
  return (
    <Card title="Demo Card" description="This card supports children content">
      <p>This is a child paragraph inside the card.</p>
    </Card>
  );
}
