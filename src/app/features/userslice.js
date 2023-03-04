import {createSlice} from "@reduxjs/toolkit";

const initialState ={accessToken:"",user:{}}
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user =action.payload
        },
        setAccessToken:(state,action)=>{
            state.accessToken =action.payload
        }
    }
})
export const {setUser,setAccessToken}= userSlice.actions
export default userSlice.reducer