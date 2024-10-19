import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Navbar />

            <div className="container mt-5">
                <div className="text-center">
                    <h1 className="mb-4" style={{ color: '#390432', fontWeight: 'bold' }}>
                        Welcome to Employee Management System
                    </h1>
                    <p className="lead mb-4">
                        Manage your employees efficiently with our system. From tracking attendance to performance evaluation, we have you covered.
                    </p>

                    <Link to="/employees">
                        <button className="btn btn-primary btn-lg" style={{ backgroundColor: '#390432', border: 'none' }}>
                            View Employees
                        </button>
                    </Link>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4 text-center mb-4">
                        <i className="fa-solid fa-users fa-3x" style={{ color: '#390432' }}></i>
                        <h3 className="mt-3">Team Management</h3>
                        <p>Effortlessly manage your team's information and track performance.</p>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <i className="fa-solid fa-calendar-check fa-3x" style={{ color: '#390432' }}></i>
                        <h3 className="mt-3">Attendance Tracking</h3>
                        <p>Keep track of employee attendance with ease and accuracy.</p>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <i className="fa-solid fa-chart-line fa-3x" style={{ color: '#390432' }}></i>
                        <h3 className="mt-3">Performance Analysis</h3>
                        <p>Analyze performance metrics to drive improvements and growth.</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4 text-center mb-4">
                        <i className="fa-solid fa-comments fa-3x" style={{ color: '#390432' }}></i>
                        <h3 className="mt-3">Feedback System</h3>
                        <p>Gather feedback from employees to foster a positive work environment.</p>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <i className="fa-solid fa-lock fa-3x" style={{ color: '#390432' }}></i>
                        <h3 className="mt-3">Secure Data</h3>
                        <p>Your data is safe with us. We prioritize security and confidentiality.</p>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <i className="fa-solid fa-bell fa-3x" style={{ color: '#390432' }}></i>
                        <h3 className="mt-3">Notifications</h3>
                        <p>Stay updated with notifications for important events and changes.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
