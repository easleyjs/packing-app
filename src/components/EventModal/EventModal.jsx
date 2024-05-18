import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../util/firebase'
import { Button, Modal, Stack, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

/*
add field validation later:
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
*/
export default function EventModal ( { opened, closeModal, modalType, mutateFunction, children } ) {
  const form = useForm( {
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      description: ''
    }
  } )

  let [ modalTitle, btnText] = ''

  if ( modalType === 'add' ) {
    modalTitle = 'New Event'
    btnText = 'Add'
  }
  if ( modalType === 'edit' ) {
    modalTitle = 'Edit Event'
    btnText = 'Update'
  }
  const { mutate } = useMutation( {
    mutationFn: mutateFunction,
    onSuccess: () => {
      queryClient.invalidateQueries( { queryKey: ['events'] } )
      console.log( 'QueryData:', queryClient.getQueryData( { queryKey: ['events'] } ) )
    }
  } )

  const handleSubmit = ( values ) => {
    mutate( { ...values } )
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
                  />
                  <TextInput
                    label="Description"
                    key={form.key( 'description' )}
                    {...form.getInputProps( 'description' )}
                  />
                  <Button mt={10} variant="filled" size="md" type="submit">{btnText}</Button>
              </Stack>
          </form>
      </Modal>
  )
}
