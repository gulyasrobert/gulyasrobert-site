"use client";

import { useReveal } from "@/lib/useReveal";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}

export default function RevealSection({
  children,
  className = "",
  id,
  as: Tag = "section",
}: RevealSectionProps) {
  const ref = useReveal();

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={className}
    >
      {children}
    </Tag>
  );
}
