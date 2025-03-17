import Sonner from "@/components/Sonner/Sonner";
import withColorSchema from "@/decorators/withColorSchema";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Sonner>;

const meta: Meta<StoryProps> = {
  title: "Sonner",
  component: Sonner,
  tags: ["sonner"],
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};
