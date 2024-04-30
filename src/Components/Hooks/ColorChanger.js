import React, { useState } from 'react'

const ColorChanger = () => {
    const [color, setColor] = useState("");

    const handleColorChanger = (e) =>{
        setColor(e.target.value)
    }   
        return [color, handleColorChanger];
}

export default ColorChanger;