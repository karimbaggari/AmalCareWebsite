"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
};

export function Button({ className = "", variant = "default", size = "md", ...props }: ButtonProps) {
  const variantCls =
    variant === "outline"
      ? "border bg-transparent text-[#00a6a2]"
      : "bg-[#00a6a2] text-white";
  const sizeCls = size === "lg" ? "px-6 py-3 text-base" : size === "sm" ? "px-3 py-1.5 text-sm" : "px-4 py-2 text-sm";
  const base =
    "inline-flex items-center justify-center rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  return <button className={`${base} ${variantCls} ${sizeCls} ${className}`} {...props} />;
}

export default Button;


