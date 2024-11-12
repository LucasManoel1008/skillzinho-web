import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./assets/pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  return (
    <>
      <BrowserRouter basename="/skillzinho-web">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
