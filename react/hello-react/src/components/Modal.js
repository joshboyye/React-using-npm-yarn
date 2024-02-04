function Modal(props) {
  function cancelHandler() {
    props.onCanel();
  }

  function confirmHandler() {
    props.onCofirm();
  }

  return (
    <div classNmae="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onCanel}>
        Cancel
      </button> 
      <button className="btn" onClick={props.onCofirm}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
