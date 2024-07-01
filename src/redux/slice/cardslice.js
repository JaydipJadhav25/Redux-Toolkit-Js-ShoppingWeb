import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({

    name :"Cart",
    initialState : 0,
    reducers :{


        addItem :(state , action) => state+ action.payload //{
            // state.push([...state , action.payload]);
            
         
        //}
        

    }
})

export const{ addItem  , addCount} = cartSlice.actions
export default cartSlice.reducer