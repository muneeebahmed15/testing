import React from 'react'
import ColorChanger from '../Hooks/ColorChanger'

const LeftSiderBar = () => {
  const [color, handleColorChanger] = ColorChanger();

  return (
    <>
      <div style={{color:`${color}`}}>
        <h1>LeftSiderBar</h1>
        </div>
    </>
  )
}

export default LeftSiderBar
