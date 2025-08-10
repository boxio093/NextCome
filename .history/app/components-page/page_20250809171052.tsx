"use client";

import { useState } from "react";
import Link from "next/link";

// Import your UI components or stub them here
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Modal from "@/components/ui/Modal";
import Accordion from "@/components/ui/Accordion";
import Tabs from "@/components/ui/Tabs";
import FormInput from "@/components/ui/FormInput";

export default function ComponentsPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main
      className="max-w-6xl mx-auto p-8 grid gap-16
                 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {/* Each section will automatically flow in the grid columns */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">Button</h2>
        <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Card</h2>
        <Card title="Card Title" description="This is a simple card component demo.">
          <p>This card also supports children content inside it.</p>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Modal</h2>
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        {isModalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <h3 className="text-xl font-semibold mb-4">Modal Title</h3>
            <p>This is a modal content example.</p>
            <Button onClick={() => setModalOpen(false)}>Close</Button>
          </Modal>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
        <Accordion />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
        <Tabs />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Form Input</h2>
        <form className="max-w-md space-y-4">
          <FormInput label="Name" id="name" placeholder="Your name" />
          <FormInput label="Email" id="email" type="email" placeholder="you@example.com" />
          <FormInput label="Password" id="password" type="password" placeholder="••••••••" />
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </main>
  );
}
