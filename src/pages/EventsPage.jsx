import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchEvents } from '../util/http.js'
import { Link } from 'react-router-dom'
import { Button, Container, Stack, Text } from '@mantine/core'
import store from '../store/index'
import { eventActions } from '../store/event-slice.js'
import EventDisplayCard from '../components/EventDisplayCard/EventDisplayCard.jsx'
import NewEventModal from '../components/NewEventModal/NewEventModal.jsx'

function EventsPage () {
  const { data, isPending, isError, error } = useQuery( {
    queryKey: ['events'],
    queryFn: fetchEvents
  } )

  const [ opened, setOpened ] = useState( false )

  const handleModalOpen = () => {
    setOpened( () => {
      return true
    } )
  }

  const handleModalClose = ( ) => {
    setOpened( () => {
      return false
    } )
  }

  const handleCreateEvent = ( eventDetails ) => {
    store.dispatch( eventActions.add( eventDetails ) )
  }

  console.log( data )
  return (
      <>
          <Text size="xl" mr="0.5rem" span>My Events</Text>
          { data && data.length > 0
            ? <>
                <Button variant="outline" color="indigo" size="compact-xs" mb="0.35rem" onClick={handleModalOpen}>Add Event</Button>
                { data.map( ( e ) => { return <EventDisplayCard key={e.id} evt={e} /> } ) }
              </>
            : <Container
                    mt="10%"
              >
                <Stack
                    h={180}
                    align="center"
                    justify="center"
                    gap={0}
                >
                    <h2>No Events here yet!</h2>
                    <h3>Why not <Button onClick={handleModalOpen}>Add</Button> one?</h3>
                </Stack>
              </Container>

          }
          <NewEventModal opened={opened} createEvent={handleCreateEvent} closeModal={handleModalClose} />
      </>
  )
}

export default EventsPage

export const eventLoader = async () => {
  const events = await store.getState().events.eventList

  // dispatch will go here THEN return containers eventually.

  return events
}
