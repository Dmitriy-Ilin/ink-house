import { configureStore } from "@reduxjs/toolkit";
import paintReducer from "./paintSlice";

export const store = configureStore({
    reducer: {
        paint: paintReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;