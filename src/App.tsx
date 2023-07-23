import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import ButtonAddTodo from "./component/Button/ButtonaddTodo";
import ContentElement from "./component/Content/Content";
import FormTodo from "./component/Form/FormTodo";

import { Todo } from "./model";

const App: React.FC = () => {
  // add title
  const [todo, setTodo] = useState<string>("adamsetiadijr07@gmail.com");
  // add Description
  const [todoIn, setTodoIn] = useState<string>("adamsetiadijr07@gmail.com");
  const [todos, setTodos] = useState<Todo[]>([]);

  // Button
  const [Forms, setForms] = useState<boolean>(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo && todoIn) {
      setTodos([...todos, { id: Date.now(), todo, todoIn, isDone: false }]);
      setTodo("");
    }
  };

  const handleOpenForm = () => {
    setForms(true);
  };

  const handleCloseForm = () => {
    setForms(false);
  };

  console.log(todos);
  return (
    <div className="App">
      <Navbar />
      <ButtonAddTodo handleOpenForm={handleOpenForm} />
      {Forms && (
        <FormTodo
          setTodo={setTodo}
          setTodoIn={setTodoIn}
          Forms={Forms}
          handleAdd={handleAdd}
          handleCloseForm={handleCloseForm}
        />
      )}
      <ContentElement todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
