import {
  SET_CURRENT_INPUT,
  SET_SEARCH_RESULTS,
  CLEAR_SEARCH_HISTORY,
  ADD_SEARCH_HISTORY,
} from "../actions/types";

// const isEmpty = require("../../../auth/node_modules/is-empty");

const initialState = {
  searchHistory: [],
  searchInput: "",
  searchResults: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAR_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: [],
      };
    case SET_CURRENT_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case ADD_SEARCH_HISTORY:
      let curHistory = state.searchHistory;
      let newHistory = [...curHistory, action.payload];

      return {
        ...state,
        searchHistory: newHistory,
      };
    default:
      return state;
  }
}
