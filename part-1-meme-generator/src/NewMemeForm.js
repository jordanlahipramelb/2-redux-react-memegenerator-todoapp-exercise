import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./NewMemeForm.css";

const DEFAULT_FORM = {
  url: "",
  topText: "",
  bottomText: "",
};

const NewMemeForm = ({ addMeme }) => {
  const [formData, setFormData] = useState(DEFAULT_FORM);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // adds an id to each object in formData
    addMeme({ ...formData, id: uuid() });
    setFormData(DEFAULT_FORM);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    // spread the previous formData, and add name/value pairs to it
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <div>
      <h2>Create a New Meme</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Image URL</label>
        <input
          type="text"
          name="url"
          id="form-url"
          onChange={handleChange}
          value={formData.url}
        />
        <label htmlFor="topText">Top Text</label>
        <input
          type="text"
          name="topText"
          id="form-topText"
          onChange={handleChange}
          value={formData.topText}
        />
        <label htmlFor="bottomText">Bottom Text</label>
        <input
          type="text"
          name="bottomText"
          id="form-bottomText"
          onChange={handleChange}
          value={formData.bottomText}
        />
        <button type="submit">Generate Meme</button>
      </form>
    </div>
  );
};

export default NewMemeForm;
