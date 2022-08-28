import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

export const fetchQuotes = createAsyncThunk('quotes/getQuotes', async (page) => {
    const res = await axios(`https://breakingbadapi.com/api/quotes`)
    return res.data
})

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
        items: [],
        status: 'idle',
        error: ''
    },
    reducers: {},
    extraReducers: {
        [fetchQuotes.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        },
        [fetchQuotes.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchQuotes.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
})

export const quotesSelector = state => state.quotes.items;
export const statusSelector = state => state.quotes.status;
export const errorSelector = state => state.quotes.error;

export default quotesSlice.reducer;
