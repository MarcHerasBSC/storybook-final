
import React from "react";
import { Theme } from "@radix-ui/themes";

export const RadixThemeComponent = (Story) => (
    <Theme accentColor="blue">
      <Story />
    </Theme>
  );