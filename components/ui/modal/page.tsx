import DemoBlock from "@/components/docs/DemoBlock";
import CodeBlock from "@/components/docs/CodeBlock";
import ModalDemo from "@/components/ui/ModalDemo";

const modalCode = `
import Modal from "@/components/ui/Modal";

export default function Example() {
  return <Modal />;
}
`;

export default function ModalDocs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Modal</h1>
      <p className="text-gray-600">Modal component showcase and usage guide.</p>

      <h2 className="text-xl font-semibold mt-6">Live Demo</h2>
      <DemoBlock>
        <ModalDemo />
      </DemoBlock>

      <h2 className="text-xl font-semibold">Code</h2>
      <CodeBlock code={ modalCode } />

      <h2 className="text-xl font-semibold">Usage</h2>
      <p className="text-gray-600">
        Import <code>Modal</code> from <code>@/components/ui/Modal</code>.
      </p>
    </div>
  );
}