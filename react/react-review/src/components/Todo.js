function Todo(props) {
    function deleteHandler(){
        console.log("Delete!");
        console.log(props.text);
    }

  return (
    <div className="card">
      <h2>{props.text}</h2> {/*prop.text the 'text' is from App.js it will show on
    the web of the things you wrote */}
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button> {/*button will make a button on the website 
        onClick is the thing when you press it 
        it will go to do a thing or go on a nextpage it's like a function */}
      </div>
    </div>
  );
}

export default Todo;
