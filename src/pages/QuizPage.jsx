import { useState } from "react"
import quizQuestionsData from "../data/questions.json"
import ProgressBar from "../components/ProgressBar";
import Question from "../components/Question";

function Quiz(){
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(quizQuestionsData[currentQuestionIndex]);
  const totalQuestions = quizQuestionsData.length;
  const question = currentQuestion.questionText;
  const answers = currentQuestion.answerOptions;
  // console.log(answers)

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
        />
        <section></section>
      </div>
    </main>
  )
}

export default Quiz