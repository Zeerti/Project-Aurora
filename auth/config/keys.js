const { Model } = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
    console.log("NODE SET TO NON-PROD-MODE, LOADING .ENV VARIABLES")
    require('dotenv').config();

    module.exports = {
        mongoURI: `mongodb+srv://admin:${process.env.DB_PW}@aurora.q8bz0.mongodb.net/Aurora?retryWrites=true&w=majority`
    };
} else {
    module.exports = {
        mongoURI: `mongodb+srv://admin: --- REPLACEWITHDBPW --- @aurora.q8bz0.mongodb.net/Aurora?retryWrites=true&w=majority`
    }
}

// Exports out the mongoDB connection string. This will import the DB password from the .env file
