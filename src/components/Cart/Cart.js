import Modal from "../UI/Modal";
import "./Cart.css";

function CartItem({ id, name, image, quantity }) {
  return <div className="cart-item">{name}</div>;
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
      </div>
    </Modal>
  );
}

export default Cart;
