import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMessageSchema } from "../types/message-schema";
import { ThunkConfig } from "@/app/store/config/store-schema";
import { addDoc } from "firebase/firestore";
import { contactsCollectionRef } from "@/shared/config/firebase.config";

export const addMessageTC = createAsyncThunk<unknown, IMessageSchema, ThunkConfig<string>>(
    'contacts/post',
    async ({email, message, name, network, toast, load}, thunkApi) => {
        const {rejectWithValue} = thunkApi;

        try {
            addDoc(contactsCollectionRef, {
                name,
                email,
                network,
                message
            })
            .then(() => {
                toast()
                load(false)
            })

        } catch (error) {
            rejectWithValue(String(error))
        }
    }
) 