import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()

export async function fetchEvents ( { signal, searchTerm } ) {
  // console.log( searchTerm )
  // let url = 'http://localhost:3000/events'
  let url = 'https://packmatic-9e1d4-default-rtdb.firebaseio.com/events.json'

  if ( searchTerm ) {
    url += '?search=' + searchTerm
  }

  const response = await fetch( url, { signal } )

  if ( !response.ok ) {
    const error = new Error( 'An error occurred while fetching the events' )
    error.code = response.status
    error.info = await response.json()
    throw error
  }

  const fireBaseEvents = await response.json()
  const events = Object.keys( fireBaseEvents ).map( ( e ) => {
    return {
      id: e,
      ...fireBaseEvents[e].event
    }
  } )
  // console.log( 'Events:', events )
  return events
}

export async function createNewEvent ( eventData ) {
  /*
  const response = await fetch( 'http://localhost:3000/events', {
    method: 'POST',
    body: JSON.stringify( eventData ),
    headers: {
      'Content-Type': 'application/json'
    })
  */
  // do a PUT to
  // https://packmatic-9e1d4-default-rtdb.firebaseio.com/events.json
  // functions on firebase like lambda functions
  const response = await fetch( 'https://packmatic-9e1d4-default-rtdb.firebaseio.com/events.json',
    {
      method: 'POST',
      body: JSON.stringify( eventData ),
      headers: {
        'Content-Type': 'application/json'
      }
    } )
  // console.log( 'Data:', eventData )

  if ( !response.ok ) {
    const error = new Error( 'An error occurred while creating the event' )
    error.code = response.status
    error.info = await response.json()
    console.log( 'Error:', error.info )
    throw error
  }

  const { event } = await response.json()

  return event
}

export async function fetchSelectableImages ( { signal } ) {
  const response = await fetch( 'http://localhost:3000/events/images', { signal } )

  if ( !response.ok ) {
    const error = new Error( 'An error occurred while fetching the images' )
    error.code = response.status
    error.info = await response.json()
    throw error
  }

  const { images } = await response.json()

  return images
}

export async function fetchEvent ( { id, signal } ) {
  const response = await fetch( `http://localhost:3000/events/${id}`, { signal } )

  if ( !response.ok ) {
    const error = new Error( 'An error occurred while fetching the event' )
    error.code = response.status
    error.info = await response.json()
    throw error
  }

  const { event } = await response.json()

  return event
}

export async function deleteEvent ( { id } ) {
  // http://localhost:3000/events/
  const response = await fetch( `https://packmatic-9e1d4-default-rtdb.firebaseio.com/events/${id}.json`, {
    method: 'DELETE'
  } )

  if ( !response.ok ) {
    const error = new Error( 'An error occurred while deleting the event' )
    error.code = response.status
    error.info = await response.json()
    throw error
  }

  return response.json()
}

export async function updateEvent ( { id, event } ) {
  const response = await fetch( `http://localhost:3000/events/${id}`, {
    method: 'PUT',
    body: JSON.stringify( { event } ),
    headers: {
      'Content-Type': 'application/json'
    }
  } )

  if ( !response.ok ) {
    const error = new Error( 'An error occurred while updating the event' )
    error.code = response.status
    error.info = await response.json()
    throw error
  }

  return response.json()
}
