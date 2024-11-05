import { InitialState } from "@/app/store/config/store-schema";
import { createSlice } from "@reduxjs/toolkit";
import { IExperienceSchema } from "../types/experience-schema";
import { experienceTC } from "../service/experience.service";

const initialState: InitialState<IExperienceSchema> = {
    data: [],
    isError: false,
    isLoading: false
}

const experienceSlice = createSlice({
    name: 'experience/data',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(experienceTC.pending, state => {
            state.isLoading = true;
        })
        builder
        .addCase(experienceTC.rejected, state => {
            state.isError = true;
        })
        builder
        .addCase(experienceTC.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isError = false;
        })
    },
})

export const {reducer: experienceReducer} = experienceSlice;
export const {actions: experienceActions} = experienceSlice;