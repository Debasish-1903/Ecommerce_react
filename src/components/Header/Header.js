import "./Header.css";

function Header({ openCart, openAddProduct }) {
  return (
    <div className="header">
      <h1>My React store</h1>
      <div>
        <button
          className="yellow-button"
          style={{ marginRight: "20px" }}
          onClick={openAddProduct}
        >
          Add Product
        </button>
        <button className="yellow-button" onClick={openCart}>
          Cart
        </button>
      </div>
    </div>
  );
}

//we want to do it better with <Modal show={true or false} onClose={}>...</Modal>
export default Header;
