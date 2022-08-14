// var _ = require("lodash");

// var postAndComment = [
//   { postId: "Vs4x_SgrX", answer: "Lorem Ipsum" },
//   {
//     postId: "wesIbmYl1",
//     answer: "lorem ipsum dolor sit amet, consectetur adipiscing",
//   },
//   {
//     postId: "wesIbmYl1",
//     answer: "lorem ipsum dolor sit amet, consectetur adipiscing",
//   },
//   { postId: "Vs4x_SgrX", answer: "asdsadas" },
//   { postId: "Vs4x_SgrX", answer: "fffff" },
//   { postId: "ZK-LVFkgt", answer: "asdsa" },
//   { postId: "Vs4x_SgrX", answer: "sadsa" },
// ];

// answer.forEach((answer, index) => (answer.seqq = index + 1));
// const result = Object.values(
//   answer.reduce((res, obj) => {
//     res[obj.postId] = res[obj.postId] || {
//       postId: obj.postId,
//       answer: [],
//     };
//     // res[obj.postId]["answer" + obj.seqq] = child.push(obj.answer);
//     res[obj.postId].answer.push(obj.answer);
//     return res;
//   }, [])
// );
// const map = new Map();
// PostAndComment.forEach((item) => map.set(item._id, item));
// result.forEach((answer) =>
//   map.set(answer.postId, {
//     ...map.get(answer.postId),
//     ...answer,
//   })
// );

// const margerArr = Array.from(map.values());
// console.log(margerArr);

// const responses = [
//   {
//     data: {
//       id: "123",
//       capacity: 20,
//       childNested: [{ date: { name: "foo1" } }, { date: { name: "foo2" } }],
//     },
//   },
//   {
//     data: {
//       id: "456",
//       capacity: 40,
//       childNested: [{ date: { name: "bar" } }],
//     },
//   },
// ];

// const output = responses.flatMap(({ data }) =>
//   data.childNested.map(({ date: { name } }) => ({
//     id: data.id,
//     name: data.capacity,
//     date: name,
//   }))
// );

// console.log(output);

const map = [
  {
    _id: "Vs4x_SgrX",
    question: "THings ",
    postId: "Vs4x_SgrX",
    answer: [
      "Lorem Ipsum",
      "asdsadas",
      "sdfds",
      "aaaaaaaaaaaaaaaaaa",
      "aaasd",
      "sdsds",
      "fffff",
      "sadsa",
    ],
  },
  {
    _id: "wesIbmYl1",
    question: "lorem ipsum dolor sit amet, consectetur adipiscing",
    postId: "wesIbmYl1",
    answer: [
      "lorem ipsum dolor sit amet, consectetur adipiscing",
      "lorem ipsum dolor sit amet, consectetur adipiscing",
      "lorem ipsum dolor sit amet, consectetur adipiscing",
      "lorem ipsum dolor sit amet, consectetur adipiscing",
      "lorem ipsum dolor sit amet, consectetur adipiscing",
    ],
  },
  { _id: "tGuFLCsBh", question: "yo wtf is going on" },
  {
    _id: "ZK-LVFkgt",
    question: "yo wtf is going on",
    postId: "ZK-LVFkgt",
    answer: ["asdsa"],
  },
];

const outPut = map.flatMap(({ answer }) => console.log(answer));
