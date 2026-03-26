"use client";

import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe the element itself and all children with reveal/stagger class
    const targets = el.querySelectorAll(".reveal, .stagger");
    targets.forEach((t) => observer.observe(t));
    if (el.classList.contains("reveal") || el.classList.contains("stagger")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
