import Modal from "../UI/Modal";
import "./AddProduct.css";

function AddProduct({ showAddProduct, closeAddProduct }) {
  return (
    <Modal show={showAddProduct} onClose={closeAddProduct}>
      <div className="add-product-container">
        <div className="add-product-heading">AddProduct</div>
        <form onSubmit={() => {}} className="add-product-form">
          <div className="form-label">Enter Product Name</div>
          <input className="form-input" />
          <button type="submit" className="yellow-button submit-button">
            Add product
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddProduct;
