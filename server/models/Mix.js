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


// can't get these virtuals to show up on server. writing resolver functions instead

// // Virtual to calculate total calories
// mixSchema.virtual('totalCalories').get(function () {
//   return this.ingredients.reduce((total, ingredient) => total + ingredient.calories, 0);
// });

// // Virtual to calculate total protein
// mixSchema.virtual('totalProtein').get(function () {
//   return this.ingredients.reduce((total, ingredient) => total + ingredient.protein, 0);
// });

// // Virtual to calculate total fats
// mixSchema.virtual('totalFats').get(function () {
//   return this.ingredients.reduce((total, ingredient) => total + ingredient.fats, 0);
// });

// // Virtual to calculate total carbs
// mixSchema.virtual('totalCarbs').get(function () {
//   return this.ingredients.reduce((total, ingredient) => total + ingredient.carbs, 0);
// });

// // Virtual to calculate total sodium
// mixSchema.virtual('totalSodium').get(function () {
//   return this.ingredients.reduce((total, ingredient) => total + ingredient.sodium, 0);
// });

const Mix = model('Mix', mixSchema);

module.exports = Mix;