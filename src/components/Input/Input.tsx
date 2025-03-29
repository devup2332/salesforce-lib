import { cn } from "@/utils/cn";
import {} from "class-variance-authority";
import React, { ComponentProps, JSX } from "react";

interface InputProps extends ComponentProps<"input"> {
  Icon?: JSX.Element;
  inputClassName?: string;
}

const Input: React.FC<InputProps> = ({
  Icon,
  className,
  inputClassName,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-md text-sm flex gap-4 justify-between h-10 outline-none border-[1px] border-gray-300 px-4 w-lg items-center",
        className,
      )}
    >
      <input
        className={cn(
          "placeholder:text-gray-500 h-full flex-1",
          inputClassName,
        )}
        {...props}
      />
      {Icon && Icon}
    </div>
  );
};

export default Input;
