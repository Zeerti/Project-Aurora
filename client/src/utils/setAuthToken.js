// set and delete the auth token header from axios requests

import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    // Ensure auth token is applied to all requests if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
