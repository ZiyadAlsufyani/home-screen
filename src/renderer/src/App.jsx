import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import OrderNumber from './components/OrderNumber';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [orderNumber, setOrderNumber] = useState(() => {
    return parseInt(localStorage.getItem('orderNumber')) || 1;
  });

  useEffect(() => {
    const syncWithServer = async () => {
      try {
        const response = await fetch('/last-order');
        if (!response.ok) {
          throw new Error('Server response not ok');
        }
        const data = await response.json();
        const serverOrderNum = data.lastOrderNum + 1;
        
        if (serverOrderNum > orderNumber) {
          setOrderNumber(serverOrderNum);
          localStorage.setItem('orderNumber', serverOrderNum.toString());
        }
      } catch (error) {
        console.error('Failed to sync with server:', error);
      }
    };

    syncWithServer();
  }, []);

  const incrementOrderNumber = () => {
    setOrderNumber(prev => {
      const next = prev + 1;
      localStorage.setItem('orderNumber', next.toString());
      return next;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              orderNumber={orderNumber} 
              incrementOrderNumber={incrementOrderNumber} 
            />
          } 
        />
        <Route
          path="/OrderNumber"
          element={<OrderNumber />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;