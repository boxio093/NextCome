import Link from "next/link";
import ButtonDemo from "@/components/ui/ButtonDemo";
import CardDemo from "@/components/ui/CardDemo";
import ModalDemo from "@/components/ui/ModalDemo";
import Tabs from "@/components/ui/Tabs";
import Accordion from "@/components/ui/Accordion";

const componentsList = [
  {
    name: "Button",
    description: "Interactive buttons for actions and navigation.",
    href: "/docs/button",
    Demo: ButtonDemo,
  },
  {
    name: "Card",
    description: "Flexible container for displaying grouped content.",
    href: "/docs/card",
    Demo: CardDemo,
  },
  {
    name: "Modal",
    description: "Dialog overlays for focused user interactions.",
    href: "/docs/modal",
    Demo: ModalDemo,
  },
  {
    name: "Tabs",
    description: "Organize content into multiple views using tabs.",
    href: "/docs/tabs",
    Demo: Tabs,
  },
  {
    name: "Accordion",
    description: "Expand and collapse sections to show or hide content.",
    href: "/docs/accordion",
    Demo: Accordion,
  },
];

export default function ComponentsPage() {
  return (
    <main className="grid gap-8 p-8 md:grid-cols-2">
      {componentsList.map(({ name, description, href, Demo }) => (
        <section
          key={name}
          className="border rounded-lg p-6 bg-white shadow-sm"
        >
          <Link href={href}>
            <h2 className="text-xl font-bold text-blue-600 hover:underline">
              {name}
            </h2>
          </Link>
          <p className="text-gray-500 mb-4">{description}</p>
          <Demo />
        </section>
      ))}
    </main>
  );
}
