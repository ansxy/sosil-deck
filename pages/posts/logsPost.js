import connectMongo from "../../utils/connectMongo";
import post from "../../utils/models/post";

export const getServerSideProps = async () => {
  try {
    await connectMongo();
    console.log("Fetching Data");
    const posts = await post.find();
    console.log("Fetched Data");
    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default function logPost({ posts }) {
  const logPostTest = async () => {
    const res = await fetch("/api/test/testcnn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: " lorem ipsum dolor sit am",
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <form method="post" action="/api/test/add">
          <input type="text" id="first" name="testpost" />
          <br></br>
          <button type="submit">Create Test</button>
        </form>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
        <div>
          <p>{posts.map((data) => data.question)}</p>
        </div>
      </main>
    </div>
  );
}
