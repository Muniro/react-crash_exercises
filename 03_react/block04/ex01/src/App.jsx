import { useState } from "react"

export default function App() {
  const [counter, setCounter] = useState(0)
  const isOdd = counter % 2 !== 0

  return (
    <>
      <button onClick={() => setCounter(previous => previous + 1)}>Increase counter</button>

      <h2>{isOdd ? counter : null}</h2>
    </>
  )
}
