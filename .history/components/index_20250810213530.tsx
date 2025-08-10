import fs from "fs";
import path from "path";
import Link from "next/link";
import { GetStaticProps } from "next";
import { ComponentInfo } from "@/types/component";
import meta from "@/componentMeta";

interface Props {
  componentsList: ComponentInfo[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const componentsDir = path.join(process.cwd(), "components/ui");
  
  const files = fs.readdirSync(componentsDir).filter(file => file.endsWith("Demo.tsx"));

  const componentsList: ComponentInfo[] = files.map(file => {
    const name = file.replace("Demo.tsx", "");
    return {
      name,
      href: `/docs/${name.toLowerCase()}`
    };
  });

  return { props: { componentsList } };
};

export default function ComponentsPage({ componentsList }: Props) {
  return (
    <main className="grid gap-8 p-8 md:grid-cols-2">
      {componentsList.map(({ name, href }) => (
        <section key={name} className="border rounded-lg p-6 bg-white shadow-sm">
          <Link href={href}>
            <h2 className="text-xl font-bold text-blue-600 hover:underline">
              {name}
            </h2>
          </Link>
          <p className="text-gray-500 mb-4">
            {meta[name]?.description || "No description available."}
          </p>
        </section>
      ))}
    </main>
  );
}
