import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";
import "./Button.styles.css";

type Variant = "icon" | "outlined" | "filled" | "ghost";

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  icon: "button--icon",
  outlined: "button--outlined",
  filled: "button--filled",
  ghost: "button--ghost",
};

const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  className,
  children,
  ...props
}) => {
  return (
    <button className={cn(variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
