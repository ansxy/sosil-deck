import post from "../../../utils//models/post";
import connectMongo from "../../../utils/connectMongo";
import answer from "../../../utils/models/answer";

export default async function getAllPost(req, res) {
  try {
    await connectMongo();
    //Get All Post
    const posts = await post.find();
    const PostAndComment = posts.map((data) => ({
      _id: data._id,
      question: data.question,
    }));

    //Get Answers For Every post
    const allAnswer = await answer.find();
    const answers = allAnswer.map((data) => ({
      postId: data.postId,
      answer: data.answer,
    }));

    //Merger post and answer data into 1
    const map = new Map();
    PostAndComment.forEach((item) => map.set(item._id, item));
    answers.forEach((answer) =>
      map.set(answer.postId, { ...map.get(answer.postId), ...answer })
    );
    const margerArr = Array.from(map.values());
    return margerArr;
  } catch (error) {
    console.log(error);
  }
}
