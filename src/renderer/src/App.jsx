import Home from './components/Home';
import OrderNumber from './components/OrderNumber';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [orderNumber, setOrderNumber] = useState(1);

  const incrementOrderNumber = () => {
    setOrderNumber((prevOrderNumber) => prevOrderNumber + 1);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home orderNumber={orderNumber} incrementOrderNumber={incrementOrderNumber} />} />
        <Route
          path="/OrderNumber"
          element={<OrderNumber />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
