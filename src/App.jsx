import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/HomePage"
function App(){
  return(
    <Router>
      <Header/>
      <div className="flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App