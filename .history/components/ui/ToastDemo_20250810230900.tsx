'use client';
import React from 'react';

import { useState } from "react";

export default function ToastDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative max-w-sm">
      <button
        onClick={() => setVisible(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Show Toast
      </button>

      {visible && (
        <div className="absolute top-12 right-0 bg-gray-800 text-white p-3 rounded shadow-lg animate-fade-in">
          This is a toast notification.
          <button
            onClick={() => setVisible(false)}
            aria-label="Close toast"
            className="ml-4 text-white hover:text-gray-400"
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
