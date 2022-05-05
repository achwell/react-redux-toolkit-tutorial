import {createSlice} from "@reduxjs/toolkit"

interface ThemeState {
    value: string
}

const INITIAL_STATE: ThemeState = {
    value: ""
}

const themeSlice = createSlice({
    name: "theme",
    initialState: INITIAL_STATE,
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {changeColor} = themeSlice.actions
export default themeSlice.reducer