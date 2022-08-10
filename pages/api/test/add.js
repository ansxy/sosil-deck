import post from "../../../utils//models/post";
import connectMongo from "../../../utils/connectMongo";

export default async function addTest(req, res) {
  try {
    await connectMongo();
    console.log("Creating Data");
    const test = await post.create({
      question: "lorem ipsum dolor sit amet, consectetur adipiscing",
    });
    console.log("Created Data");
    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
