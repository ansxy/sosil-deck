import answer from "../../../utils//models/answer";
import connectMongo from "../../../utils/connectMongo";

export default async function addTest(req, res) {
  try {
    await connectMongo();
    console.log("Creating Data");
    const test = await answer.create({
      answer: "Lorem Ipsum",
      postId: "Vs4x_SgrX",
    });
    console.log("Created Data");
    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
