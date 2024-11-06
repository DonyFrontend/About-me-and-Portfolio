import { experienceReducer } from "@/pages/experience/model/slice/experience-slice";
import { homeReducer } from "@/pages/home/slice/home-slice";
import { projectsReducer } from "@/pages/projects/model/slice/projectsSlice";
import { skillsReducer } from "@/pages/skills/model/slice/skills-slice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

const reducer = {
    home: homeReducer,
    skills: skillsReducer,
    experience: experienceReducer,
    projects: projectsReducer
}

const store = configureStore({
    reducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export default store;