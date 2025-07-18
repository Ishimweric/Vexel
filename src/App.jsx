import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/HomePage"
import Quiz from "./pages/QuizPage"
import Results from "./pages/ResultsPage"
import { useState } from "react"
function App(){
  
  const [isHeroCtaVisible, setIsHeroCtaVisible] = useState(true);

  function handleHeroCtaVisibility(isVisible){
    setIsHeroCtaVisible(isVisible);
  }

  return(
    <Router>
      <Header showStickyCta = {isHeroCtaVisible}/>
      <div className="flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home onBtnVisibilityChange = {handleHeroCtaVisibility}/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/results" element= {<Results/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App