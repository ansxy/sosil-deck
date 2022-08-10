var mongoose = require("mongoose");
var shortid = require("shortid");

let post = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    maxLength: 10000,
  },
  date: {
    type: Date,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
  _id: {
    type: String,
    default: shortid.generate,
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", post);

export default Post;