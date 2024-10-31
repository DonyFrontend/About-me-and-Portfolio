import { InitialState } from "@/app/store/config/store-schema";
import { createSlice } from "@reduxjs/toolkit";
import { homeDataTC } from "../service/home-data.service";
import { HomeSchema } from "../types/home-schema";

const initialState: InitialState<HomeSchema> = {
    isError: false,
    isLoading: false,
    data: [
        {
            id: '',
            gps: {
                en: '',
                ru: ''
            }
        },
        {
            description: {
                en: '',
                ru: ''
            },
            id: ''
        },
        {
            currentState: 0,
            id: '',
            now: {
                en: '',
                ru: ''
            },
            statets: []
        },
        {
            id: '',
            title: {
                en: '',
                ru: ''
            },
            TitleArray: []
        }
    ]
}

const homeSlice = createSlice({
    name: 'home/slice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(homeDataTC.pending, state => {
                state.isLoading = true;
            })
        builder
            .addCase(homeDataTC.rejected, state => {
                state.isError = true;
            })
        builder
            .addCase(homeDataTC.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
    },
})

export const { actions: homeActions } = homeSlice;
export const { reducer: homeReducer } = homeSlice;