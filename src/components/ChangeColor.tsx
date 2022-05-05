import React, {useState} from 'react'
import {useAppDispatch} from "../app/hooks"
import {changeColor} from "../features/theme"

const ChangeColor = () => {
    const [color, setSetColor] = useState("")
    const dispatch = useAppDispatch()
    return (
            <div>
                <input type="text" value={color} onChange={(e) => setSetColor(e.target.value)}/>
                <button onClick={() => dispatch(changeColor(color))}>Change Color</button>
            </div>
        )
}
export default ChangeColor
