import "./Modal.css";

function Modal({ show, onclose, children }) {
  if (show === false) {
    return null;
  }

  return (
    <div className="backdrop" onClick={onclose}>
      <div className="modal">{children}</div>
    </div>
  );
}

export default Modal;
