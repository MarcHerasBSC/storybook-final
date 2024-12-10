import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import SideBar from './SideBar/SideBar';
import './TopBar/TopBar.module.css';

const meta = {
    title: 'vCity/SideBar',
    component: SideBar,
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
    args: {
      setHelpCheck: fn()
    }
  } satisfies Meta<typeof SideBar>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

export const SideBarDefault: Story = {};

