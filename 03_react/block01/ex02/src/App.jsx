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

function ProductCard({ product }) {
  return (
    <article
      style={{
        backgroundColor: "white",
        color: "#222",
        borderRadius: "8px",
        overflow: "hidden"
      }}
    >
      <img src={product.image} alt={product.product} style={{ width: "100%", height: "200px", objectFit: "contain" }} />
      <div style={{ padding: "16px" }}>
        <h2 style={{ color: "#222" }}>{product.product}</h2>
        <p>€{product.price.toFixed(2)}</p>
        {product.onSale && <strong>On sale</strong>}
      </div>
    </article>
  )
}

function ProductGrid({ items }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}
    >
      {items.map(product => (
        <ProductCard key={product.product} product={product} />
      ))}
    </div>
  )
}

function App() {
  const bestSellers = products.filter(product => product.bestSeller)

  return (
    <div style={{ color: "#222", fontFamily: "Arial, sans-serif" }}>
      <header
        style={{
          backgroundColor: "#14213d",
          color: "white",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap"
        }}
      >
        <h1>My Shop</h1>
        <nav>Home&nbsp;&nbsp; Products&nbsp;&nbsp; Contact</nav>
        <input type="search" placeholder="Search products" />
      </header>

      <main style={{ padding: "24px" }}>
        <section>
          <h1>All products</h1>
          <ProductGrid items={products} />
        </section>

        <section style={{ marginTop: "40px" }}>
          <h1>Best Sellers</h1>
          <ProductGrid items={bestSellers} />
        </section>
      </main>

      <footer style={{ padding: "20px", textAlign: "center", color: "Yellow" }}>All rights reserved</footer>
    </div>
  )
}

export default App
