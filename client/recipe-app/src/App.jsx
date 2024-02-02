import "./app.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Auth from "./pages/auth"
import UploadCars from "./pages/upload-car"
import SavedCars from "./pages/saved-cars"
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
          <Route path="/upload-cars" element={<UploadCars/>}/>
          <Route path="/saved-cars" element={<SavedCars/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
