import {createSlice} from '@reduxjs/toolkit'

export const readApiDataSlice = createSlice({
    name: 'readApiData',
    initialState: {
        userInfoData: {},
        keyInfoData: {},
        baseInfoData: [],
        eduInfoData: [],
        expInfoData: [],
        projInfoData: [],
        skillInfoData: [],
        achvmntInfoData: [],
        crtInfoData: [],
        introInfoData: [],
        testiInfoData: [],
        blogInfoData: []
    },
    reducers: {
        setUserInfoData: (state,action) => {
            state.userInfoData = action.payload;
        },
        setKeyInfoData: (state, action) => {
            state.keyInfoData = action.payload;
        },
        setBaseInfoData: (state, action) => {
            state.baseInfoData = action.payload;
        },
        setEduInfoData: (state, action) => {
            state.eduInfoData = action.payload;
        },
        setExpInfoData: (state, action) => {
            state.expInfoData = action.payload;
        },
        setProjInfoData: (state, action) => {
            state.projInfoData = action.payload;
        },
        setSkillInfoData: (state, action) => {
            state.skillInfoData = action.payload;
        },
        setAchvmntInfoData: (state, action) => {
            state.achvmntInfoData = action.payload;
        },
        setCrtInfoData: (state, action) => {
            state.crtInfoData = action.payload;
        },
        setIntroInfoData: (state, action) => {
            state.introInfoData = action.payload;
        },
        setTestiInfoData: (state, action) => {
            state.testiInfoData = action.payload;
        },
        setBlogInfoData: (state, action) => {
            state.blogInfoData = action.payload;
        },
    }
})

export const { 
    setUserInfoData,
    setKeyInfoData,
    setBaseInfoData,
    setEduInfoData,
    setExpInfoData,
    setProjInfoData,
    setSkillInfoData,
    setAchvmntInfoData,
    setCrtInfoData,
    setIntroInfoData,
    setTestiInfoData,
    setBlogInfoData
} = readApiDataSlice.actions;
export default readApiDataSlice.reducer;