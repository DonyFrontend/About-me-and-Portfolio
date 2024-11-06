import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProjectsSchema } from "../types/projects-schema";
import { ThunkConfig } from "@/app/store/config/store-schema";
import { getDocs } from "firebase/firestore";
import { projectsCollectionRef } from "@/shared/config/firebase.config";

export const projectsTC = createAsyncThunk<ProjectsSchema, void, ThunkConfig<string>>(
    'projects/thunk',
    async (_, thunkApi) => {
        const {rejectWithValue} = thunkApi;

        try {
            const data = await getDocs(projectsCollectionRef);
            const snapData = data.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))

            return snapData as ProjectsSchema;
        } catch (error) {
            return rejectWithValue(String(error))
        }
    }
);