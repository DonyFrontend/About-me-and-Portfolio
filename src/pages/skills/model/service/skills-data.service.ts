import { ThunkConfig } from "@/app/store/config/store-schema";
import { skillsCollectionRef } from "@/shared/config/firebase.config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, DocumentData, getDoc } from "firebase/firestore";

export const skillsDataTC = createAsyncThunk<DocumentData, {id: string}, ThunkConfig<string>>(
    'skills/thunk',
    async ({id}, thunkApi) => {
        const {rejectWithValue} = thunkApi;

        try {
            const data = doc(skillsCollectionRef, id);
            const docData = await getDoc(data);
            const getData = docData.data();
            return getData;
        } catch (error) {
            rejectWithValue(String(error));
        }
    }
)