import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name:'user',
    initialState: null,
    reducers:{
        addUser: (state, action)=>{
            //adding user in store
            return action.payload;
        },

        removeUser: (state,action)=>{
            //removing user from store 
            return null;
        }
    }
});

export default userSlice.reducer;
export const {addUser, removeUser} = userSlice.actions;