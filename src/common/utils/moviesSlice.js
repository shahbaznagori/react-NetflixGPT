import {createSlice} from "@reduxjs/toolkit"

const movieSlice = createSlice({
   name:"movies",
   initialState : {
    nowPlayingMovies:null
   },
   reducers:{
       addNowPlayingMovies:(state ,action)=>{
           state.nowPlayingMovies = action.payload
       },
       addTrailerVedio:(state, action)=>{
          state.trailerVedio = action.payload;
       },
       removeMovie:(state, action)=>{
           return state = []
       }
   
   }
}) 

export const {addNowPlayingMovies, removeMovie ,addTrailerVedio} = movieSlice.actions;
export default movieSlice.reducer;