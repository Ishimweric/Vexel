import StartQuizBtn from "./StartQuizBtn"
function Header(props){
  return (
    <header className="sticky top-0 w-full bg-white border-b h-16 shadow-sm">
      <article className="flex items-center justify-between px-4">
        <img src="images/vexel-logo.png" className="w-16"/>
        {!props.showStickyCta && <StartQuizBtn/>}
      </article>
    </header>
  )
}

export default Header