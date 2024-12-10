import type { Meta, StoryObj } from '@storybook/react';

import TopBar from './TopBar/TopBar';
import './TopBar/TopBar.module.css';

const meta = {
    title: 'vCity/TopBar',
    component: TopBar,
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof TopBar>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

export const TopBarDefault: Story = {};

