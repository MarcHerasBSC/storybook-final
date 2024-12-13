import React, { useState } from 'react'
import styles from './TopBar.module.css'
import { Button, Flex, IconButton, Text, TextField } from '@radix-ui/themes'
import Image from 'next/image'
import Stepper from '../Stepper/Stepper';
import { Cross1Icon } from '@radix-ui/react-icons';

interface StepType {
  id: number,
  name: string
}

interface PropType {
  useCase: string,
  pages: StepType[],
  currentPageIndex: number
}

export default function TopBar({useCase, pages, currentPageIndex}: PropType) {
  const [simulationTitle, setSimulationTitle] = useState("");

  const handleTitleChange = (event: any) => {
    setSimulationTitle(event.target.value);
  }
  return (
    <Flex display="flex" direction="row" py="2" className={styles.barContainer} justify='between'>
      <Flex>
        <Flex px="3" ml="2" align="center" justify="between" className={styles.useCaseTag}>
          <Image alt="Icono ciclovías" src="/icons/Bicicle.svg" width={20} height={20} />
          <Text mx="1" my="-1" size="2" color='blue' weight='regular'>{useCase}</Text>
        </Flex>
        <TextField.Root 
          mx="4" 
          placeholder="Nuevo Escenario Sin Título" 
          className={styles.scenarioTitle}
          value={simulationTitle}
          onChange={handleTitleChange}>
        </TextField.Root>
      </Flex>
      <Flex mr="3" gap="2" align="center">
        <Stepper steps={pages} currentStep={currentPageIndex}/>
        <IconButton size="3" radius="full" variant="outline">
          <Cross1Icon width={'65%'} height={'65%'}/>
        </IconButton>
      </Flex>
    </Flex>
  )
}
