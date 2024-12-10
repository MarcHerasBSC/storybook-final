import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './MapControls.module.css'
import "@radix-ui/themes/styles.css";
import { Crosshair2Icon, ListBulletIcon, MagnifyingGlassIcon, MinusCircledIcon, PlusCircledIcon } from '@radix-ui/react-icons'
import * as Slider from "@radix-ui/react-slider";
import { Flex, IconButton, Separator } from '@radix-ui/themes';

interface PropType {
  showLegend: boolean,
  setLegend:Dispatch<SetStateAction<boolean>>,
  valueControl:number[],
  setValue:Dispatch<SetStateAction<number[]>>
};

export default function MapControls({showLegend, setLegend, valueControl, setValue}:PropType) {
  const handleShowLegend = () => {
    setLegend(!showLegend);
  }

  function handleValueChange(value: number[]): void {
    setValue(value);
  }

  function increaseValue(): void {
    if(valueControl[0] < 95) setValue([valueControl[0]+5]);
    else setValue([100]);
  }

  function decreaseValue(): void {
    if(valueControl[0] > 5) setValue([valueControl[0]-5]);
    else setValue([0]);
  }

  function customSlider() {
    return (
    <Slider.Root 
        className={styles.sliderRoot} 
        value={valueControl} 
        defaultValue={[50]} 
        max={100} 
        step={5} 
        orientation="vertical"
        onValueChange={handleValueChange}>
        <Slider.Track className={styles.sliderTrack}>
            <Slider.Range className={styles.sliderRange} />
        </Slider.Track>
        <Slider.Thumb className={styles.sliderThumb} aria-label="Zoom"/>
    </Slider.Root>);
  }

  return (
    <div className={styles.controlsBox}>
      <IconButton color="blue">
          <MagnifyingGlassIcon width={18} height={18} />
      </IconButton>
      <Flex direction="column" className={styles.zoomingControls}>
          <IconButton size="2" color="blue">
              <Crosshair2Icon />
          </IconButton>
          <Separator mx="1" size="2" color="sky" />
          <IconButton size="2" color="blue" onClick={increaseValue}>
              <PlusCircledIcon />
          </IconButton>
          {customSlider()}
          <IconButton size="2" color="blue" onClick={decreaseValue}>
              <MinusCircledIcon />
          </IconButton>
        </Flex>
        <IconButton variant={showLegend ? "outline" : "solid"} color="blue" onClick={handleShowLegend}>
            <ListBulletIcon width={18} height={18}/>
        </IconButton>
    </div>
  )
}


