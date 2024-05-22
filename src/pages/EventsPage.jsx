import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../util/firebase.js';
import { Link } from 'react-router-dom';
import { Button, Container, Stack, Text } from '@mantine/core';
import { useStore } from '../hook-store/store';

import EventDisplayCard from '../components/EventDisplayCard/EventDisplayCard.jsx';
import EventModal from '../components/EventModal/EventModal.jsx';

function EventsPage () {
  const dispatch = useStore( false )[1];

  const { data, isPending, isError, error } = useQuery( {
    queryKey: [ 'events' ],
    queryFn: fetchEvents
  } );

  const [ shouldModalOpen, setShouldModalOpen ] = useState( false );

  const handleModalOpen = ( modalType, eventObj ) => {
    dispatch( 'SET_EVENT_MODAL_TYPE', modalType );
    setShouldModalOpen( () => {
      return true;
    } );
  };

  const handleModalClose = () => {
    dispatch( 'SET_CURR_EVENT', {} );
    setShouldModalOpen( () => {
      return false;
    } );
  };

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
                  onClick={() => { handleModalOpen( 'add' ); }}
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
                    <h3>Why not <Button onClick={() => { handleModalOpen( 'add' ); }}>Add</Button> one?</h3>
                </Stack>
              </Container>
          }
          <EventModal
            opened={ shouldModalOpen }
            closeModal={ handleModalClose }
          />

      </>
  );
}

export default EventsPage;
