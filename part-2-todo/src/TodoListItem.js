import React from "react";

const TodoListItem = ({ id, name, deleteTodo }) => {
  const handleDelete = () => deleteTodo(id);

  return (
    <div>
      <div className="item-container">
        <h2 key={id}>{name}</h2>
        <button onClick={handleDelete}> X </button>
      </div>
    </div>
  );
};

export default TodoListItem;
