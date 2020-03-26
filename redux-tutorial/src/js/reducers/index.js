import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

function rootRedocer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return {
      ...state,
      articles: [...state.articles, action.payload]
    };
  }
  return state;
}

export default rootRedocer;
