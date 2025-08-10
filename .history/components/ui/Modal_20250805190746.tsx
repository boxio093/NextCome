// components/ui/Modal.tsx
"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function Modal({ buttonLabel, children }: { buttonLabel: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-green-600 text-white rounded">
        {buttonLabel}
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg max-w-md">
            {children}
            <button onClick={() => setIsOpen(false)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
