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

export const TopBarDefault: Story = {
  args: {
    useCase: "Ciclabilidad",
    pages: [{id: 0, name:"Análisis"}, {id: 1, name:"Estrategia"}, {id: 2, name:"Escenario"}],
    currentPageIndex: 3
  }
};

export const TopBarFirstPage: Story = {
  args: {
    useCase: "Ciclabilidad",
    pages: [{id: 0, name:"Análisis"}, {id: 1, name:"Estrategia"}, {id: 2, name:"Escenario"}],
    currentPageIndex: 1
  }
};

export const TopBarSecondPage: Story = {
  args: {
    useCase: "Ciclabilidad",
    pages: [{id: 0, name:"Análisis"}, {id: 1, name:"Estrategia"}, {id: 2, name:"Escenario"}],
    currentPageIndex: 2
  }
};

export const TopBarTwoPages: Story = {
  args: {
    useCase: "Ciclabilidad",
    pages: [{id: 0, name:"Análisis"}, {id: 2, name:"Escenario"}],
    currentPageIndex: 1
  }
};

export const TopBarDifferentUseCase: Story = {
  args: {
    useCase: "Caso de Uso 2",
    pages: [{id: 0, name:"Análisis"}, {id: 1, name:"Estrategia"}, {id: 2, name:"Escenario"}],
    currentPageIndex: 2
  }
};

