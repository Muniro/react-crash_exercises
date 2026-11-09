import SingleProduct from "./SingleProduct.jsx"

function ProductsList(props) {
  return (
    <div>
      {props.products.map(product => (
        <SingleProduct key={product.product} product={product} />
      ))}
    </div>
  )
}

export default ProductsList
