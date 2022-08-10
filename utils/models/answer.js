var mongoose = require("mongoose");

let answer = new mongoose.Schema({
  answer: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
});
module.exports = mongoose.models.Answers || mongoose.model("Answers", answer);
