import answer from "../../../utils//models/answer";
import connectMongo from "../../../utils/connectMongo";

export default async function addTest(req, res) {
  try {
    console.log(req.body.answer);
    await connectMongo();
    console.log("Creating Data");
    const test = await answer.create({
      answer: req.body.answer,
      postId: req.body.postId,
    });
    console.log("Created Data");
    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
