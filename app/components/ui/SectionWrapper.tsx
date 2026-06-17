"use client";

import { useScrollAnimation } from "../../hooks/useScrollAnimation";

type SectionWrapperProps = {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
  reversed?: boolean;
};

export default function SectionWrapper({
  id,
  label,
  title,
  children,
  reversed = false,
}: SectionWrapperProps) {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 px-6 ${reversed ? "bg-primary text-white" : "bg-white"}`}
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <p className="label mb-2">{label}</p>
        <h2 className="mb-12">{title}</h2>
        {children}
      </div>
    </section>
  );
}
