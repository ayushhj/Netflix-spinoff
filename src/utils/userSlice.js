import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: null,
    reducers:{
        addUser:(state,action) =>{
            return action.payload;

        },
        removeUser:() => {
            return null;
        },
    }
})

export const {addUser,removeUser} = UserSlice.actions;

export default userSlice.reducer