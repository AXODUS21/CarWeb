import "./app.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Auth from "./pages/auth"
import CreateRecipe from "./pages/upload-car"
import SavedRecipe from "./pages/saved-cars"
import Navbar from "./component/navbar"

function App() {

  return (
    <>
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/create-recipe" element={<CreateRecipe/>}/>
          <Route path="/saved-recipe" element={<SavedRecipe/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
