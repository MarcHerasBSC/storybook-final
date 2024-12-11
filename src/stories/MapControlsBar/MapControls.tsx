import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './MapControls.module.css'
import "@radix-ui/themes/styles.css";
import { Crosshair2Icon, ListBulletIcon, MagnifyingGlassIcon, MinusCircledIcon, PlusCircledIcon } from '@radix-ui/react-icons'
import * as Slider from "@radix-ui/react-slider";
import { Flex, IconButton, Separator, TextField } from '@radix-ui/themes';
import Legend from '../Legend/Legend';

interface PropType {
  showLegend: boolean,
  setLegend:Dispatch<SetStateAction<boolean>>,
  valueControl:number[],
  setValue:Dispatch<SetStateAction<number[]>>
};

export default function MapControls({showLegend, setLegend, valueControl, setValue}:PropType) {
  const [showSearchBar, setSearchBar] = useState(false);
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

  function handleSearchBar(event: any): void {
    setSearchBar(!showSearchBar);
  }

  function handleSearchBarPointerDown(event:any): void {
    event.stopPropagation();
  }

  return (
    <div className={styles.controlsBox}>
      <IconButton variant={showSearchBar ? "outline" : "solid"} color="blue" onPointerDown={handleSearchBar} className={styles.searchButton}>
          <MagnifyingGlassIcon width={18} height={18} />
          {showSearchBar ? 
          <TextField.Root placeholder="Buscar…" size='2' className={styles.searchBar} onPointerDown={handleSearchBarPointerDown}>
          </TextField.Root> : null}
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


