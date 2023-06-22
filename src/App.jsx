import Navigation from "./components/Navigation"
import Collection from "./Pages/Collection"
import Detail from "./Pages/Detail"
import Pokemon from "./Pages/Pokemon"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Pokemon/>} ></Route>
        <Route path="/detail/:id" element={<Detail/>} ></Route>
        <Route path="/collection" element={<Collection/>} ></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
