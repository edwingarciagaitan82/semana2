import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list : [ "Cat 1", "cat 2", "Cat 3"]
}

export const categoriesSlice = createSlice({
    name :"categories",
    initialState,
    reducers : {
        catUpdate : (state, action) =>{
            state.list = action.payload
            // return{
            // ...state,
            // list:  action.payload }
        }
    }
})

export const { catUpdate } = categoriesSlice.actions
export default categoriesSlice.reducer