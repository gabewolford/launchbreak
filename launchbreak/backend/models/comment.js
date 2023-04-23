// Require the Mongoose package
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        commentText: { type: String, min: 0, max: 300, required: true },
        launchId: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Comment', commentSchema)