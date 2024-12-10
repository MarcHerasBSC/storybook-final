import type { Meta, StoryObj } from '@storybook/react';

import MapControls from './MapControlsBar/MapControls';
import './MapControlsBar/MapControls.module.css';
import { fn } from '@storybook/test';

const meta = {
    title: 'vCity/MapControls',
    component: MapControls,
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
    args: {
      setLegend: fn(),
      showLegend: false,
      setValue: fn(),
      valueControl: [50]
    },
  } satisfies Meta<typeof MapControls>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

export const MapControlsDefault: Story = {
  args: {
    showLegend: false,
    valueControl: [50]
  }
};

export const MapControlsLegend: Story = {
  args: {
    showLegend: true,
    valueControl: [50]
  }
};

export const MapControlsMinValue: Story = {
  args: {
    showLegend: false,
    valueControl: [0]
  }
};

export const MapControlsMaxValue: Story = {
  args: {
    showLegend: false,
    valueControl: [100]
  }
};

