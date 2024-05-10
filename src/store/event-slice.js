import { createSlice } from '@reduxjs/toolkit'
/*
{
  id: 9823,
  name: 'BM 2024',
  description: "It's not just a music festival!"
},
{
  id: 9824,
  name: 'Reggae Fest 2024',
  description: "It's a music festival!"
}

*/
const initialState = {
  eventList: [{
    id: 9824,
    name: 'Reggae Fest 2024',
    description: "It's a music festival!"
  }]
}

const eventSlice = createSlice( {
  name: 'events',
  initialState,
  reducers: {
    add ( state, action ) {
      console.log( 'Recieved:', action.payload )
      action.payload.id = Math.round( Math.random() * 1000 )
      state.eventList = [ ...state.eventList, action.payload ]
      // console.log( state.eventList )
    },
    remove ( state, action ) {
      // filter out provided action.ids
      state.eventList = state.eventList.filter( ( event ) => event.id !== action.payload.id )
      console.log( 'Removing container:', action.payload.id )
    },
    update ( state, action ) {
      // replace existing container entry with updated entry
      state.events = state.counter + action.event
    }
  }
} )

export const eventActions = eventSlice.actions
export default eventSlice.reducer
