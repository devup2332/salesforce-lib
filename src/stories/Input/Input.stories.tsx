import EmailIcon from "@/components/icons/EmailIcon";
import Input from "@/components/Input/Input";
import withColorSchema from "@/decorators/withColorSchema";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
  title: "Input",
  component: Input,
  tags: ["input"],
  argTypes: {
    placeholder: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Text: Story = {
  args: {
    placeholder: "Type something",
    disabled: false,
    Icon: <EmailIcon className="input--icon" />,
  },
};
