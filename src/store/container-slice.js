import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    containerList: [
        { id: 9823,
          name: 'Some Box',
          description: 'A Box with a lot of stickers on it'
        }
    ],
};

const containerSlice = createSlice({
    name: 'containers',
    initialState,
    reducers: {
        add(state, action) {
            console.log('Recieved:', action.payload);
            action.payload.id = Math.round( Math.random() * 1000 );
            state.containerList.push(action.payload);
        },
        remove(state, action) {
            // delete container [action.id]
            delete state.containers[action.id];
        },
        update(state, action) {
            // replace existing container entry with updated entry
            state.containers = state.counter + action.container;
        }
    }
})

export const containerActions = containerSlice.actions;
export default containerSlice.reducer;