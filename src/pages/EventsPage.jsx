import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchEvents } from '../util/http.js'
import { Link } from 'react-router-dom'
import { Button, Container, Stack, Text } from '@mantine/core'
// import store from '../store/index'
// import { eventActions } from '../store/event-slice.js'
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
          <NewEventModal opened={opened} closeModal={handleModalClose} />
      </>
  )
}

export default EventsPage
