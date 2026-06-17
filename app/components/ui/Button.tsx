import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md";
  reversed?: boolean;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

const variantStyles = {
  primary:          "bg-primary text-white hover:opacity-80",
  primaryReversed:  "bg-white text-primary hover:opacity-80",
  secondary:        "border border-primary text-primary hover:bg-primary hover:text-white",
  secondaryReversed:"border border-white text-white hover:bg-white hover:text-primary",
  accent:           "border border-accent text-accent hover:bg-accent hover:text-white",
  accentReversed:   "border border-white text-white hover:bg-white hover:text-accent",
};

const sizeStyles = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-8 py-3",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  reversed = false,
  href,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const variantKey = `${variant}${reversed ? "Reversed" : ""}` as keyof typeof variantStyles;

  const baseStyles = `
    links inline-flex items-center justify-center rounded-2xl
    tracking-widest transition-all duration-200 cursor-pointer
    ${sizeStyles[size]}
    ${variantStyles[variantKey]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}
