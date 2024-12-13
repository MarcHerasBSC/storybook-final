import type { Meta, StoryObj } from '@storybook/react';

import DataPanel from './DataPanel/DataPanel';
import './DataPanel/DataPanel.module.css';
import { fn } from '@storybook/test';

const meta = {
    title: 'vCity/DataPanel',
    component: DataPanel,
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
    args: {
      setCheckboxGroupValue: fn()
    },
  } satisfies Meta<typeof DataPanel>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

export const DataPanelDefault: Story = {
  args: {
    layers: [{id: 0, name:"Edificios"}, {id: 1, name:"Calles"}, {id: 2, name:"Carriles"}, {id: 3, name:"Carreteras"}],
    setCheckboxGroupValue: fn()
  }
};

export const DataPanel2MoreLayers: Story = {
  args: {
    layers: [{id: 0, name:"Edificios"}, {id: 1, name:"Calles"}, {id: 2, name:"Carriles"}, {id: 3, name:"Carreteras"}, {id: 4, name:"Extra Layer 1"}, {id: 5, name:"Extra Layer 2"}],
    setCheckboxGroupValue: fn()
  }
};

