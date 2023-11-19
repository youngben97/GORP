const { Schema, model } = require('mongoose');
const Ingredient = require('./Ingredient');
const Comment = require('./Comment');

const mixSchema = new Schema({
    mixName: {
        type: String,
        required: 'Gotta name the mix!',
        minLength: 1,
        maxLength: 50,
        trim: true,
    },
    mixAuthor: {
        type: String,
        required: true,
        time: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    ingredients: [Ingredient],
    comments: [Comment],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


// write virtuals that aggregate nutritional data

const Mix = model('mix', mixSchema);

module.exports = Mix;