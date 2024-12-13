import { Flex, IconButton, Separator, Text } from '@radix-ui/themes'
import React from 'react'
import styles from './Stepper.module.css'
import { CheckIcon } from '@radix-ui/react-icons'

interface StepType {
  id: number,
  name: string
}

interface PropType {
  steps: StepType[],
  currentStep: number
}

export default function Stepper({steps, currentStep}: PropType) {
  return (
    <Flex direction='row' align='center' justify="start" className={styles.stepperBg} pr="4">
      {steps.map((step, i) => { 
        return(
        <Flex key={"step-container-"+i} direction='row'  align='center' flexGrow={i === 0 ? "0" : "1"} flexShrink="1">
          {i === 0 ? null : <Separator mx="4" size="4"/>}
          <Flex direction="row" align="center" gap="2" width="fit-content">
            <IconButton variant={step.id+1 > currentStep ? "outline" : step.id+1 === currentStep ? "solid" : "soft"} radius="full" color="blue" size="3">
              {step.id+1 < currentStep ? <CheckIcon width={20} height={20}/> : <Text size="3" weight="bold">{step.id+1}</Text>}
            </IconButton>
            <Text size="2" weight={step.id+1 === currentStep ? "bold" : "regular"}>{step.name}</Text>
          </Flex>
        </Flex>
        )})
      }
    </Flex>
  )
}
