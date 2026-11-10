export default function PasswordInput({ value, onChange }) {
  return (
    <label>
      Password
      <input type="password" value={value} onChange={onChange} />
    </label>
  )
}
