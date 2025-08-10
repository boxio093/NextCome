"use client";

import ButtonDemo from "@/components/ui/ButtonDemo";
import CardDemo from "@/components/ui/CardDemo";
import ModalDemo from "@/components/ui/ModalDemo";
// ...import AccordionDemo, TabsDemo, FormInputDemo as you create them

export default function ComponentsPage() {
  return (
    <main
      className="max-w-6xl mx-auto p-8 grid gap-16
                 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <section>
        <h2 className="text-2xl font-semibold mb-4">Button</h2>
        <ButtonDemo />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Card</h2>
        <CardDemo />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Modal</h2>
        <ModalDemo />
      </section>

      {/* Add more sections for Accordion, Tabs, FormInput demos here */}
    </main>
  );
}
