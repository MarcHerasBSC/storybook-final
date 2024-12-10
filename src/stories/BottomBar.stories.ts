import type { Meta, StoryObj } from '@storybook/react';

import BottomBar from './BottomBar/BottomBar';
import './BottomBar/BottomBar.module.css';

const meta = {
    title: 'vCity/BottomBar',
    component: BottomBar,
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof BottomBar>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

export const BottomBarDefault: Story = {};

