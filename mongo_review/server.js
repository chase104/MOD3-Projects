/* eslint-disable no-undef */
const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); 
require('./config/database.js')

const { createLesson, findLessons, updateLesson, deleteLesson } = require('./controllers/lessons.js')


const app = express();
app.use(express.json());

// CRUD - Create, Read, Update, Delete

// C  create data
app.post('/lessons', createLesson)

// R read data
app.get('/lessons', findLessons)

// U update our data (MANY WAYS)
app.put('/lessons/:lessonId', updateLesson)

// D delete some data
app.delete('/lessons/:lessonId', deleteLesson)

app.listen(4002, () => {
    console.log("listening on 4002")
})
