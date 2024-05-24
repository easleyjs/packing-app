import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { queryClient, deleteEvent } from '../../util/firebase.js';
import { Button, Center, Modal, Stack, Text } from '@mantine/core';
import { useStore } from '../../hook-store/store';

export default function EventRemoveModal ( props ) {
  const { opened, closeModal } = props;
  const [ state, dispatch ] = useStore();
  const { name, id } = state.currEvent;

  let [ modalTitle, btnText ] = '';
  modalTitle = 'Remove Event';
  btnText = 'Remove';

  const { mutate } = useMutation( {
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries( { queryKey: [ 'events' ] } );
    }
  } );

  const handleRemoveEvent = ( event ) => {
    event.stopPropagation();
    mutate( { id } );
    dispatch( 'SET_CURR_EVENT', {} );
    closeModal( 'remove' );
  };

  const handleClose = () => {
    // form.reset();
    closeModal( 'remove' );
  };

  return (
      <Modal
          opened={opened}
          onClose={handleClose}
          title={modalTitle}
      >
          <Center><Text>Are you sure you want to remove event:</Text></Center>
          <Center><Text fw={500}>"{ name }"</Text></Center>
          <Text>(This will remove all Containers and Items for this Event.)</Text>
          <Center mt={20}>
              <Button variant="filled" color="red" size="sm" type="button" onClick={handleRemoveEvent}>{ btnText }</Button>
              <Button ml={5} variant="outline" size="sm" type="button" onClick={handleClose}>Cancel</Button>
          </Center>

      </Modal>
  );
}
