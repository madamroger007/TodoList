import React from "react";

interface Props {
  handleOpenForm: () => void;
}

const ButtonAddTodo: React.FC<Props> = ({ handleOpenForm }) => {
  return (
    <div>
      <div className="mt-6 text-center">
        <button
          className="btn w-48 h-[20px] btn-color-gray text-title px-5 normal-case text-base"
          onClick={handleOpenForm}
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
      <div></div>
    </div>
  );
};

export default ButtonAddTodo;
