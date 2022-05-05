import React from 'react'
import {useAppSelector} from "../app/hooks"

const Profile = () => {
    const user = useAppSelector(state => state.user.value)
    const themeColor = useAppSelector(state => {
        return state.theme.value;
    })
    return (
        <div style={{color: themeColor}}>
            <h1>Profile page</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}
export default Profile