import Link from "next/link";
import ButtonDemo from "@/components/ui/ButtonDemo";
import CardDemo from "@/components/ui/CardDemo";
import ModalDemo from "@/components/ui/ModalDemo";

export default function ComponentsPage() {
  return (
    <main className="grid gap-8 p-8 md:grid-cols-2">
      <section className="border rounded-lg p-6 bg-white shadow-sm">
        <Link href="/docs/button">
          <h2 className="text-xl font-bold text-blue-600 hover:underline">
            Button
          </h2>
        </Link>
        <p className="text-gray-500 mb-4">
          Interactive buttons for actions and navigation.
        </p>
        <ButtonDemo />
      </section>

      <section className="border rounded-lg p-6 bg-white shadow-sm">
        <Link href="/docs/card">
          <h2 className="text-xl font-bold text-blue-600 hover:underline">
            Card
          </h2>
        </Link>
        <p className="text-gray-500 mb-4">
          Flexible container for content display.
        </p>
        <CardDemo />
      </section>

      <section className="border rounded-lg p-6 bg-white shadow-sm">
        <Link href="/docs/modal">
          <h2 className="text-xl font-bold text-blue-600 hover:underline">
            Modal
          </h2>
        </Link>
        <p className="text-gray-500 mb-4">
          Dialog overlays for focused user interactions.
        </p>
        <ModalDemo />
      </section>
    </main>
  );
}
