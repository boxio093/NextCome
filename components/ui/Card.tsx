// components/ui/Card.tsx
"use client";

import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>}
      {children}
    </div>
  );
}
