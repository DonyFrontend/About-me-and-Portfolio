import { InitialState } from "@/app/store/config/store-schema";
import { createSlice } from "@reduxjs/toolkit";
import { skillsDataTC } from "../service/skills-data.service";
import { SkillsSchema } from "../types/skills-schema";

const initialState: InitialState<SkillsSchema> = {
    data: {},
    isError: false,
    isLoading: false,
}

const skillsSlice = createSlice({
    name: 'skills/slice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(skillsDataTC.pending, state => {
            state.isLoading = true;
        })
        builder
        .addCase(skillsDataTC.rejected, state => {
            state.isError = true;
        })
        builder
        .addCase(skillsDataTC.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isError = false;
            state.isLoading = false;
        })
    },
})

export const {actions: skillsActions} = skillsSlice;
export const {reducer: skillsReducer} = skillsSlice;