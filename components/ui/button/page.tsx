import DemoBlock from "@/components/docs/DemoBlock";
import CodeBlock from "@/components/docs/CodeBlock";
import ButtonDemo from "@/components/ui/ButtonDemo";

const buttonCode = `
import Button from "@/components/ui/Button";

export default function Example() {
  return <Button />;
}
`;

export default function ButtonDocs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Button</h1>
      <p className="text-gray-600">Button component showcase and usage guide.</p>

      <h2 className="text-xl font-semibold mt-6">Live Demo</h2>
      <DemoBlock>
        <ButtonDemo />
      </DemoBlock>

      <h2 className="text-xl font-semibold">Code</h2>
      <CodeBlock code={ buttonCode } />

      <h2 className="text-xl font-semibold">Usage</h2>
      <p className="text-gray-600">
        Import <code>Button</code> from <code>@/components/ui/Button</code>.
      </p>
    </div>
  );
}