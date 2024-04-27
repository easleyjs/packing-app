import { Button, Center, Stack } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

// <h1>Events</h1>

function HomePage () {
  return (
      <>
          <Center py="10%">
              <Stack
                  h={180}
                  align="center"
                  justify="center"
                  gap={0}
              >
                  <h2>No Events here yet!</h2>
                  <h3>Why not <Button>Add</Button> one?</h3>
              </Stack>
          </Center>
      </>
  )
}

export default HomePage
