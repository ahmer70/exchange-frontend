
import './App.css';
import ExchangePage from './pages/exchange';
import LoginPage from './pages/LoginPage';
import { UseGetUser } from './hooks/users';
import ApiLoader from './utils/ApiLoader';
import React, { Suspense, } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  let token = localStorage.getItem("token");
  const { data, error, isLoading, } = UseGetUser()

  return (
    <Suspense fallback={<ApiLoader />}>
      <>
        {token && data && !error ? (
          <Routes>
            <Route path="/exchange" element={<ExchangePage />} />
            <Route path="*" element={<Navigate to="/exchange" replace />} />
          </Routes>
        ) : token && isLoading ? <ApiLoader /> : (
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        )}
      </>
    </Suspense>
  );
}

export default App;
