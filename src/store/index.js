import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter-slice'
import eventReducer from './event-slice'
import containerReducer from './container-slice'

const store = configureStore( {
  reducer: {
    counter: counterReducer,
    events: eventReducer,
    containers: containerReducer
  }
} )

export default store
