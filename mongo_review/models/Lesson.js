/* eslint-disable no-undef */
const mongoose = require('mongoose')



const LessonSchema = new mongoose.Schema(
    {
        lessonNumber: {type: Number, required: true, unique: true},
        topic: { type: String, required: true },
        instructor: String
    },
    {timestamps: true}
);

const Lesson = mongoose.model('Lesson', LessonSchema);

module.exports = Lesson;