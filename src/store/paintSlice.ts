import { createSlice } from "@reduxjs/toolkit";
import { data } from "../mock/mockData"
import { IPaintData } from "../types/types"

interface PaintState {
    value: IPaintData[];
}

const initialState: PaintState = {
    value: data
}

const paintSlice = createSlice({
    name: 'paint',
    initialState,
    reducers: {
        // addToCart: (state, payload) => {
          
        // }
    }
})

// export const {addToCart} = paintSlice.actions;
export default paintSlice.reducer;