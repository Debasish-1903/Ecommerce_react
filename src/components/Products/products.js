import productsData from "../../data/products.json";
import "./products.css";

function Product({ id, name, image }) {
  return (
    <div key={id} className="product">
      <img src={require(`../../assets/${image}`)} alt={name} />
      <div className="product-name">{name}</div>
      <button>Add to cart</button>
    </div>
  );
}

function Products() {
  // we need to make product(jsx) from json file (standard method using map)

  return (
    <div className="products-container">
      {productsData.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Products;
