import { useEffect, useState } from "react"

// Keep the exercise's users array here.
const users = [
  { email: "alex@example.com", password: "alex123" },
  { email: "sam@example.com", password: "sam456" },
  { email: "test@example.com", password: "hello123" }
]

export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [result, setResult] = useState(null)
  const [seconds, setSeconds] = useState(3)

  function handleSubmit(event) {
    event.preventDefault()

    const matched = users.some(user => user.email === email && user.password === password)

    setSeconds(3)
    setResult({ matched })
  }

  useEffect(() => {
    if (result === null) return

    let remaining = 3
    const intervalId = setInterval(() => {
      remaining -= 1

      if (remaining < 0) {
        clearInterval(intervalId)
        setResult(null)
      } else {
        setSeconds(remaining)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [result])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" value={email} onChange={event => setEmail(event.target.value)} />
        </label>

        <label>
          Password
          <input name="password" value={password} onChange={event => setPassword(event.target.value)} />
        </label>

        <button type="submit">Submit</button>
      </form>

      {result !== null && (
        <>
          <h2 style={{ color: result.matched ? "green" : "red" }}>{result.matched ? "Match found successfully" : "Match not found"}</h2>
          <h3>This message will disappear in {seconds}</h3>
        </>
      )}
    </>
  )
}
