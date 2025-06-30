// App.js
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './component/screens/home/Home';
import LoginPage from './component/forms/login/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('loggedIn') === 'true';
  });

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '123456') {
      localStorage.setItem('loggedIn', 'true');
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home onLogout={handleLogout} />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
