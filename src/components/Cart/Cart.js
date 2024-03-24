import Modal from "../UI/Modal";

function Cart({ showCart, closeCart }) {
  return (
    <Modal show={showCart} onclose={closeCart}>
      Hellow Buddy
    </Modal>
  );
}

export default Cart;
