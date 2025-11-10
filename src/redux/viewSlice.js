import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
    name: "view",
    initialState: {
        // default value
        activeView: 'form',
    },
    reducers: {
        setActiveView: (state, action) => {
            state.activeView = action.payload;
        }
    }
})

export const {
    setActiveView
} = viewSlice?.actions;
export default viewSlice.reducer;