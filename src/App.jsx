import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Location from "./pages/Location"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Nav />
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

