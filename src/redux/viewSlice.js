import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
    name: "view",
    initialState: {
        // default value
        activeView: 'form',
        firstName: '',
        middleName: '',
        lastName: '',
        tagLine: '',
        isShowMyWork: false,
        designation: '',
        aboutMeSection: { 'designation': '', 'experienceAndIntrest': '','expertise':'','expertiseAndInterest':'','aboutYourRole':'' }
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
        setTagLine: (state, action) => {
            state.tagLine = action.payload;
        },
        setIsShowMyWork: (state, action) => {
            state.isShowMyWork = action.payload;
        },
        setAboutMeSection: (state, action) => {
            state.aboutMeSection = action.payload;
        }
    }
})

export const {
    setActiveView,
    setFirstName,
    setMiddleName,
    setLastName,
    setTagLine,
    setIsShowMyWork,
    setAboutMeSection
} = viewSlice?.actions;
export default viewSlice.reducer;