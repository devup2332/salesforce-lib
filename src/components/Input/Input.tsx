import { cn } from "@/utils/cn";
import React, { ComponentProps, JSX } from "react";

interface InputProps extends ComponentProps<"input"> {
  Icon?: JSX.Element;
  inputClassName?: string;
}

const Input: React.FC<InputProps> = ({
  Icon,
  disabled,
  className,
  type,
  inputClassName,
  ...props
}) => {
  return (
    <div
      className={cn(
        "border-primary-200 border-1 py-2 px-4 rounded-md group w-md font-main flex h-[42px]",
        disabled && "cursor-not-allowed",
        className,
      )}
    >
      <input
        className={cn(
          "text-primary placeholder:text-primary-600 block w-full border-none font-main text-sm outline-none disabled:cursor-not-allowed",
          inputClassName,
        )}
        disabled={disabled}
        type={type}
        {...props}
      />
      {Icon && Icon}
    </div>
  );
};

export default Input;
