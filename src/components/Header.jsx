import StartQuizBtn from "./StartQuizBtn"
function Header(){
  return (
    <header className="sticky top-0 w-full bg-white border-b h-16 shadow-sm">
      <article className="flex items-center justify-around">
        <img src="images/vexel-logo.png" className="w-16"/>
        <StartQuizBtn/>
      </article>
    </header>
  )
}

export default Header