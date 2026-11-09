import Item from "./Item.jsx"

function List(props) {
  return (
    <ul>
      {props.categories.map(category => (
        <Item key={category} category={category} />
      ))}
    </ul>
  )
}

export default List
