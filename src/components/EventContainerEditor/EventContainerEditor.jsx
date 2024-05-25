import React from 'react';
import { Button, Text } from '@mantine/core';

export default function EventContainerEditor ( props ) {
  /*
          <h1>TEST</h1>
          <h2>Current event: { props.eventId }</h2>
  */
  const handleModalOpen = ( modalType ) => {

  };

  return (
      <>
          <Text size="xl" mr="0.5rem" span>Containers</Text>
          <Button
          variant="filled"
          color="indigo"
          size="compact-xs"
          mb="0.25rem"
          onClick={() => { handleModalOpen( 'add' ); }}
          >Add
          </Button>
      </>
  );
}
