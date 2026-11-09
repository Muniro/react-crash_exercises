function SingleProduct(props) {
  const product = props.product

  return (
    <article>
      <img src={product.image} alt={product.product} style={{ width: "180px", height: "160px", objectFit: "contain" }} />
      <h3>{product.product}</h3>
      <p>€{product.price.toFixed(2)}</p>
      {product.onSale && <strong>On sale</strong>}
    </article>
  )
}

export default SingleProduct
