import React from "react";
import "./Meme.css";

/** Meme Component
 *
 * Renders actual meme.
 */

const Meme = ({ id, url, topText, bottomText, deleteMeme }) => {
  /** Takes in function from app that deletes a meme */
  const handleDelete = () => deleteMeme(id);

  return (
    <div className="Meme">
      <div className="meme-container">
        <span className="top-text">{topText}</span>
        <img src={url} alt="meme" />
        <span className="bottom-text">{bottomText}</span>
        <button id="delete-btn" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Meme;
