import React, { useRef } from "react";

interface Props {
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  Forms: Boolean;
  setTodoIn: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
  handleCloseForm: () => void;
}

const FormTodo: React.FC<Props> = ({
  setTodo,

  setTodoIn,
  Forms,
  handleAdd,
  handleCloseForm,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="fixed top-0  w-screen h-screen z-[50] ">
      <div className="absolute bg-[rgba(132,137,131,0.7)] backdrop-opacity-10  w-full h-full"></div>
      <form
        className="z-10 btn-color-gray md:w-[70vh]  w-[40vh]  mx-auto translate-y-28 outline outline-4 outline-color"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <button
          className="absolute right-0 z-10 text-title mt-1 mr-1"
          onClick={handleCloseForm}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="w-8 h-8 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        <div className="relative w-[85%] pb-10  pt-10 mx-auto px-5 text-center">
          <label className="relative w-full font-bold text-xl text-title ">
            Form TodoList
          </label>
          <input
            ref={inputRef}
            type="text"
            className=" bg-white w-full mt-7 px-2 outline outline-4 "
            placeholder="Title"
            onChange={(e) => setTodo(e.target.value)}
          />
          <textarea
            className=" bg-white w-full h-[150px] mt-5 px-2 outline outline-4"
            placeholder="Description"
            onChange={(e) => setTodoIn(e.target.value)}
          />
          <button
            className="btn btn-active mt-5 outline outline-2 text-title btn-color-gray"
            type="submit"
          >
            Add TodoList
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTodo;
