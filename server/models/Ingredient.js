const { Schema, model } = require('mongoose');

ingredientSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        calories: {
            type: Number,
            required: true,
        },
        protein: {
            type: Number,
            required: true,
        },
        fats: {
            type: Number,
            required: true,
        },
        carbs: {
            type: Number,
            required: true,
        },
        sodium: {
            type: Number,
            required: true
        }
    }
);

const Ingredient = model('Ingredient', ingredientSchema);

module.exports = Ingredient;