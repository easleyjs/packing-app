import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../util/firebase.js';
import { Link } from 'react-router-dom';
import { Button, Container, Stack, Text } from '@mantine/core';
import { useStore } from '../hook-store/store';

import EventDisplayCard from '../components/EventDisplayCard/EventDisplayCard.jsx';
import EventModal from '../components/EventModal/EventModal.jsx';
import EventRemoveModal from '../components/EventRemoveModal/EventRemoveModal.jsx';

function EventsPage () {
  const dispatch = useStore( false )[1];

  const { data, isPending, isError, error } = useQuery( {
    queryKey: [ 'events' ],
    queryFn: fetchEvents
  } );

  const [ shouldEventModalOpen, setShouldEventModalOpen ] = useState( false );
  const [ shouldRemoveModalOpen, setShouldRemoveModalOpen ] = useState( false );

  const handleModalOpen = ( modalType ) => {
    dispatch( 'SET_EVENT_MODAL_TYPE', modalType );
    if ( modalType === 'remove' ) {
      setShouldRemoveModalOpen( () => {
        return true;
      } );
    } else {
      setShouldEventModalOpen( () => {
        return true;
      } );
    }
  };

  const handleModalClose = ( modalType ) => {
    if ( modalType === 'remove' ) {
      setShouldRemoveModalOpen( () => {
        return false;
      } );
    } else {
      dispatch( 'SET_CURR_EVENT', {} );
      setShouldEventModalOpen( () => {
        return false;
      } );
    }
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
                            eventModalHandler={handleModalOpen}
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
            opened={ shouldEventModalOpen }
            closeModal={ handleModalClose }
          />
          <EventRemoveModal
            opened={ shouldRemoveModalOpen }
            closeModal={ handleModalClose }
          />
      </>
  );
}

export default EventsPage;
