import StartQuizBtn from "../components/StartQuizBtn"
import { CircleCheck, Clock, Trophy } from "lucide-react"
import { useEffect, useRef } from "react"

function Home(){
  const quizBtn = useRef();

  const quizBtnObserver = new IntersectionObserver((entries)=>{
    const entry = entries[0]
    console.log(entry.isIntersecting)
  })

  useEffect(()=>{
    quizBtnObserver.observe(quizBtn.current);
    return(
      ()=>{
        if (quizBtn.current){
          quizBtnObserver.unobserve(quizBtn.current);
        }
      }
    )
  },[])

  return(
    <main className="min-h-[calc(100vh-8rem)] w-2/3">
      <h1 className="my-3 sm:text-6xl text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">Welcome to Quiz Challenge!</h1>
      <p className="text-xl text-center text-gray-500 my-1">
        Test your knowledge with our exciting quiz! Answer questions across various topics and see how well you can score.
        Are you ready for the challenge?
      </p>
      <div ref={quizBtn} className="grid place-content-center my-5">
        <StartQuizBtn/>
      </div>
      <section className="flex flex-col gap-10 min-h-[calc(100vh-4rem)] py-5">
        <h2 className="text-4xl text-slate-800 font-bold text-center">How It Works</h2>
        <article className=" flex sm:flex-row flex-col justify-between gap-5">
          <div className="flex flex-col items-center gap-2 px-5 bg-white rounded-md py-5 transition-all duration-300  hover:shadow-card-hover-glow shadow">
            <div className="w-12 h-12 bg-violet-200 rounded-full grid place-content-center">
              <CircleCheck className=" text-violet-800"/>
            </div>
            <h3 className="text-slate-800 text-xl font-semibold">Answer Question</h3>
            <p className="text-center text-slate-600">Choose the correct answer from multiple choice options for each question.</p>
          </div>
          <div className="flex flex-col items-center gap-2 px-5 bg-white rounded-md py-5 transition-all duration-300  hover:shadow-card-hover-glow hover:shadow-green-500 shadow">
            <div className="w-12 h-12 bg-green-200 rounded-full grid place-content-center">
              <Clock className=" text-green-800"/>
            </div>
            <h3 className="text-slate-800 text-xl font-semibold">Beat the Clock</h3>
            <p className="text-center text-slate-600">Each question has a time limit. Think fast and choose wisely!</p>
          </div>
          <div className="flex flex-col items-center gap-2 px-5 bg-white rounded-md py-5 transition-all duration-300  hover:shadow-card-hover-glow hover:shadow-blue-500 shadow">
            <div className="w-12 h-12 bg-blue-200 rounded-full grid place-content-center">
              <Trophy className=" text-blue-800"/>
            </div>
            <h3 className="text-slate-800 text-xl font-semibold">Get Your Score</h3>
            <p className="text-center text-slate-600">See your results and review answers to learn from any mistakes.</p>
          </div>
        </article>
        <article className="flex flex-col">
          <h2 className="text-2xl text-slate-800 font-bold text-center">Challenge Yourself Today</h2>
          <div className="flex gap-3 justify-center py-6">
            <p className="bg-white text-slate-950 rounded-l-full rounded-r-full px-4 py-2 shadow-md">5 Questions</p>
            <p className="bg-white text-slate-950 rounded-l-full rounded-r-full px-4 py-2 shadow-md">Multiple Choice</p>
            <p className="bg-white text-slate-950 rounded-l-full rounded-r-full px-4 py-2 shadow-md">Instant Results</p>
            <p className="bg-white text-slate-950 rounded-l-full rounded-r-full px-4 py-2 shadow-md">Answer Review</p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Home