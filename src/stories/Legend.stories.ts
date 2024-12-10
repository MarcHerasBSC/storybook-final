import type { Meta, StoryObj } from '@storybook/react';

import Legend from './Legend/Legend';
import './Legend/Legend.module.css';

const meta = {
    title: 'vCity/Legend',
    component: Legend,
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Legend>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

export const LegendDefault: Story = {};

