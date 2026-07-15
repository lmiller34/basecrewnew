import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-flare text-night hover:bg-flare-hover shadow-[0_0_0_1px_rgba(255,107,53,0.25),0_8px_24px_-8px_rgba(255,107,53,0.55)]",
  secondary:
    "bg-surface-raised text-snow border border-border hover:border-mist/50 hover:bg-surface",
  ghost: "bg-transparent text-snow hover:bg-surface-raised",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-11 px-5 text-sm",
  lg: "h-[3.25rem] px-7 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
