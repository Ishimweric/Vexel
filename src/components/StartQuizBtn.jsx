import { ArrowRight } from "lucide-react"
function StartQuizBtn(){
  return(
    <article>
      <button className="text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-l-full rounded-r-full hover:from-blue-700 hover:to-violet-700 transition-all duration-200 px-6 py-2 text-xl font-bold flex gap-2 items-center">Start Quiz <ArrowRight className="animate-bounce-horizontal"/></button>
    </article>
  )
}

export default StartQuizBtn