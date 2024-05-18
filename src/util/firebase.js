import { QueryClient } from '@tanstack/react-query'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, addDoc, getDocs, deleteDoc } from 'firebase/firestore'

export const queryClient = new QueryClient()

const firebaseConfig = JSON.parse( import.meta.env.VITE_FIREBASE_CONFIG )

export async function fetchEvents ( { signal, searchTerm } ) {
  const app = initializeApp( firebaseConfig )

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore( app )

  const data = await getDocs( collection( db, 'events' ) )

  const events = data.docs.map( ( doc ) => {
    return {
      ...doc.data(),
      id: doc.id
    }
  } )

  return events
}

export async function createNewEvent ( eventData ) {
  // Initialize Cloud Firestore and get a reference to the service
  const app = initializeApp( firebaseConfig )

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore( app )

  try {
    const docRef = await addDoc( collection( db, 'events' ), eventData )
    // console.log( 'Document written with ID: ', docRef.id )
    return docRef
  } catch ( e ) {
    const error = new Error( 'An error occurred while creating the event' )
    error.info = e
    console.error( 'Error adding document: ', e )
    throw error
  }
}

export async function updateEvent ( id, eventData ) {

}

export async function deleteEvent ( { id } ) {
  // Initialize Cloud Firestore and get a reference to the service
  const app = initializeApp( firebaseConfig )

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore( app )

  try {
    const response = await deleteDoc( doc( db, 'events', id ) )
    return response
  } catch ( e ) {
    const error = new Error( 'An error occurred while deleting the event' )
    error.info = e
    console.error( 'Error deleting document: ', e )
    throw error
  }
}
