import Backdrop from './components/Backdrop';
import Todo from './components/Todo';
import Modal from './components/Modal';
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="learn React" /> {/* learn React will show rightnext to delete button
      since we added  props*/}
      <Todo text="Master react"/>
      <Todo text="Today's react"/>
      <Backdrop/>
    </div>
  );
}

export default App;
