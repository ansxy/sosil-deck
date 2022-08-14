import Header from "../components/header";
import QuestionBig from "../components/questionBig";
import QuestionSmall from "../components/questionSmall";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Header>Lorem Ipsum</Header>
        <QuestionBig>big question</QuestionBig>
        <QuestionSmall>small question</QuestionSmall>
      </div>
    </>
  );
}
