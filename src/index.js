import React from 'react'

const Square = ({children}) => {
  let style = {
    width:"100px",
    height:"100px",
    backgroundColor:"blue"
  }

  return (
    <div style={style}>
      {children} 
    </div>
  )

}

export default Square
