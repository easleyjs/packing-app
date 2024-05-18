import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { createNewEvent, fetchEvents, updateEvent } from '../util/firebase.js'
import { Link } from 'react-router-dom'
import { Button, Container, Stack, Text } from '@mantine/core'
// import store from '../store/index'
// import { eventActions } from '../store/event-slice.js'
import EventDisplayCard from '../components/EventDisplayCard/EventDisplayCard.jsx'
import EventModal from '../components/EventModal/EventModal.jsx'

function EventsPage () {
  const { data, isPending, isError, error } = useQuery( {
    queryKey: ['events'],
    queryFn: fetchEvents
  } )

  const [ shouldModalOpen, setShouldModalOpen ] = useState( false )
  const [ selectedModalType, setSelectedModalType ] = useState( null )
  const [ selectedMutateFunction, setSelectedMutateFunction] = useState( null )

  const handleModalOpen = ( modalType ) => {
    setSelectedModalType( () => {
      return modalType
    } )
    if ( modalType === 'add' ) {
      setSelectedMutateFunction( () => {
        return createNewEvent
      } )
    }
    if ( modalType === 'edit' ) {
      setSelectedMutateFunction( () => {
        return updateEvent
      } )
    }
    setShouldModalOpen( () => {
      return true
    } )
  }

  const handleModalClose = () => {
    setSelectedModalType( () => {
      return null
    } )
    setShouldModalOpen( () => {
      return false
    } )
  }

  // console.log( 'Data:', data )
  return (
      <>
          { data && data.length > 0
            ? <>
                <Text size="xl" mr="0.5rem" span>My Events</Text>
                <Button
                  variant="outline"
                  color="indigo"
                  size="compact-xs"
                  mb="0.35rem"
                  onClick={() => { handleModalOpen( 'add' ) }}
                >Add Event
                </Button>
                { data.map( ( e ) => {
                  return <EventDisplayCard
                            editModalHandler={handleModalOpen}
                            closeModalHandler={handleModalClose}
                            key={e.id}
                            evt={e}
                  />
                } )
                }
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
                    <h3>Why not <Button onClick={() => { handleModalOpen( 'add' ) }}>Add</Button> one?</h3>
                </Stack>
              </Container>
          }
          <EventModal
            modalType={ selectedModalType }
            opened={ shouldModalOpen }
            closeModal={ handleModalClose }
            mutateFunction={ selectedMutateFunction }
            selectedEvent
          />

      </>
  )
}

export default EventsPage
