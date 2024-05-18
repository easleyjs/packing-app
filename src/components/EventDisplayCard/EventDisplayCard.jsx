import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { queryClient, deleteEvent } from '../../util/firebase.js'
import { Grid, Text, Paper, Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

export default function EventDisplayCard ( { evt } ) {
  const { name, description, id } = evt
  const navigate = useNavigate()
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
    // navigate( '/events/' )
  }

  const handleRemoveEvent = ( event, id ) => {
    event.stopPropagation()
    mutate( { id } )
  }

  return (
      <Paper
        p="sm"
        mt="sm"
        shadow="md"
        radius="md"
        key={id}
        w="40%"
        style={{ cursor: 'default' }}
        withBorder
        onClick={( e ) => eventSelectHandler( e, id )}
      >
          <Grid justify="space-between" align="baseline">
              <Grid.Col span="content">
                  <Text fw={500} size="md">{ name }</Text>
              </Grid.Col>
              <Grid.Col span="content">
                  <Text c="gray" size="sm">{ description }</Text>
              </Grid.Col>
              <Grid.Col span="content">
                  <Button
                    variant="outline"
                    color="black"
                    size="xs"
                    radius="xl"
                    onClick={( e ) => handleRemoveEvent( e, id ) }
                    mr="xs"
                  >Edit
                  </Button>
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
