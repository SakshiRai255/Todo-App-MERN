const mongoose = require("mongoose")

const todoModal = new mongoose.Schema({
    title: {
        type: String,
        require: [true,"title is required"],
        maxlength: [200,"Your maximum length is 200"],
        trim :true,
    },
    task: [String],
        isCompleted: {
            type: Boolean,
            default: false,
        }
  }, {
        timestamps: true
    }
);

module.exports = mongoose.model("Todo",todoModal);
