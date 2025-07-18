import { Trophy } from "lucide-react"
import StartQuizBtn from "../components/StartQuizBtn"

function Results(){
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full flex justify-center sm:px-0 px-4">
      <div className="sm:w-2/3 w-full py-2 flex flex-col gap-5 mt-4">
        <div className="grid place-content-center">
          <Trophy size={80} className="text-yellow-600"/>
        </div>
        <p className="text-slate-950 text-5xl font-bold text-center">Quiz Results</p>
        <p className="text-xl text-center opacity-60">Excellent work!</p>
        <article className="bg-white rounded-lg shadow-lg shadow-slate-400 flex flex-col items-center gap-5 py-10 mb-4">
          <p className="text-green-600 text-7xl font-bold">10/10</p>
          <p className="text-3xl text-green-600 font-bold">100%</p>
          <p className="text-xl opacity-60">You answered 10 questions correctly!</p>
        </article>
        <article className="flex sm:flex-row flex-col sm:gap-2 gap-3">
          <div className="bg-green-100 rounded-md flex flex-col items-center gap-4 py-4 flex-1 border-2 border-solid border-green-200">
            <p className="text-xl text-green-900 font-bold">Correct Answers</p>
            <p className="text-2xl text-green-800">10</p>
          </div>
          <div className="bg-red-100 rounded-md flex flex-col gap-4 py-4 flex-1 items-center border-2 border-solid border-red-200">
            <p className="text-xl text-red-900 font-bold">Incorrect Answers</p>
            <p className="text-2xl text-red-800">0</p>
          </div>
        </article>
        <article className="flex sm:flex-row flex-col items-center justify-center gap-3">
          <StartQuizBtn/>
          <StartQuizBtn/>
          <StartQuizBtn/>
        </article>
      </div>
    </main>
  )
}

export default Results