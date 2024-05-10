import React from 'react'
import { Grid, Text, Paper, Button } from '@mantine/core'

export default function EventDisplayCard ( { evt, removeEvent } ) {
  const { name, description, id } = evt
  // console.log( evt )

  const eventSelectHandler = ( event, id ) => {
    event.preventDefault()
    alert( 'im a test event - new' )
    // dispatch app slice update with selected id
    // get data/containers for that event
    // redirect to Containers page
  }

  const eventRemoveHandler = ( event, id ) => {
    event.stopPropagation()
    // dispatch event remove action
    removeEvent( id )
  }

  return (
      <Paper
        p="md"
        mt="sm"
        shadow="md"
        radius="md"
        key={id}
        w="40%"
        style={{ cursor: 'default' }}
        withBorder
        onClick={( e ) => eventSelectHandler( e, id )}
      >
          <Grid justify="space-between">
              <Grid.Col span="content">
                  <Text fw={500} size="md">{ name }</Text>
              </Grid.Col>
              <Grid.Col span="content">
                  <Text c="gray" size="sm">{ description }</Text>
              </Grid.Col>
              <Grid.Col span={2}>
                  <Button
                    variant="light"
                    color="red"
                    size="xs"
                    radius="xl"
                    onClick={( e ) => eventRemoveHandler( e, id ) }
                  >Remove
                  </Button>
              </Grid.Col>
          </Grid>
      </Paper>
  )
}
