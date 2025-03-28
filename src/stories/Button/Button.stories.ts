import { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button/Button";
import withColorSchema from "@/decorators/withColorSchema";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  title: "Button",
  component: Button,
  tags: ["button"],
  argTypes: {
    variant: {
      options: ["filled", "outlined", "icon"],
      control: { type: "select" },
    },
  },
  args: {
    variant: "filled",
  },
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Filled: Story = {
  args: {
    variant: "filled",
    children: "Filled",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined",
  },
};
export const Icon: Story = {
  args: {
    variant: "icon",
    children: "🚀",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};
