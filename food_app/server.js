/* eslint-disable no-undef */
const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
// now I can use process.env.VARIABLE_NAME
// when my server starts, I want to connect to my database
require('./config/database.js')
const app = express();


app.listen(4001, () => {
    console.log("listening on 4001")
})
