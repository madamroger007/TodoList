import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import ButtonAddTodo from './component/Button/ButtonaddTodo';


const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("adamsetiadijr07@gmail.com");
 
   return (
    <div className="App">
    <Navbar />
    <ButtonAddTodo todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
