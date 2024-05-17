import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { createNewEvent, queryClient } from '../../util/http'
import { Button, Modal, Stack, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

/*
add field validation later:
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
*/
export default function NewEventModal ( { opened, closeModal, children } ) {
  const form = useForm( {
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      description: ''
    }
  } )
  const { mutate } = useMutation( {
    mutationFn: createNewEvent,
    onSuccess: () => {
      queryClient.invalidateQueries( { queryKey: ['events'] } )
    }
  } )

  const handleSubmit = ( values ) => {
    mutate( { event: values } )
    form.reset()
    closeModal()
  }

  const handleErrors = ( validationErrors, values, event ) => {
    console.log(
      validationErrors,
      values,
      event
    )
  }

  const handleClose = () => {
    form.reset()
    closeModal()
  }

  return (
      <Modal opened={opened} onClose={handleClose} title="New Event">
          <Stack
            align="left"
            justify="center"
          >
              <form onSubmit={ form.onSubmit( handleSubmit, handleErrors )}>
                  <TextInput
                    label="Name"
                    key={form.key( 'name' )}
                    {...form.getInputProps( 'name' )}
                  />
                  <TextInput
                    label="Description"
                    key={form.key( 'description' )}
                    {...form.getInputProps( 'description' )}
                  />
                  <Button mt={10} variant="filled" size="md" type="submit">Create Event</Button>
              </form>
          </Stack>
      </Modal>
  )
}
