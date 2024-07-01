import { createSlice } from "@reduxjs/toolkit"; 


const countSlice = createSlice({
    name: "counterCrat",

    initialState : [],
    reducers :{
        addCountcrat : (state , action) => {

            state.push(action.payload);
        }
    }
})

export const { addCountcrat} = countSlice.actions;
export default countSlice.reducer 