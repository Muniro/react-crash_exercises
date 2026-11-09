import Name from "./Name.jsx"
import Surname from "./Surname.jsx"

function App() {
  const names = ["Clifford", "Russel", "Michael", "Dennis", "Andre"]
  const surnames = ["Smith", "Simmons", "Diamond", "Coles", "Benjamin"]

  return (
    <div>
      {names.map((name, idx) => (
        <div key={idx}>
          <Name name={name} /> <Surname surname={surnames[idx]} />
        </div>
      ))}
    </div>
  )
}

export default App
