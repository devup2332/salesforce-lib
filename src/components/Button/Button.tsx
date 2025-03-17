import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps, ReactNode } from "react";

const variants = cva(
  "px-4 py-2 rounded-md block w-fit flex items-center justify-center cursor-pointer transition-colors font-main",
  {
    variants: {
      variant: {
        filled: "bg-primary text-primary-100 px-4 py-2 hover:bg-primary-800",
        outlined:
          "border-primary-300 border-[1px] text-primary hover:bg-primary-100",
        icon: "p-2 hover:bg-primary-100",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof variants> {
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <button className={cn(variants({ variant }), className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
