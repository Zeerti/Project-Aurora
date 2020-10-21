// Exports out various static keys based on if running in DEV or PROD.

// if running in development load the following keys
if (process.env.NODE_ENV !== 'production') {
    console.log("NODE SET TO NON-PROD-MODE, LOADING .ENV VARIABLES")
    require('dotenv').config();

    module.exports = {
        mongoURI: `mongodb+srv://admin:${process.env.DB_PW}@aurora.q8bz0.mongodb.net/Aurora?retryWrites=true&w=majority`,
        
        secretOrKey: process.env.SECRET
    };

// if running in production load the following keys
} else {
    module.exports = {
        mongoURI: `mongodb+srv://admin:PmpzasJieOWVWVzL@aurora.q8bz0.mongodb.net/Aurora?retryWrites=true&w=majority`,
        secretOrKey: "dac9630aec642a428cd73f4be0a03569"
    }
}





