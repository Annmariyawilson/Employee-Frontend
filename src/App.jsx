import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ToastContainer } from 'react-toastify';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage';
import ServiceCard from './pages/ServiceCard';

const App = () => {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/services' element={<ServiceCard />} />
                <Route path="/employees" element={<EmployeeDetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
