import ProductsList from "./ProductsList.jsx"

const products = [
  {
    product: "flash t-shirt",
    price: 27.5,
    category: "t-shirts",
    bestSeller: false,
    image: "https://barcelonacodeschool.com/files/currfiles/flash_tshirt.jpg",
    onSale: true
  },
  {
    product: "ironman t-shirt",
    price: 22.5,
    category: "t-shirts",
    bestSeller: true,
    image: "https://barcelonacodeschool.com/files/currfiles/ironman_tshirt.png",
    onSale: false
  },
  {
    product: "superman hat",
    price: 13.9,
    category: "hats",
    bestSeller: true,
    image: "https://barcelonacodeschool.com/files/currfiles/superman_hat.jpeg",
    onSale: false
  }
]

function App() {
  const bestSellers = products.filter(product => product.bestSeller)

  return (
    <div>
      <header>
        <h1>My Shop</h1>
      </header>

      <main>
        <section>
          <h2>All products</h2>
          <ProductsList products={products} />
        </section>

        <section>
          <h2>Best Sellers</h2>
          <ProductsList products={bestSellers} />
        </section>
      </main>

      <footer>All rights reserved</footer>
    </div>
  )
}

export default App
