import { SET_CURRENT_USER } from "../actions/types";

const isEmpty = require("../../../auth/node_modules/is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload), //set to true or false with isEmpty func
        user: action.payload,
      };
    default:
      return state;
  }
}
