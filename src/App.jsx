import { useState } from 'react'
import Roadmap from './components/Roadmap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Roadmap />
    </>
  )
}

export default App
