import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './DataPanel.module.css'
import { Box, Button, CheckboxGroup, Dialog, Flex, IconButton, Select, Separator, Tabs, Text, TextField, VisuallyHidden } from '@radix-ui/themes'
import Image from 'next/image'
import { BarChartIcon, DownloadIcon, EyeOpenIcon, GlobeIcon, LayersIcon, LockClosedIcon, LockOpen1Icon, Pencil1Icon, PlusIcon } from '@radix-ui/react-icons'

interface PropType {
  setCheckboxGroupValue: Dispatch<SetStateAction<string[]>>
}

export default function DataPanel({setCheckboxGroupValue}:PropType) {
  const handlePointerDownOutside = (event:any) => { event.preventDefault(); };

  function handleValueChange(value: string[]): void {
    setCheckboxGroupValue(value);
  }

  return (
    <div className={styles.dataPanelContainer}>
      <Tabs.Root defaultValue="impacto">
        <Tabs.List justify="center">
          <Tabs.Trigger value="impacto" style={{width:'50%'}}>
            <BarChartIcon color="var(--vCity-primary-blue)" width={14} height={14}/>
            <Text color="blue" ml="2">Impacto</Text>
            </Tabs.Trigger>
          <Tabs.Trigger value="capas" style={{width:'50%'}}>
            <LayersIcon color="var(--vCity-primary-blue)" width={14} height={14}/>
            <Text color="blue" ml="2">Capas</Text>
          </Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Tabs.Content value="impacto">
            <Flex direction="column" mx="6" my="3">
              <Text size="3" weight="bold" color="blue">Access and update your documents.</Text>
            </Flex>
          </Tabs.Content>

          <Tabs.Content value="capas">
            <Flex direction="column" mx="6" mt="3" mb="6">
            <CheckboxGroup.Root defaultValue={["1"]} name="example" onValueChange={handleValueChange}>
              <CheckboxGroup.Item value="1">
                <Flex gap="1"><Text mr="3" color="blue">Edificios</Text><EyeOpenIcon/><Pencil1Icon/><DownloadIcon/></Flex>
                <Text size="1" color="gray">3 edits</Text>
              </CheckboxGroup.Item>
              <Separator size="4" my="3"/>
              <CheckboxGroup.Item value="2">
                <Flex gap="1"><Text mr="3" color="blue">Calles</Text><EyeOpenIcon/><Pencil1Icon/><DownloadIcon/></Flex>
                <Text size="1" color="gray">0 edits</Text>
              </CheckboxGroup.Item>
              <Separator size="4" my="3"/>
              <CheckboxGroup.Item value="3">
                <Flex gap="1"><Text mr="3" color="blue">Carriles</Text><EyeOpenIcon/><Pencil1Icon/><DownloadIcon/></Flex>
                <Text size="1" color="gray">0 edits</Text>
              </CheckboxGroup.Item>
              <Separator size="4" my="3"/>
              <CheckboxGroup.Item value="4">
                <Flex gap="1"><Text mr="3" color="blue">Carreteras</Text><EyeOpenIcon/><Pencil1Icon/><DownloadIcon/></Flex>
                <Text size="1" color="gray">2 edits</Text>
              </CheckboxGroup.Item>
              <Separator size="4" my="3"/>
              <CheckboxGroup.Item value="5">
                <Flex gap="1"><Text mr="3" color="blue">Añadir capa</Text><EyeOpenIcon/><Pencil1Icon/><DownloadIcon/></Flex>
              </CheckboxGroup.Item>
            </CheckboxGroup.Root>
            </Flex>
          </Tabs.Content>
        </Box>
      </Tabs.Root>

      <Flex direction="row" justify="between" align="center" mx="6" className={styles.saveRow}>
        {saveDialog(handlePointerDownOutside)}
        {downloadDialog(handlePointerDownOutside)}
      </Flex>
    </div>
  )
}

function downloadDialog(handlePointerDownOutside: (event: any) => void) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="sky" radius="full">
          <DownloadIcon width={15} height={15} color="var(--vCity-primary-blue)" />
          <Text color="blue">Descargar</Text>
        </Button>
      </Dialog.Trigger>
      <Dialog.Content
        maxWidth="370px"
        maxHeight="530px"
        onPointerDownOutside={handlePointerDownOutside}
        onInteractOutside={handlePointerDownOutside}>
        <VisuallyHidden><Dialog.Title>Descargar</Dialog.Title></VisuallyHidden>
        <Flex direction="column" mx="2" gap="6" style={{ color: 'var(--vCity-primary-blue)' }}>

          <Flex my="2" gap="2" align="center">
            <DownloadIcon /><Text size="3" weight="medium">Descargar</Text>
          </Flex>

          <Box maxWidth="100%">
            <TextField.Root size="2" placeholder="Nombre del documento" />
          </Box>

          <Flex direction="column" gap="2">
            <Text size="2" weight="regular" color="blue">Formato</Text>
            <Select.Root defaultValue='pdf'>
              <Select.Trigger />
              <Select.Content>
                <Select.Item value='pdf'>PDF</Select.Item>
                <Select.Item value='png'>PNG</Select.Item>
                <Select.Item value='jpg'>JPG</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Flex direction="column" gap="2">
            <Text size="2" weight="regular" color="blue">Carpeta</Text>
            <Select.Root defaultValue='escritorio'>
              <Select.Trigger />
              <Select.Content>
                <Select.Item value='escritorio'>Escritorio</Select.Item>
                <Select.Item value='descargas'>Descargas</Select.Item>
                <Select.Item value='documentos'>Documentos</Select.Item>
                <Select.Item value='buscar'>Otros...</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Flex direction="column" gap="2">
            <Text size="2" weight="regular" color="blue">Capas</Text>
            <Select.Root defaultValue='cicloviasNuevas'>
              <Select.Trigger />
              <Select.Content>
                <Select.Item value='cicloviasNuevas'>Ciclovías nuevas</Select.Item>
                <Select.Item value='edificios'>Edificios</Select.Item>
                <Select.Item value='cicloviasNuevas_edificios'>Ciclovías nuevas + edificios</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Flex direction="row" align="center" justify="between" mb="3">
            <Dialog.Trigger>
              <Button size="2" variant="outline" color="gray" style={{ width: "42.5%", cursor: "pointer" }}>Cancelar</Button>
            </Dialog.Trigger>
            <Dialog.Trigger>
              <Button size="2" variant="solid" style={{ backgroundColor: 'var(--vCity-primary-blue)', color: "white", width: "42.5%", cursor: "pointer" }}>Guardar</Button>
            </Dialog.Trigger>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>)
}

function saveDialog(handlePointerDownOutside: (event: any) => void) {
  return (
    <Dialog.Root>
      <Dialog.Trigger><Button color="sky" radius="full">
        <Image src='/icons/SaveIcon.svg' alt='icono guardar' width={15} height={15} />
        <Text color="blue">Guardar</Text>
      </Button>
      </Dialog.Trigger>
      <Dialog.Content
        maxWidth="370px"
        maxHeight="360px"
        onPointerDownOutside={handlePointerDownOutside}
        onInteractOutside={handlePointerDownOutside}>
        <VisuallyHidden><Dialog.Title>Guardar</Dialog.Title></VisuallyHidden>
        <Flex direction="column" mx="2" gap="6" style={{ color: 'var(--vCity-primary-blue)' }}>
          <Flex my="2" gap="2" align="center">
            <Image src='/icons/SaveIcon.svg' alt='igono guardar' width={15} height={15} /><Text size="3" weight="medium">Guardar</Text>
          </Flex>
          <Flex direction="column" gap="2">
            <Box maxWidth="100%">
              <TextField.Root size="2" placeholder="Nombre nueva simulación" />
            </Box>
            <Flex direction="row" gap="2">
              <Button variant="outline" size="1" color="gray"><Image alt="Icono ciclovías" src="/icons/Bicicle.svg" width={15} height={15} /> Ciclovías </Button>
              <IconButton variant="outline" size="1" color="gray"><PlusIcon /></IconButton>
            </Flex>
          </Flex>
          <Flex direction="row" justify="between" align="center">
            <Text size="2">Estado de la simulación</Text>
            <Select.Root defaultValue='private'>
              <Select.Trigger />
              <Select.Content>
                <Select.Item value='private'><Flex direction="row" align="center" gap="1"><LockClosedIcon />Privado</Flex></Select.Item>
                <Select.Item value='restricted'><Flex direction="row" align="center" gap="1"><LockOpen1Icon />Restringido</Flex></Select.Item>
                <Select.Item value='public'><Flex direction="row" align="center" gap="1"><GlobeIcon />Público</Flex></Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <Flex direction="row" align="center" justify="between" mb="3">
            <Dialog.Trigger>
              <Button size="2" variant="outline" color="gray" style={{ width: "42.5%", cursor: "pointer" }}>Cancelar</Button>
            </Dialog.Trigger>
            <Dialog.Trigger>
              <Button size="2" variant="solid" style={{ backgroundColor: 'var(--vCity-primary-blue)', color: "white", width: "42.5%", cursor: "pointer" }}>Guardar</Button>
            </Dialog.Trigger>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>)
}
