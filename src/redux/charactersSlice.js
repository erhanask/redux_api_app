import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

export const fetchCaracters = createAsyncThunk('characters/getCharacters', async (page) => {
    const res = await axios(`https://breakingbadapi.com/api/characters?limit=12&offset=${12*page}`)
    return res.data
})

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        items: [],
        status: 'idle',
        error: '',
        page: 0,
        hasNextPage: true
    },
    reducers: {},
    extraReducers: {
        [fetchCaracters.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items = [...state.items,...action.payload];
            state.page += 1 ;

            if (action.payload.length < 12) {
                state.hasNextPage = false
            }

        },
        [fetchCaracters.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchCaracters.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
})

export default charactersSlice.reducer;
