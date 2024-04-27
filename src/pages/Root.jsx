import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import { AppShell, Burger, Center, Skeleton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

function RootLayout () {
  const [opened, { toggle }] = useDisclosure()
  /*               <Group h="100%" px="md">
  <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                </Group>
  */

  return (
      <AppShell
        header={{ height: 60 }}
        footer={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
        aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: true, mobile: true } }}
        padding="sm"
      >
          <AppShell.Header>
              <MainNavigation />
          </AppShell.Header>
          <AppShell.Navbar p="md">
              Navbar
              {Array( 15 )
                .fill( 0 )
                .map( ( _, index ) => (
                    <Skeleton key={index} h={28} mt="sm" animate={false} />
                ) )}
          </AppShell.Navbar>
          <AppShell.Main>
              <Outlet />
          </AppShell.Main>
          <AppShell.Aside display={false} p="md">Aside</AppShell.Aside>
          <AppShell.Footer p="md"><Center>Created by easleyjs</Center></AppShell.Footer>
      </AppShell>
  )
}

export default RootLayout
