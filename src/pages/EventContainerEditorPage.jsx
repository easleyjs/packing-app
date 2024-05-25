import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchSingleEvent, queryClient } from '../util/firebase.js';
import { Anchor, Tabs, Text, rem } from '@mantine/core';
import { IconCube, IconList } from '@tabler/icons-react';
import { useStore } from '../hook-store/store';

import EventContainerEditor from '../components/EventContainerEditor/EventContainerEditor';

// needs:
/*
- useStore
- getContainersQuery (put in EventContainerEd)
*/

function EventContainerEditorPage () {
  const params = useParams();
  const [ state, dispatch ] = useStore();
  const iconStyle = { width: rem( 14 ), height: rem( 14 ) };

  const { data, isError, error } = useQuery( {
    queryKey: [ 'eventDetail' ],
    queryFn: ( { signal } ) => fetchSingleEvent( { signal, eventId: params.eventId } )
  } );
  console.log( data );

  return (
      <>
          <Anchor underline="never" size="xl" component={Link} to="../events">
              &lt; Back
          </Anchor>
          <Text size="lg" mt="1rem">{ data.name }</Text>
          <Tabs variant="outline" mt="1rem" defaultValue="containers">
              <Tabs.List>
                  <Tabs.Tab value="containers" leftSection={<IconCube style={iconStyle} />}>
                      Containers
                  </Tabs.Tab>
                  <Tabs.Tab value="list" leftSection={<IconList style={iconStyle} />}>
                      Item List
                  </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="containers" p={10}>
                  <EventContainerEditor eventId={params.eventId} />
              </Tabs.Panel>
              <Tabs.Panel value="list">
                  <h2>I&apos;m a list!</h2>
              </Tabs.Panel>
          </Tabs>
      </>
  );
}

export default EventContainerEditorPage;

export function loader ( { params } ) {
  console.log( params );
  return queryClient.fetchQuery( {
    queryKey: [ 'eventDetail', params.eventId ],
    queryFn: ( { signal } ) => fetchSingleEvent( { signal, eventId: params.eventId } )
  } );
}
