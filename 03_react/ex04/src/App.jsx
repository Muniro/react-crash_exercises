import { useState } from "react"

const initialProducts = [
  { id: 1, name: "Monitor", price: 250, quantity: 1 },
  { id: 2, name: "Keyboard", price: 150, quantity: 1 },
  { id: 3, name: "Mouse", price: 50, quantity: 1 }
]

export default function App() {
  const [products, setProducts] = useState(initialProducts)

  const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0)

  const hasFreeShipping = total >= 500

  function changeQuantity(productId, change) {
    setProducts(currentProducts =>
      currentProducts.map(product => {
        if (product.id !== productId) return product

        return {
          ...product,
          quantity: Math.max(0, product.quantity + change)
        }
      })
    )
  }

  return (
    <main>
      <h1>Shopping cart</h1>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} (€{product.price.toFixed(2)} each){" "}
            <button type="button" aria-label={`Decrease ${product.name} quantity`} onClick={() => changeQuantity(product.id, -1)} disabled={product.quantity === 0}>
              -
            </button>{" "}
            {product.quantity}{" "}
            <button type="button" aria-label={`Increase ${product.name} quantity`} onClick={() => changeQuantity(product.id, 1)}>
              +
            </button>
          </li>
        ))}
      </ul>

      <h2>Total: €{total.toFixed(2)}</h2>
      <p style={{ color: hasFreeShipping ? "green" : "red" }}>{hasFreeShipping ? "Free Shipping" : "Shipping will be charged"}</p>
    </main>
  )
}
