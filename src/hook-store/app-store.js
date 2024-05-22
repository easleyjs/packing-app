import { initStore } from './store';
import { createNewEvent, updateEvent } from '../util/firebase.js';

const configureStore = () => {
  const actions = {
    SET_CURR_EVENT: ( currState, currEvent ) => {
      return { currEvent: { ...currEvent } };
    },
    SET_EVENT_MODAL_TYPE: ( currState, eventModalType ) => {
      let eventMutator;
      if ( eventModalType === 'add' ) {
        eventMutator = createNewEvent;
      }
      if ( eventModalType === 'edit' ) {
        eventMutator = updateEvent;
      }
      return {
        ...currState,
        eventModalType,
        eventMutator
      };
    }
  };
  // name: 'test
  initStore( actions, {
    currEvent: {},
    eventModalType: '',
    eventMutator: null
  } );
};

export default configureStore;
