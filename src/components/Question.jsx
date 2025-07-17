function Question({question, answers, handleIsSelected, selectedAnswerId}){

  function renderAnswers(){
    return answers.map((answer)=>{
      const answerText = answer.text;
      const answerId = answer.id;
      return <p key={answerId} onClick={()=>handleIsSelected(answerId)} className={`${answerId === selectedAnswerId?"text-white bg-blue-500":"text-slate-950 bg-white hover:bg-[rgb(250,255,250)] hover:shadow-md"}  font-semibold text-xl px-2 py-3 border rounded-md transition-all duration-300 cursor-pointer`}>
        <span className="uppercase">{answerId}.</span> {answerText}
        </p>
    })
  }

  return (
    <section className="py-4 bg-white px-4 rounded-lg">
      <p className="text-center text-2xl font-bold text-slate-950">{question}</p>
      <article className="flex flex-col gap-3 py-5">
        {renderAnswers()}
      </article>
    </section>
  )
}

export default Question