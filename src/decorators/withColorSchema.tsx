import { DecoratorFunction } from "storybook/internal/types";
import { Theme } from "@radix-ui/themes";

const withColorSchema: DecoratorFunction = (Story, context) => {
  const { scheme } = context.globals;
  document.documentElement.classList.add("htmlcontainer");

  if (scheme === "light") {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    return (
      <Theme>
        <Story />
      </Theme>
    );
  }

  if (scheme === "dark") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    return (
      <Theme className="h-fit">
        <Story />
      </Theme>
    );
  }
};

export default withColorSchema;
