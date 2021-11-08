import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./NewTodoForm.css";

const DEFAULT_FORM = { name: " " };

const NewTodoForm = ({ addTodo }) => {
  const [formData, setFormData] = useState(DEFAULT_FORM);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo({ ...formData, id: uuid() });
    setFormData(DEFAULT_FORM);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    // spread the previous formData, and add name/value pairs to it
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={formData.name}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
