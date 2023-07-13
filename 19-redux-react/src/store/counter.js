import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
    // Creating a Slice of our Global state
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            // Here, it seems you are allowed to mutate state. BUT NOT RECCOMENDED
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;