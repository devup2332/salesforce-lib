import DropdownMenuDemo from "@/components/DropDownMenu/DropDownMenu";
import withColorSchema from "@/decorators/withColorSchema";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<"div">;

const meta: Meta<StoryProps> = {
  title: "Dropdown",
  component: DropdownMenuDemo,
  tags: ["dropdown"],
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};
