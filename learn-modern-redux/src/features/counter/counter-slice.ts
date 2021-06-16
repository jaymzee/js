import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
}

// createSlice automates the work of writing action creators
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // immer allows state to be modified directly as it will replay
        // those changes to perform the usual immmutable state update

        // increment
        incremented(state) {
            state.value++;
        },

        // decrement
        decremented(state) {
            state.value--;
        },

        // reset
        reset(state) {
            state.value = 0;
        },

        added(state, action: PayloadAction<number>) {
            state.value += action.payload;
        }
    }
});

// counterSlice.actions is an object containing all of the action creators
// their names derive from the reducer names above
export const { incremented, decremented, reset, added } = counterSlice.actions;
export default counterSlice.reducer;
