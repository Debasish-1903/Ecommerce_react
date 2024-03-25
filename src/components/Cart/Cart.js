import Modal from "../UI/Modal";
import "./Cart.css";

function CartItem({ id, name, image, quantity }) {
  return (
    <div className="cart-item">
      <div className="item-img">
        <img src={require(`../../assets/${image}`)} alt={name} />
      </div>
      <div className="item-info">
        <div>{name}</div>
        <div className="item-qty">
          <div>Qty:{quantity}</div>

          <div>
            <button className=" yellow-button qty-button qty-plus-button ">
              +
            </button>
          </div>
          <div>
            <button className=" yellow-button qty-button qty-plus-button ">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cart({ showCart, closeCart, cartItems }) {
  return (
    <Modal show={showCart} onclose={closeCart}>
      <div className="cart-container">
        <div className="cart-heading">Cart</div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            quantity={item.quantity}
          />
        ))}
        <div className="cart-buttons">
          <button className="black-button close-cart" onClick={closeCart}>
            Close
          </button>
          <button className="yellow-button " onClick={closeCart}>
            CheckOut
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
