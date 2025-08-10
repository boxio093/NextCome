// components/ui/Button.tsx
"use client";

import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variantStyles = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
  ghost: "bg-transparent hover:bg-indigo-50 text-indigo-600",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 transition
        ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
}
