import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
      {text}
    </button>
  )
}

export default Button
