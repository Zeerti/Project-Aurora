import {
  SET_CURRENT_INPUT,
  SET_SEARCH_RESULTS,
  GET_SEARCH_HISTORY,
  ADD_SEARCH_HISTORY,
  CLEAR_SEARCH_HISTORY,
  LOAD_SEARCH_DATABASE,
} from "./types";

// Update the redux state with the current search term(s)
export const setCurrentInput = (userInput) => (dispatch) => {
  dispatch({ type: SET_CURRENT_INPUT, payload: userInput });
};

// Update the redux state with the most recent returned search results
export const setSearchResults = (results) => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results,
  };
};

// Update redux state with the last 50 search results
export const getRecentSearches = (history) => {
  return {
    type: GET_SEARCH_HISTORY,
    payload: history,
  };
};

// clear recent search history
export const clearSearchHistory = () => {
  return {
    type: CLEAR_SEARCH_HISTORY,
    payload: {},
  };
};

// Add new array index of recent search
export const addSearchHistory = (userInput) => {
  return {
    type: ADD_SEARCH_HISTORY,
    payload: userInput,
  };
};

// Load Search Database data into state
export const loadSearchableData = (data) => {
  return {
    type: LOAD_SEARCH_DATABASE,
    payload: data,
  };
};
