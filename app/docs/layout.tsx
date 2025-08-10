import Link from "next/link";

const components = [
  { name: "Button", href: "/docs/button" },
  { name: "Card", href: "/docs/card" },
  { name: "Modal", href: "/docs/modal" },
  { name: "Tabs", href: "/docs/tabs" },
  { name: "Accordion", href: "/docs/accordion" },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 border-r p-4">
        <h2 className="font-bold mb-4">Components</h2>
        <ul className="space-y-2">
          {components.map((c) => (
            <li key={c.href}>
              <Link href={c.href} className="hover:underline">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
