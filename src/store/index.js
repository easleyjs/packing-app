import { configureStore }  from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import containerReducer from './container-slice';

const store = configureStore({
    reducer: { 
        counter: counterReducer, 
        containers: containerReducer 
    }
});

export default store;