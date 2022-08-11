import post from "../../../utils//models/post";
import connectMongo from "../../../utils/connectMongo";

export default async function addTest(req, res) {
  try {
    await connectMongo();
    console.log("Creating Data");
    const body = req.body;
    if (!body.testpost) {
      res.status(500).json({ msg: "fill the post pls" });
    }
    // res.status(200).json({ msg: body.testpost });
    const test = await post.create({
      question: body.testpost,
    });
    console.log("Created Data");
    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
