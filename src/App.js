import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Marvel from './components/Marvel/Marvel';

function App() {
  const isAuthenticated = !!localStorage.getItem('user'); 

  useEffect(() => {
    if (!isAuthenticated && window.location.pathname === '/') {
      window.location.href = '/login';
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route 
          path="/marvel" 
          element={isAuthenticated ? <Marvel /> : <Navigate to="/login" />} 
        />

        <Route 
          path="*" 
          element={<Navigate to={isAuthenticated ? "/marvel" : "/login"} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
