import List from "./List.jsx"

function App() {
  const categories = ["shirts", "hats", "shoes"]

  return (
    <div>
      <List categories={categories} />
    </div>
  )
}

export default App
