import React, { ComponentProps } from "react";
import { Toaster, toast } from "sonner";
import Button from "../Button/Button";

type SonnerProps = ComponentProps<typeof Toaster>;

const Sonner: React.FC<SonnerProps> = () => {
  const handleClick = () => {
    toast("Sooooonner");
  };
  return (
    <>
      <Button onClick={handleClick}>Click me</Button>
      <Toaster />
    </>
  );
};

export default Sonner;
