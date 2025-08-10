// components/ui/ModalDemo.tsx
"use client";

import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h3 className="text-xl font-semibold mb-4">Modal Title</h3>
          <p>This is modal content.</p>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal>
      )}
    </>
  );
}
