import { useState } from "react"

function App() {
  const defaultMessage = "no data provided!"
  const [text, setText] = useState(defaultMessage)

  function handleChange(event) {
    const typedText = event.target.value
    setText(typedText || defaultMessage)
  }

  return (
    <div>
      <input aria-label="Enter some text" onChange={handleChange} />
      <h1>{text}</h1>
    </div>
  )
}

export default App
