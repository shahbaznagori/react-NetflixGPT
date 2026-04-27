import {createSlice} from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGPTSearch:false
    },
    reducers:{
        toggleGPTSearchView:(state, action)=>{
            state.showGPTSearch = !action.payload

        },
    }
})

export const {toggleGPTSearchView} = gptSlice.actions;
export default gptSlice.reducer;