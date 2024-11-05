import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore";
import { IExperienceSchema } from "../types/experience-schema";
import { ThunkConfig } from "@/app/store/config/store-schema";
import { experienceCollectionRef } from "@/shared/config/firebase.config";

export const experienceTC = createAsyncThunk<IExperienceSchema, void, ThunkConfig<string>>(
    'experience/thunk',
    async (_, thunkApi) => {
        const {rejectWithValue} = thunkApi;

        try {
            const data = await getDocs(experienceCollectionRef);
            const snapData = data.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))

            return snapData as IExperienceSchema;
        } catch (error) {
            return rejectWithValue(String(error))
        }
    }
)