import { createSlice } from "@reduxjs/toolkit";


const intialValue = {
    value: 0,
};


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {}
})