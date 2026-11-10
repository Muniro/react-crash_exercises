export default function EmailInput({ value, onChange }) {
  return (
    <label>
      Email
      <input type="email" value={value} onChange={onChange} />
    </label>
  )
}
