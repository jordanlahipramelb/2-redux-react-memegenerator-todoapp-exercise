import React, { useState } from "react";

// Extract data from store
// Dispatch actions from rootReducer
import { useSelector, useDispatch } from "react-redux";

import NewTodoForm from "./NewTodoform";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  /** Pull in the value of memes from the store */
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  /** Create dispatch functions for actions in rootReducer */
  const addTodo = (newTodo) => {
    dispatch({ type: "ADD_TODO", todo: newTodo });
  };
  const deleteTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  /** Create TodoListItem Components containing data from todos state in store */
  const todoListItems = todos.map((todo) => (
    <TodoListItem
      key={todo.id}
      name={todo.name}
      deleteTodo={() => deleteTodo(todo.id)}
    />
  ));

  return (
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      <div className="TodoListItems">{todoListItems}</div>
    </div>
  );
};

export default TodoList;
