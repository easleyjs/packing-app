import { initStore } from './store';

const configureStore = () => {
  const actions = {
    SET_CURR_EVENT: ( currState, currEvent ) => {
      return { currEvent: { ...currEvent } };
    }
  };
  // name: 'test
  initStore( actions, {
    currEvent: {}
  } );
};

export default configureStore;
