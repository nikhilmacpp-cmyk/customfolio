import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
    name: "view",
    initialState: {
        // default value
        activeView: 'form',
        firstName:'',
        middleName:'',
        aboutYou:''
    },
    reducers: {
        setActiveView: (state, action) => {
            state.activeView = action.payload;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setMiddleName: (state, action) => {
            state.middleName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setAboutYou: (state, action) => {
            state.aboutYou = action.payload;
        }
    }
})

export const {
    setActiveView,
    setFirstName,
    setMiddleName,
    setLastName,
    setAboutYou
} = viewSlice?.actions;
export default viewSlice.reducer;