import ButtonDemo from "@/components/ui/ButtonDemo";
import CardDemo from "@/components/ui/CardDemo";
import ModalDemo from "@/components/ui/ModalDemo";

export default function ComponentsPage() {
  return (
    <main className="grid ...">
      <section>
        <h2>Button</h2>
        <ButtonDemo />
      </section>
      <section>
        <h2>Card</h2>
        <CardDemo />
      </section>
      <section>
        <h2>Modal</h2>
        <ModalDemo />
      </section>
    </main>
  );
}
