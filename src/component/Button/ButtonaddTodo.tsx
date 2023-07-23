import React, { useState } from "react";
import FormTodo from "../Form/FormTodo";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonAddTodo: React.FC<Props> = ({ todo, setTodo}) => {
   // Button
   const [Forms, setForms] = useState<boolean>(false);

  return (
    <div>
      <div className="mt-6 text-center">
        <button
          className="btn w-48 h-[20px] btn-color-gray text-title px-5 normal-case text-base"
          onClick={() => setForms(true)}
        >
          Click Add...
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.0"
            stroke="currentColor"
            className="ml-5 w-7 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <div>
        <FormTodo
          todo={todo}
          setTodo={setTodo}
          Forms={Forms}
          setForms={setForms}
        />
      </div>
    </div>
  );
};

export default ButtonAddTodo;
