import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import meta from "@/componentMeta";

interface Props {
  componentName: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const componentsDir = path.join(process.cwd(), "components/ui");
  const files = fs.readdirSync(componentsDir).filter(file => file.endsWith("Demo.tsx"));

  const paths = files.map(file => ({
    params: { component: file.replace("Demo.tsx", "").toLowerCase() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return { props: { componentName: params?.component as string } };
};

export default function ComponentDocs({ componentName }: Props) {
  const DemoComponent = require(`@/components/ui/${capitalize(componentName)}Demo`).default;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{capitalize(componentName)}</h1>
      <p className="text-gray-500 mb-6">
        {meta[capitalize(componentName)]?.description || "No description available."}
      </p>
      <DemoComponent />
    </main>
  );
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
