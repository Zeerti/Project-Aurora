const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {}

    // convert empty fields to an empty string for validator
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    data.username = !isEmpty(data.username) ? data.username: "";

    // Name checks
    if (Validator.isEmpty(data.name)) { 
        errors.name = "Name field is required";
    }

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "You have to input an email, punk";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "I just checked. That's not a real email";
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Have to put in a password! Otherwise how would you login?";
    }
    
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Don't forget to validate your password, otherwise you might have typed it wrong";
    }

    if (!Validator.isLength(data.password, {min: 12, max: 30})) {
        errors.password = "Sorry, we don't allow that password. Please make a new password that is at least 12 characters long"
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password = "Your passwords don't match! Quick, retype them and I'll pretend I didn't see anything wrong"
    }

    // Username checks
    if(Validator.isEmpty(data.username)) {
        errors.username = "You totally spaced putting in a username. How would we know who to login without it?"
    } else if(!Validator.isLength(data.username, {min: 3, max:30})) {
        errors.username = "Sorry, we don't allow that username. It has to be at least 3 characters long and no longer than 30";
    }

    if(!Validator.isAlpha(data.username, 'en-US')) {
        errors.username = "Username can only contain alpha characters (letters only no stinkin numbers or symbols allowed)."
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};