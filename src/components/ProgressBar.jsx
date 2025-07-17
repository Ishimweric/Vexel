function ProgressBar({currentQuestionIndex, totalQuestions}){
  const currentWidth = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  console.log(currentWidth)

  return(
    <section className="bg-blue-50 w-full rounded-lg h-4 opacity-90">
      <div className="bg-slate-950 h-full rounded-lg" style={{width: `${currentWidth}%`}}></div>
    </section>
  )
}

export default ProgressBar