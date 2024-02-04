import {useState, useRef,useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos(){
  const array =[];
  for(let i=1; i<=2500; i++){
    array.push({
      id:i,
      text:'할 일 ${i}',
      checked:false,
    });
  }
  return array;
}

const App =() =>{
  const [todos,setTodos] = useState(createBulkTodos);

  const nextId=useRef(2501);

  

};

export default App;
