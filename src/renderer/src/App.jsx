import Home from './components/Home'
import OrderNumber from './components/OrderNumber'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OrderNumber" element={<OrderNumber />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
