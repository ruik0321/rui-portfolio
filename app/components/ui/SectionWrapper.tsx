"use client";

import { useScrollAnimation } from "../../hooks/useScrollAnimation";

type SectionWrapperProps = {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
  variant?: "white" | "muted" | "primary";
};

const variantStyles = {
  white: "bg-white",
  muted: "bg-primary/50",
  primary: "bg-primary text-white",
};

export default function SectionWrapper({
  id,
  label,
  title,
  children,
  variant = "white",
}: SectionWrapperProps) {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 px-6 ${variantStyles[variant]}`}
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
