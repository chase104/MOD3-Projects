/* eslint-disable no-undef */
const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); 
require('./config/database.cjs')

const { createTweet, getTweets, updateTweet, deleteTweet } = require('./controllers/tweets.cjs')

const app = express();
app.use(express.json());

// create user

// log in

// log out


app.listen(4002, () => {
    console.log("listening on 4002")
})
