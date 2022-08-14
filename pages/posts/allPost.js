import getAllPost from "../api/test/allpost";

export const getServerSideProps = async () => {
  try {
    const data = await getAllPost();
    return {
      props: {
        data: data.map((datas) => datas),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

const addAnswer = async (event) => {
  event.preventDefault();
  const data = {
    postId: event.target.answer.className,
    answer: event.target.answer.value,
  };
  const JSONdata = JSON.stringify(data);

  const endpoint = "/api/test/answer";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };
  const response = await fetch(endpoint, options);
  response.json();
};
//TODO : error it not show all comment for post (Fixed)
export default function allPost({ data }) {
  return (
    <div>
      {data.flatMap((datas) => (
        <div key={datas._id}>
          <form method="post" onSubmit={addAnswer}>
            <h2 id="postId">{datas._id}</h2>
            <p>{datas.question}</p>
            {datas.answer.map((data, i) => (
              <p key={i + 1}>{data}</p>
            ))}
            <input
              className={datas._id}
              type="text"
              placeholder="comment"
              id="answer"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ))}
      <p></p>
    </div>
  );
} //TODO : Make IT more Clean i thinks
