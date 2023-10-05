
import './App.css';
import VehiclePage from './pages/vehicles';
import LoginPage from './pages/LoginPage';
import { UseGetUser } from './hooks/users';
import ApiLoader from './utils/ApiLoader';
import React, { Suspense, } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import VehicleListPage from './pages/vehicles/VehicleListPage';

function App() {
  let token = localStorage.getItem("token");
  const { data, error, isLoading, } = UseGetUser()
  console.log({ data, error, token })
  return (
    <Suspense fallback={<ApiLoader />}>
      <>
        {token && data && !error ? (
          <Routes>
            <Route path="/vehicle/add" element={<VehiclePage />} />
            <Route path="/vehicle" element={<VehicleListPage />} />
            <Route path="*" element={<Navigate to="/vehicle" replace />} />
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
