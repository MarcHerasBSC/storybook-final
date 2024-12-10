
import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './SideBar.module.css'
import "@radix-ui/themes/styles.css";
import Image from 'next/image'
import { Button, Flex, IconButton, Separator, Switch, Text } from '@radix-ui/themes'
import { ListBulletIcon, PersonIcon, PlusIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons';

interface PropType {
  setHelpCheck: Dispatch<SetStateAction<boolean>>
}

export default function SideBar({setHelpCheck}:PropType) {
  const [minimizedBar, setMinimizedBar] = useState(false);

  function handleCheckedChange(checked: boolean): void {
    setHelpCheck(checked);
  }

  function handleMinimizeBar(): void {
    setMinimizedBar(!minimizedBar);
  }

  return (
    <div className={`${styles.sidebarBg} ${minimizedBar ? styles.minimizedSideBar : ""}`}>
      <Flex align='center' justify='center' className={styles.logoContainer}>
        <Image src={minimizedBar ? '/imgs/SmallVCityLogo.svg' : '/imgs/Logo_white3.svg'} alt='vCity' width={ minimizedBar ? 40 : 81 } height={19} onPointerDown={handleMinimizeBar}/>
        <Text size={minimizedBar ? "1" : "2"}>Viladecans</Text>
      </Flex>

      <Separator my="2" mx="4" size="4" color="sky" className={styles.customSeparator} />

      <Flex mt="7" direction="column" justify="between" height={"100%"}>
        <Flex direction="column" gap="3">
          <Button color="sky" className={styles.customNewSimulationButton}>
            <Flex width="100%" justify="start" align="center" gap="1">
              <PlusIcon width={18} height={18}/> 
              {minimizedBar ? null : <Text weight="regular">Nueva Simulación</Text>}
            </Flex>
          </Button>
          <Button color="blue" className={styles.customSideBarButton}>
            <Flex width="100%" justify="start" align="center" gap="1">
              <ListBulletIcon width={18} height={18}/> 
              {minimizedBar ? null : <Text weight="regular">Mis Simulaciones</Text>}
            </Flex>
          </Button>
          <Button color="blue" className={styles.customSideBarButton}>
            <Flex width="100%" justify="start" align="center" gap="1">
              <PersonIcon width={18} height={18}/> 
              {minimizedBar ? null : <Text weight="regular">Gestión de Usuarios</Text>}
            </Flex>
          </Button>
        </Flex>

        <Flex my="4" direction="column">
          <Flex display="flex" direction="row" align="center" justify="between">
            <Flex display="flex" direction="row" align="center" justify="start" gap="2">
              <QuestionMarkCircledIcon width={18} height={18} /> 
              {minimizedBar ? null : "Ayuda"}
            </Flex>
            {minimizedBar ? null : <Switch defaultChecked className={styles.customSwitch} onCheckedChange={handleCheckedChange}/>}
          </Flex>
          <Separator my="3" size="4" color="sky" className={styles.customSeparator}/>
          <Flex my="3" display="flex" direction="row" align="center" justify="center" gap="2">
            <IconButton color="sky" variant="outline" className={styles.white}>
              <PersonIcon width={18} height={18} />
            </IconButton>
            {minimizedBar ? null : "Judith Martinez"}
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}
