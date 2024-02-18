import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: []
    },
    reducers: {
        getProduct: async (state) => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                console.log(res.data)
                state.data.push(res.data)
            } catch (e) {
                console.log(e)
            }

        },
        sendProduct: async (action) => {

            try {
                const res = await axios.post('https://jsonplaceholder.typicode.com/posts', action.payload)
                console.log(res.data)

            } catch (e) {
                console.log(e)
            }
        }
    }
})

export const { getProduct, sendProduct } = productSlice.actions

export default productSlice.reducer