'use client';
import React from 'react';

import { useState } from "react";

export default function TooltipDemo() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Hover me
      </button>
      {show && (
        <div className="absolute bottom-full mb-2 w-max bg-gray-900 text-white text-sm rounded px-2 py-1 shadow-lg whitespace-nowrap">
          Tooltip info here
        </div>
      )}
    </div>
  );
}
