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
    // console.log(PostAndComment);

    //Get Answers For Every post
    const allAnswer = await answer.find();
    const answers = allAnswer.map(
      (data) => ({
        postId: data.postId,
        answer: data.answer,
      })
      // console.log(data),

      //   data.reduce((res, obj) => {
      //     res[obj.postId] = res[obj.postId] || {
      //       postId: obj.postId,
      //       answer: obj.answer,
      //     };
      //     return res;
      //   }, [])
    );

    answers.forEach((answer, index) => (answer.seqq = index + 1));
    const result = Object.values(
      answers.reduce((res, obj) => {
        res[obj.postId] = res[obj.postId] || {
          postId: obj.postId,
          answer: [],
        };
        // res[obj.postId]["answer" + obj.seqq] = child.push(obj.answer);
        res[obj.postId].answer.push(obj.answer);
        return res;
      }, [])
    );

    // console.log(answers);
    //Merger post and answer data into 1
    const map = new Map();
    PostAndComment.forEach((item) => map.set(item._id, item));
    result.forEach((answer) =>
      map.set(answer.postId, {
        ...map.get(answer.postId),
        ...answer,
      })
    );
    // console.log(answers);
    const margerArr = Array.from(map.values());
    return margerArr;
  } catch (error) {
    console.log(error);
  }
}
