import { useState } from "react"
import EmailInput from "./EmailInput.jsx"
import PasswordInput from "./PasswordInput.jsx"
import SubmitButton from "./SubmitButton.jsx"

export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function showDetails() {
    alert(`Email: ${email}\nPassword: ${password}`)
  }

  return (
    <div>
      <EmailInput value={email} onChange={event => setEmail(event.target.value)} />
      <PasswordInput value={password} onChange={event => setPassword(event.target.value)} />
      <SubmitButton onClick={showDetails} />
    </div>
  )
}
