import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  const name ='리액트'
  return (
    <div>{name == '리액트'&& <h1>리액트 안녕!</h1>}
    </div>
  );
}

export default App;
