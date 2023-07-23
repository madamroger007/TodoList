import clsx from "clsx";
import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  Forms: Boolean;
  setForms: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormTodo: React.FC<Props> = ({ todo, setTodo, Forms, setForms }) => {
  return (
    <div
      className={clsx(
        "fixed top-0  w-screen h-screen z-[50] ",
        Forms ? "text-base " : "hidden"
      )}
    >
      <div className="absolute bg-[rgba(132,137,131,0.7)] backdrop-opacity-10  w-full h-full"></div>
      <form className=" btn-color-gray md:w-[70vh] md:h-[60vh] w-[40vh] h-[40vh]  mx-auto translate-y-28">
        <button className="absolute right-0" onClick={() => setForms(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          
        </button>
        <div className=" w-full h-full pt-[15%]  ">
        <div className="relative bg-orange-400 w-[80%] h-[80%]  mx-auto px-5 ">
        <input type="text" className=" bg-white w-full mt-5" />
        </div>
        </div>
      </form>
    </div>
  );
};

export default FormTodo;
