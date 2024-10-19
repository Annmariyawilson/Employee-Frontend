import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start" style={{ padding: '2rem 0', marginTop: 'auto', boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)', backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 mb-4">
                        <h5 style={{ color: '#390432', fontWeight: 'bold', fontSize: '1.2rem' }}>About Us</h5>
                        <p style={{ color: '#555', lineHeight: '1.5' }}>
                            We are a dedicated team of professionals committed to providing exceptional services in employee management solutions. Our goal is to streamline HR processes and enhance productivity.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-4">
                        <h5 style={{ color: '#390432', fontWeight: 'bold', fontSize: '1.2rem' }}>Contact Us</h5>
                        <p style={{ color: '#555', lineHeight: '1.5' }}>Email: <a href="mailto:employeemanagement@gmail.com" style={{ color: '#390432', textDecoration: 'underline' }}>employeemanagement@gmail.com</a></p>
                        <p style={{ color: '#555', lineHeight: '1.5' }}>Phone: <span style={{ color: '#390432' }}>+91 22222222222</span></p>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-4">
                        <h5 style={{ color: '#390432', fontWeight: 'bold', fontSize: '1.2rem' }}>Services</h5>
                        <ul style={{ listStyle: 'none', padding: '0', color: '#555', lineHeight: '1.5' }}>
                            <li>🚀 Employee Onboarding</li>
                            <li>💰 Payroll Management</li>
                            <li>📊 Performance Tracking</li>
                            <li>📚 Training & Development</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <h5 style={{ color: '#390432', fontWeight: 'bold', fontSize: '1.2rem' }}>Feedback</h5>
                        <p style={{ color: '#555', lineHeight: '1.5' }}>
                            We value your feedback! Let us know how we can improve our services or if you have any suggestions.
                        </p>
                        <div style={{
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                            padding: '20px',
                            margin: '0 auto',
                            maxWidth: '600px'
                        }}>
                            <form style={{ display: 'flex', flexDirection: 'column' }}>
                                <textarea
                                    rows="4"
                                    placeholder="Your feedback..."
                                    style={{
                                        padding: '15px',
                                        marginBottom: '15px',
                                        border: '1px solid #ccc',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        resize: 'none',
                                        transition: 'border-color 0.3s ease'
                                    }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = '#390432'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = '#ccc'}
                                ></textarea>
                                <button type="submit" style={{
                                    padding: '12px 20px',
                                    backgroundColor: '#390432',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease',
                                    fontSize: '1rem'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a0a56'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#390432'}
                                >
                                    Submit Feedback
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: '#e9ecef', marginTop: '1rem', borderTop: '1px solid #ccc' }}>
                <p style={{ color: '#390432', margin: '0' }}>© {new Date().getFullYear()} Employee Management. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
