import {createSlice} from "@reduxjs/toolkit"

const configSlice = createSlice({
    name:"config",
    initialState: {
        language:"English"
    },
    reducers:{
        changeLanguage:(state,action)=>{state.language=action.payload}
    }
})


export default configSlice.reducer
export const {changeLanguage} = configSlice.actions;
