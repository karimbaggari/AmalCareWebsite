"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

type AccordionContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const ItemCtx = createContext<AccordionContextType | null>(null);

export function Accordion({ children, className = "" }: { children: React.ReactNode; className?: string; type?: "single"; collapsible?: boolean }) {
  return <div className={className}>{children}</div>;
}

export function AccordionItem({ children, value, className = "" }: { children: React.ReactNode; value: string; className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={className} data-state={isOpen ? "open" : "closed"}>
      <ItemCtx.Provider value={{ isOpen, setIsOpen }}>{children}</ItemCtx.Provider>
    </div>
  );
}

export function AccordionTrigger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ctx = useContext(ItemCtx);
  if (!ctx) return null;
  return (
    <button
      type="button"
      className={`group w-full text-left ${className}`}
      onClick={() => ctx.setIsOpen(!ctx.isOpen)}
      aria-expanded={ctx.isOpen}
      data-state={ctx.isOpen ? "open" : "closed"}
    >
      {children}
    </button>
  );
}

export function AccordionContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ctx = useContext(ItemCtx);
  if (!ctx) return null;
  const outerRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    if (ctx.isOpen) {
      // Force layout calculation before measuring
      el.style.maxHeight = 'none';
      const height = el.scrollHeight;
      el.style.maxHeight = '';
      setMaxH(height);
    } else {
      setMaxH(0);
    }
  }, [ctx.isOpen, children]);

  return (
    <div
      ref={outerRef}
      style={{
        maxHeight: ctx.isOpen ? maxH : 0,
        opacity: ctx.isOpen ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 300ms ease, opacity 300ms ease",
      }}
      className={className}
      data-state={ctx.isOpen ? "open" : "closed"}
    >
      {children}
    </div>
  );
}

export default Accordion;


