const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Convert empty fields into an empty string for Validator functions
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.usernamenotfound = null;

  // username checks
  if (Validator.isEmpty(data.username)) {
    errors.username =
      "The username field is still blank. Am I supposed to guess who you are?";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password =
      "The password field is still blank. How do I know who you say you are?";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
