import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    name : "Campista",
    email : "correo@correo.com"
}



export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        addUser : (state, action) =>{
            const { name , email } = action.payload
            state.name = name
            state.email = email
        },
        changeEmail : (state, action) =>{
            state.email = action.payload
        },
        userUpdate : (state, action) =>{
            state.email = action.payload.email
            state.name = action.payload.name            
        } 
    } 
})



export const { addUser, changeEmail, userUpdate }  = userSlice.actions
export default userSlice.reducer