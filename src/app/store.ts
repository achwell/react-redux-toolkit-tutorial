import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../features/user"
import themeReducer from "../features/theme"

export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>