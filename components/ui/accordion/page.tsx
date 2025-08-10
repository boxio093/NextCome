import DemoBlock from "@/components/docs/DemoBlock";
import CodeBlock from "@/components/docs/CodeBlock";
import Accordion from "@/components/ui/Accordion";

const accordionCode = `
import Accordion from "@/components/ui/Accordion";

export default function Example() {
  return <Accordion />;
}
`;

export default function AccordionDocs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Accordion</h1>
      <p className="text-gray-600">Accordion component showcase and usage guide.</p>

      <h2 className="text-xl font-semibold mt-6">Live Demo</h2>
      <DemoBlock>
        <Accordion />
      </DemoBlock>

      <h2 className="text-xl font-semibold">Code</h2>
      <CodeBlock code={ accordionCode } />

      <h2 className="text-xl font-semibold">Usage</h2>
      <p className="text-gray-600">
        Import <code>Accordion</code> from <code>@/components/ui/Accordion</code>.
      </p>
    </div>
  );
}