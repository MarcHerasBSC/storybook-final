import { Flex, Text } from '@radix-ui/themes'
import React from 'react'
import styles from './Legend.module.css'

export default function Legend() {
  interface PropType {
    color: string;
  }
  function CircleLegend({color}:PropType) {
    return(
        <div className={`${styles.circleLegend} ${styles[color]}`}/>
    );
  }
  return (
    <Flex display="flex" direction="row" justify="between" align="center" my="3" gap="4" className={styles.legendContainer}>
        <Flex display="flex" direction="column" gap="0" ml="6">
            <Flex direction="row" gap="2" align="center" justify="start" my="1">
                <CircleLegend color="transparent"/>
                <Text weight="bold" size="2" ml="3">Vías ciclables</Text>
            </Flex>
            <Flex direction="row" gap="2" align="center" justify="start" my="-1">
                <CircleLegend color="primaryBlue"/>
                <Text weight="light" size="2" ml="3">Carril bici acera segregada</Text>
            </Flex>
            <Flex direction="row" gap="2" align="center" justify="start">
                <CircleLegend color="aqua"/>
                <Text weight="light" size="2" ml="3">Carril bici proyectada DIBA</Text>
            </Flex>
            <Flex direction="row" gap="2" align="center" justify="start" my="-1">
                <CircleLegend color="gray"/>
                <Text weight="light" size="2" ml="3">Carril bici calzada segregada</Text>
            </Flex>
        </Flex>

        <Flex display="flex" direction="column" gap="0" mr="6">
        <Flex direction="row" gap="2" align="center" justify="start" my="1">
            <CircleLegend color="transparent"/>
            <Text weight="bold" size="2" ml="3">Vías acondicionadas</Text>
        </Flex>
        <Flex direction="row" gap="2" align="center" justify="start" my="-1">
            <CircleLegend color="cornflower"/>
            <Text weight="light" size="2" ml="3">Calle 30 km/h compartida</Text>
        </Flex>
        <Flex direction="row" gap="2" align="center" justify="start">
            <CircleLegend color="sky"/>
            <Text weight="light" size="2" ml="3">Zona peatonal</Text>
        </Flex>
        <Flex direction="row" gap="2" align="center" justify="start" my="-1">
            <CircleLegend color="slate"/>
            <Text weight="light" size="2" ml="3">Prioridad peatones</Text>
        </Flex>
        </Flex>
    </Flex>
  )
}
