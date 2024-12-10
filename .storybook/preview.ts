import React from "react";
import type { Preview } from "@storybook/react";

import { RadixThemeComponent } from "./RadixThemeComponent";

import '../src/styles/radixstyles.css';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    RadixThemeComponent
  ]
};

export default preview;