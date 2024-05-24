import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../util/firebase';
import { Button, Center, Modal, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useStore } from '../../hook-store/store';

/*
add field validation later:
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
*/

export default function EventModal ( { opened, closeModal } ) {
  const state = useStore()[0];
  const { eventModalType, eventMutator } = state;

  const form = useForm( {
    mode: 'uncontrolled'
  } );

  let [ modalTitle, btnText ] = '';

  if ( eventModalType === 'add' ) {
    modalTitle = 'New Event';
    btnText = 'Add';
  }

  if ( eventModalType === 'edit' ) {
    modalTitle = 'Edit Event';
    btnText = 'Update';
  }

  const { mutate } = useMutation( {
    mutationFn: eventMutator, // mutateFunction,
    onSuccess: () => {
      queryClient.invalidateQueries( { queryKey: [ 'events' ] } );
    }
  } );

  const handleSubmit = ( values ) => {
    const docObj = { ...values };

    if ( eventModalType === 'edit' ) {
      docObj.id = state.currEvent.id;
    }

    mutate( { ...docObj } );
    form.reset();
    closeModal();
  };

  const handleErrors = ( validationErrors, values, event ) => {
    console.log(
      validationErrors,
      values,
      event
    );
  };

  const handleClose = () => {
    form.reset();
    closeModal();
  };
  return (
      <Modal opened={opened} onClose={handleClose} title={modalTitle}>
          <form onSubmit={ form.onSubmit( handleSubmit, handleErrors )}>
              <Stack
                align="left"
                justify="center"
                gap="lg"
                p={10}
              >
                  <TextInput
                    label="Name"
                    key={form.key( 'name' )}
                    {...form.getInputProps( 'name' )}
                    defaultValue={state.currEvent.name || ''}

                  />
                  <TextInput
                    label="Description"
                    key={form.key( 'description' )}
                    {...form.getInputProps( 'description' )}
                    defaultValue={state.currEvent.description || ''}
                  />
                  <Center mt={20}>
                      <Button variant="filled" size="sm" type="submit">{btnText}</Button>
                      <Button ml={5} variant="outline" size="sm" type="button" onClick={handleClose}>Cancel</Button>
                  </Center>
              </Stack>
          </form>
      </Modal>
  );
}
