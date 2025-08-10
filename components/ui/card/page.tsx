import DemoBlock from "@/components/docs/DemoBlock";
import CodeBlock from "@/components/docs/CodeBlock";
import CardDemo from "@/components/ui/CardDemo";

const cardCode = `
import Card from "@/components/ui/Card";

export default function Example() {
  return <Card />;
}
`;

export default function CardDocs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Card</h1>
      <p className="text-gray-600">Card component showcase and usage guide.</p>

      <h2 className="text-xl font-semibold mt-6">Live Demo</h2>
      <DemoBlock>
        <CardDemo />
      </DemoBlock>

      <h2 className="text-xl font-semibold">Code</h2>
      <CodeBlock code={ cardCode } />

      <h2 className="text-xl font-semibold">Usage</h2>
      <p className="text-gray-600">
        Import <code>Card</code> from <code>@/components/ui/Card</code>.
      </p>
    </div>
  );
}