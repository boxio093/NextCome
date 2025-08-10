"use client";

import { useState, ReactNode } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

type CardProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

function Card({ title, description, children }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
}

export default function ComponentsPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="max-w-6xl mx-auto p-8 space-y-16">
      <h1 className="text-4xl font-bold mb-8">UI Components Showcase</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Button</h2>
        <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Card</h2>
        <Card title="Card Title" description="This is a simple card component demo.">
          <h3 className="text-xl font-semibold">Card Title</h3>
          <p>This is a simple card component demo.</p>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Modal</h2>
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        {isModalOpen && (
          <Modal buttonLabel="Close">
            <h3 className="text-xl font-semibold mb-4">Modal Title</h3>
            <p>This is a modal content example.</p>
            <Button onClick={() => setModalOpen(false)}>Close</Button>
          </Modal>
        )}
      </section>
      
      {/* Add more components demos here */}
    </main>
  );
}
