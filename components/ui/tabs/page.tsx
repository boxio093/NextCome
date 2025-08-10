import DemoBlock from "@/components/docs/DemoBlock";
import CodeBlock from "@/components/docs/CodeBlock";
import Tabs from "@/components/ui/Tabs";

const tabsCode = `
import Tabs from "@/components/ui/Tabs";

export default function Example() {
  return <Tabs />;
}
`;

export default function TabsDocs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tabs</h1>
      <p className="text-gray-600">Tabs component showcase and usage guide.</p>

      <h2 className="text-xl font-semibold mt-6">Live Demo</h2>
      <DemoBlock>
        <Tabs />
      </DemoBlock>

      <h2 className="text-xl font-semibold">Code</h2>
      <CodeBlock code={ tabsCode } />

      <h2 className="text-xl font-semibold">Usage</h2>
      <p className="text-gray-600">
        Import <code>Tabs</code> from <code>@/components/ui/Tabs</code>.
      </p>
    </div>
  );
}