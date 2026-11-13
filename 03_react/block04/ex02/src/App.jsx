import { useState } from "react"

const EUR_TO_USD = 1.17

function EuroInput({ euros, onEurosChange }) {
  return <input type="number" step="any" aria-label="Amount in euros" value={euros} onChange={event => onEurosChange(event.target.value)} />
}

function DollarResult({ dollars }) {
  return <h1>${dollars.toFixed(2)}</h1>
}

export default function App() {
  const [euros, setEuros] = useState("")
  const dollars = Number(euros) * EUR_TO_USD

  return (
    <>
      <EuroInput euros={euros} onEurosChange={setEuros} />
      <DollarResult dollars={dollars} />
    </>
  )
}
