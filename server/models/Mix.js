const { Schema, model } = require('mongoose');
// const Comment = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const mixSchema = new Schema({
    mixName: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50,
        trim: true,
    },
    mixCreator: {
        type: String,
        required: true,
        time: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    ingredients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ingredient',
        },
    ],
    comments: [
        {
          commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
          },
          commentAuthor: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
          },
        },
      ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


// write virtuals that aggregate different macrotypes

const Mix = model('Mix', mixSchema);

module.exports = Mix;