import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import State from './components/State'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <State />
    </>
  )
}

export default App
