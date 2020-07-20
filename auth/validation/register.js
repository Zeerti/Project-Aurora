const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // convert empty fields to an empty string for validator
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.username = !isEmpty(data.username) ? data.username : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Y'all have to input an email, punk";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Now I just checked and fella that's not a real email!";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Hey fella, you can't login without that password";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "We reckon you validate your password fella";
  }

  if (!Validator.isLength(data.password, { min: 12, max: 30 })) {
    errors.password =
      "I reckon you make a new password that is at least 12 characters long, ya hear?";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password = "Fella, your passwords don't match!";
  }

  // Username checks
  if (Validator.isEmpty(data.username)) {
    errors.username = "Hey fella, you can't login without a username.";
  } else if (!Validator.isLength(data.username, { min: 3, max: 30 })) {
    errors.username =
      "I reckon you make a new username. Has to be at least 3 characters long and no longer than 30";
  }

  if (!Validator.isAlpha(data.username, "en-US")) {
    errors.username =
      "Now see here fella, username can't have any numbers or symbols!";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
