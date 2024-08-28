import { useState } from "react"


function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>Count: {count}</p>
      <Button
      onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </div>
  )
}

export default App
