import React, { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const variants = cva(
  "cursor-pointer text-sm transition-colors rounded-md transition-colors",
  {
    variants: {
      variant: {
        filled:
          "bg-gray-500 dark:bg-gray-50 dark:text-black dark:hover:bg-gray-300 px-4 py-3 text-white border-none hover:bg-gray-600",
        outlined:
          "bg-transparent px-4 py-3 border-[1px] border-gray-200 hover:bg-gray-200",
        icon: "bg-transparent rounded-full flex items-center justify-center hover:bg-gray-200 border-none p-4",
        ghost: "bg-transparent border-none hover:bg-gray-200 px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof variants> {}

const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  className,
  children,
  ...props
}) => {
  return (
    <button className={cn(variants({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
