import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="flex flex-col  mt-6 gap-3 justify-center items-center">
      {todos.map((t) => (
        <li className="bg-sky-300/75 rounded-md w-full flex justify-between items-center px-3">
          <span className="" key={t.id}>
            {t.todo}
          </span>
          <div className="my-2 p-1 text-slate-200">
            <button
              className="ml-[10px] bg-sky-700 p-1"
              onClick={() => handleEdit(t.id)}
            >
              Edit
            </button>
            <button
              className="ml-[10px]  bg-sky-700 p-1"
              onClick={() => handleDelete(t.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
