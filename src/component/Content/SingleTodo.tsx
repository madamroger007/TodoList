import React from "react";
import { Todo } from "../../model";
import { AiFillEdit} from "react-icons/ai"

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form action="">
      <span>{todo.todo}</span>
      <div>
        <span><AiFillEdit/></span>
      </div>
      <span>{todo.todoIn}</span>
    </form>
  );
};

export default SingleTodo;
