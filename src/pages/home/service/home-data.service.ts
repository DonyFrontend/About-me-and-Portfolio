import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore";
import { homeCollectionRef } from "@/shared/config/firebase.config";
import { ThunkConfig } from "@/app/store/config/store-schema";
import { HomeSchema } from "../types/home-schema";

export const homeDataTC = createAsyncThunk<HomeSchema, void, ThunkConfig<string>>(
    'home/thunk',
    async () => {
        const data = await getDocs(homeCollectionRef)
        const snapData = data.docs.map(doc => ({
            id: doc.id,
            ...doc.data()  
        }))
        return snapData as HomeSchema;
    }
)