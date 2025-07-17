import { useState } from "react"
import quizQuestionsData from "../data/questions.json"

function Quiz(){
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(quizQuestionsData[currentQuestionIndex]);
  const totalQuestions = quizQuestionsData.length;
  console.log(totalQuestions);

  return (
    <main className="min-h-[calc(100vh-4rem)] flex justify-center w-full">
      <div className="w-2/3 py-2">
        <section className="flex justify-between py-1">
          <p className="text-slate-950 text-2xl font-bold">Question {currentQuestionIndex + 1} of {totalQuestions}</p>
          <p className="text-green-800 text-2xl font-bold">30s</p>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </div>
    </main>
  )
}

export default Quiz