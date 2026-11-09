import "./App.css"

function App() {
  const categories = ["t-shirts", "hats", "shorts", "jackets", "pants", "shoes"]

  return (
    <div>
      <h1>Product categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
