import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { Box, Flex, Text } from '@radix-ui/themes'
import React from 'react'
import styles from './BottomBar.module.css'

export default function BottomBar() {
  return (
    <Flex className={styles.barContainer}>
        <Box className={styles.navButton}>
            <ArrowLeftIcon />
            <Text size="2">Previous</Text>
        </Box>
        <Box className={styles.navButton}>
            <Text size="2">Next</Text>
            <ArrowRightIcon />
        </Box>
    </Flex>
  )
}
