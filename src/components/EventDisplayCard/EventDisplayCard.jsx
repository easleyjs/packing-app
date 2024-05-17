import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { deleteEvent, queryClient } from '../../util/http'
import { Grid, Text, Paper, Button } from '@mantine/core'

export default function EventDisplayCard ( { evt } ) {
  const { name, description, id } = evt
  const { mutate } = useMutation( {
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries( { queryKey: ['events'] } )
    }
  } )

  const eventSelectHandler = ( event, id ) => {
    event.preventDefault()
    alert( 'im a test event - new' )
    // dispatch app slice update with selected id
    // get data/containers for that event
    // redirect to Containers page
  }

  const handleRemoveEvent = ( event, id ) => {
    event.stopPropagation()
    mutate( { id } )
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
                    onClick={( e ) => handleRemoveEvent( e, id ) }
                  >Remove
                  </Button>
              </Grid.Col>
          </Grid>
      </Paper>
  )
}
