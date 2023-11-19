const { Schema, Types } = require('mongoose');

ingredientSchema = new Schema(
    {
        ingredientId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        ingredientName: {
            type: String,
            required: true,
            maxLength: 50
        },
    }
)

//add fields for nutritional values

module.exports = ingredientSchema;