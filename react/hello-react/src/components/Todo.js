import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
{
  /* if we wanna use the useState we have to import the useState from react libary*/
}

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  {
    /* usState will return two values so you need a aray  */
  }

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModaHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      {/*prop.text the 'text' is from App.js it will show on
    the web of the things you wrote */}
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
        {/*button will make a button on the website 
        onClick is the thing when you press it 
        it will go to do a thing or go on a nextpage it's like a function */}
      </div>
      {modalIsOpen && <Modal onCancel={closeModaHandler} onConfirm={closeModaHandler}/>}
      {modalIsOpen && <Backdrop onClick={closeModaHandler} />}
      {/* we have to go back to Backdrop componment and put props.onClick so it will work*/}
    </div>
  );
}

export default Todo;
