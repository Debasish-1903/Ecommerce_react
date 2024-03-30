import "./products.css";

function Product({ id, name, image, onAddToCart }) {
  return (
    <div key={id} className="product">
      <img src={require(`../../assets/${image}`)} alt={name} />
      <div className="product-name">{name}</div>
      <button onClick={() => onAddToCart(id, name, image)}>Add to cart</button>
    </div>
  );
}

function Products({ products, onAddToCart }) {
  // we need to make product(jsx) from json file (standard method using map)

  return (
    <div className="products-container">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default Products;
