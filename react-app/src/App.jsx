import React from 'react'
import Button from './components/button'

function App() {
  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Button</h1>
      <Button text="Click Me!" onClick={handleClick} />
    </div>
  )
}

export default App
