import "./App.css";
import React from "react";
import Meme from "./Meme";
import NewMemeForm from "./NewMemeForm";

// Extract data from store
// Dispatch actions from rootReducer
import { useSelector, useDispatch } from "react-redux";

/** Meme Generator
 *
 * Components: NewMemeForm, Meme
 */

function App() {
  /** Pull in the value of memes from the store */
  const memes = useSelector((store) => store.memes);
  const dispatch = useDispatch();

  /** Create dispatch functions for actions in rootReducer */
  const addMeme = (newMeme) => {
    dispatch({ type: "ADD_MEME", meme: newMeme });
  };
  const deleteMeme = (id) => {
    dispatch({ type: "REMOVE_MEME", id });
  };
  /****************************/

  /** Create Meme Components containing data from memes state in store */
  const memesList = memes.map((meme) => (
    <Meme
      key={meme.id}
      topText={meme.topText}
      bottomText={meme.bottomText}
      url={meme.url}
      deleteMeme={() => deleteMeme(meme.id)}
    />
  ));
  return (
    <div className="App">
      <NewMemeForm addMeme={addMeme} />
      {memesList}
    </div>
  );
}

export default App;
