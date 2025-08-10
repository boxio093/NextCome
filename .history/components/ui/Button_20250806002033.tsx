import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
