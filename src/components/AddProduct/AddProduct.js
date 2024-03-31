import Modal from "../UI/Modal";
import "./AddProduct.css";
import { useRef } from "react";

function AddProduct({ showAddProduct, closeAddProduct, onAddProduct }) {
  const nameRef = useRef();
  function handlesubmit(event) {
    event.preventDefault();
    const nameValue = nameRef.current.value;
    onAddProduct(nameValue);
  }

  return (
    <Modal show={showAddProduct} onClose={closeAddProduct}>
      <div className="add-product-container">
        <div className="add-product-heading">AddProduct</div>
        <form onSubmit={handlesubmit} className="add-product-form">
          <div className="form-label">Enter Product Name</div>
          <input className="form-input" name="Product name" ref={nameRef} />
          <button type="submit" className="yellow-button submit-button">
            Add product
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddProduct;
