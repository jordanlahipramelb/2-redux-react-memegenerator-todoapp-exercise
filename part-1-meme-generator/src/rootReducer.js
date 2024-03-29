/** Create default container for memes to be stored */
const INITIAL_STATE = {
  memes: [],
};

/** Create rootReducer containing initial state and actions */
const rootReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "ADD_MEME") {
    return {
      ...state,
      memes: [...state.memes, { ...action.meme }],
    };
  }
  if (action.type === "REMOVE_MEME") {
    return {
      ...state,
      memes: state.memes.filter((meme) => meme.id !== action.id),
    };
  }
  return state;
};

export default rootReducer;
