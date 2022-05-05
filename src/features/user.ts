import {createSlice} from "@reduxjs/toolkit"

interface UserState {
    value: {
        name: string,
        age: number,
        email: string
    }
}

const INITIAL_STATE: UserState = {
    value: {name: "", age: 0, email: ""}
}

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = INITIAL_STATE.value
        }
    }
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer