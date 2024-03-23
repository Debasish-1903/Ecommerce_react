import { useState } from "react";
import "./Header.css";
import Modal from "../UI/Modal";
function Header() {
  const [showCart, setShowCart] = useState(false);

  function openCart() {
    setShowCart(true);
  }

  function closeCart() {
    setShowCart(false);
  }

  return (
    <div className="header">
      <h1>My React store</h1>
      <div>
        <button className="yellow-button" onClick={openCart}>
          Cart
        </button>
      </div>

      {/* making better--reusable component */}
      <Modal show={showCart} onclose={closeCart}>
        Hellow Buddy
      </Modal>

      {/* //conditional rendering of state */}
      {/* {showCart && (
        <div className="backdrop" onClick={closeCart}>
          <div className="modal">Hello form cart</div>
        </div>
      )} */}
    </div>
  );
}

//we want to do it better with <Modal show={true or false} onClose={}>...</Modal>
export default Header;
