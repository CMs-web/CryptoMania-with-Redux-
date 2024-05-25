import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import LernMore from "./components/LernMore"
import PageNotFound from "./components/PageNotFound"

const App = () => {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />}/>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/coin/:id" element={<LernMore />}/>
      </Routes>
    </Router>
  )
}

export default App

//  "https://api.coingecko.com/api/v3/search/trending"  
//    `https://api.coingecko.com/api/v3/coins/${id}`