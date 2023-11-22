const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

commentSchema = new Schema(
    {
        commentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        commentBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        commentAuthor: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    }
)

module.exports = commentSchema;