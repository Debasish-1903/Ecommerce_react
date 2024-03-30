import "./Modal.css";

function Modal({ show, onClose, children }) {
  if (show === false) {
    return null;
  }

  // const demo = (event) => {
  //   console.log(event.target);
  // };

  return (
    // <div className="backdrop" onClick={demo}>
    <div className="backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={(event) => {
          // when eventlistener of parent passes in children then it is called
          //  eventpropagation it is a concept of valina js that's why we need to stop it
          event.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
