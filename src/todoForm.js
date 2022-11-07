import React from "react";

const todoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        className="mr-[10px] outline-none"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="border-2 p-1 text-white hover:bg-white hover:text-black"
        type="submit"
      >
        {" "}
        {editId ? "Edit" : "Go"}
      </button>
    </form>
  );
};

export default todoForm;
