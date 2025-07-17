import { useState } from "react"
import quizQuestionsData from "../data/questions.json"
import ProgressBar from "../components/ProgressBar";
import Question from "../components/Question";

function Quiz(){
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion= quizQuestionsData[currentQuestionIndex];
  const [isClicked, setIsClicked] = useState(false);
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);

  const totalQuestions = quizQuestionsData.length;

  const question = currentQuestion.questionText;
  const answers = currentQuestion.answerOptions;

  function updateQuestion(){
    // console.log("clicked")
    setCurrentQuestionIndex((prevQuestionIndex)=> prevQuestionIndex + 1);
  }

  function handleIsClicked(){
    setIsClicked((prevValue) => !prevValue);
  }

  function handleIsSelected(selectedId){
    setSelectedAnswerId(selectedId);
  }

  return (
    <main className="min-h-[calc(100vh-4rem)] flex justify-center w-full bg-[rgb(226,232,240)]">
      <div className="w-2/3 py-2 flex flex-col gap-2">
        <section className="flex justify-between py-1">
          <p className="text-slate-950 text-2xl font-bold">Question {currentQuestionIndex + 1} of {totalQuestions}</p>
          <p className="text-green-500 text-2xl font-bold">30s</p>
        </section>
        <ProgressBar
          currentQuestionIndex = {currentQuestionIndex}
          totalQuestions = {totalQuestions}
        />
        <Question
          question = {question}
          answers = {answers}
          handleIsSelected = {handleIsSelected}
          selectedAnswerId = {selectedAnswerId}
        />
        <section className="grid place-content-center pt-6">
          <button className="px-5 py-2 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-l-full rounded-r-full hover:from-blue-700 hover:to-violet-700 transition-all duration-200" onClick={updateQuestion}>Select Answer</button>
        </section>
      </div>
    </main>
  )
}

export default Quiz