import Button from "@/components/ui/Button";

export default function Example() {
  return (
    <div className="space-x-4">
      <Button onClick={() => alert("Primary clicked!")}>Primary</Button>
      <Button variant="secondary" onClick={() => alert("Secondary clicked!")}>Secondary</Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
      <Button size="lg">Large Button</Button>
      <Button size="sm" variant="outline">
        Small Outline
      </Button>
    </div>
  );
}
