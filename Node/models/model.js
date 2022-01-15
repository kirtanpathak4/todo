const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    todo: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("todo", modelSchema);