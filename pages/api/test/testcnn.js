import connectMongo from "../../../utils/connectMongo";
import post from "../../../utils/models/post";

export default async function addTest(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
