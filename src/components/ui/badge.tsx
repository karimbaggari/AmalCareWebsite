"use client";

import React from "react";

type BadgeProps = React.HTMLAttributes<HTMLDivElement>;

export function Badge({ className = "", ...props }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${className}`}
      {...props}
    />
  );
}

export default Badge;


