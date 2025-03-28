import { DropdownMenu } from "@radix-ui/themes";
import Button from "../Button/Button";

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="outlined">Options</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="hidden bg-red-500">
        <DropdownMenu.Item>Option 1</DropdownMenu.Item>
        <DropdownMenu.Item>Option 2</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
