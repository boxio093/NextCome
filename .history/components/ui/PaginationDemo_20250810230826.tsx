'use client';
import React from 'react';

import { useState } from "react";

export default function PaginationDemo() {
  const [page, setPage] = useState(1);
  const totalPages = 5;

  return (
    <nav className="inline-flex rounded-md shadow" aria-label="Pagination">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, i) => {
        const p = i + 1;
        return (
          <button
            key={p}
            onClick={() => setPage(p)}
            aria-current={page === p ? "page" : undefined}
            className={`border border-gray-300 bg-white px-3 py-1 text-gray-700 hover:bg-gray-100 ${
              page === p ? "font-bold bg-blue-600 text-white" : ""
            }`}
          >
            {p}
          </button>
        );
      })}
      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
}
