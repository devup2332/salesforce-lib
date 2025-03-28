import { cn } from "@/utils/cn";
import React, { ComponentProps, JSX } from "react";
import "./Input.styles.css";

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
    <div className={cn("input--container", className)}>
      <input className={cn("input--field", inputClassName)} {...props} />
      {Icon && Icon}
    </div>
  );
};

export default Input;
