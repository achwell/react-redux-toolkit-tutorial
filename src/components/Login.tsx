import React from "react"
import {useAppDispatch} from "../app/hooks"
import {login, logout} from "../features/user"

function Login() {
    const dispatch = useAppDispatch()
    return (
        <div>
            <button onClick={() => dispatch(login({
                name: "Axel",
                age: 54,
                email: "axelwulff@mac.com"
            }))}>Log in
            </button>
            <button onClick={() => dispatch(logout())}>Log out</button>
        </div>
    )
}

export default Login