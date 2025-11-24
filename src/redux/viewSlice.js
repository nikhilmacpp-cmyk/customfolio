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
        aboutMeSection: { 'designation': '', 'experienceAndIntrest': '', 'expertise': '', 'expertiseAndInterest': '', 'aboutYourRole': '' },
        resume: null,
        skills: [
            { name: "", level: "", category: "" }, // default first row
        ]
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
        },
        setResume: (state, action) => {
            state.resume = action.payload;
        },
        setSkills: (state, action) => {
            state.skills = action.payload;
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
    setAboutMeSection,
    setResume,
    setSkills
} = viewSlice?.actions;
export default viewSlice.reducer;