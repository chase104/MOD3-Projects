/* eslint-disable no-undef */
const mongoose = require('mongoose')



const fruitSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        age: {type: Number, required: true, min: 0},
        canEat: Boolean
    },
    {timestamps: true}
);

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;