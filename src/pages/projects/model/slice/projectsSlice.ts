import { InitialState } from "@/app/store/config/store-schema";
import { createSlice } from "@reduxjs/toolkit";
import { ProjectsSchema } from "../types/projects-schema";
import { projectsTC } from "../service/projects.service";

const initialState: InitialState<ProjectsSchema> = {
    data: [],
    isError: false,
    isLoading: false
}

const projectsSlice = createSlice({
    name: 'prpjects/data',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(projectsTC.pending, state => {
            state.isLoading = true;
        })
        builder
        .addCase(projectsTC.rejected, state => {
            state.isError = true;
        })
        builder
        .addCase(projectsTC.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isError = false;
            state.isLoading = false
        })
    },
})

export const {reducer: projectsReducer} = projectsSlice;
export const {actions: projectActions} = projectsSlice;