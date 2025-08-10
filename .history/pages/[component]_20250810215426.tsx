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
  const componentName = params?.component as string;
  return { props: { componentName } };
};

import React, { useEffect, useState } from "react";

export default function ComponentDocs({ componentName }: Props) {
  const [DemoComponent, setDemoComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    let isMounted = true;
    import(`@/components/ui/${capitalize(componentName)}Demo`)
      .then((mod) => {
        if (isMounted) setDemoComponent(() => mod.default);
      })
      .catch(() => {
        if (isMounted) setDemoComponent(() => null);
      });
    return () => {
      isMounted = false;
    };
  }, [componentName]);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{capitalize(componentName)}</h1>
      <p className="text-gray-500 mb-6">
        {meta[capitalize(componentName)]?.description || "No description available."}
      </p>
      {DemoComponent ? <DemoComponent /> : <div>Loading demo...</div>}
    </main>
  );
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
