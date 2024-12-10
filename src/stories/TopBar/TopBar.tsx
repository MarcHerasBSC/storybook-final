import React from 'react'
import styles from './TopBar.module.css'
import { Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'

export default function TopBar() {
  return (
    <Flex display="flex" direction="row" py="2" className={styles.barContainer}>
      <Text mx="2">Nueva simulación - Ciclabilidad</Text>
      <Image alt="Icono ciclovías" src="/icons/Bicicle.svg" width={25} height={25} />
    </Flex>
  )
}
