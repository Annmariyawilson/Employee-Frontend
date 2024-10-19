import React, { useState, useEffect } from 'react';

const EmployeeModal = ({ isOpen, onClose, onSave, employee }) => {
    const [employeeData, setEmployeeData] = useState({ firstname: '', lastname: '', age: '', qualification: '', email: '' });

    useEffect(() => {
        if (employee) {
            setEmployeeData(employee);
        } else {
            setEmployeeData({ firstname: '', lastname: '', age: '', qualification: '', email: '' });
        }
    }, [employee]);

    const handleChange = (e) => {
        setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(employeeData); 
        onClose(); 
    };

    return (
        <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="employeeModalLabel" aria-hidden={!isOpen}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="employeeModalLabel">{employee ? 'Edit Employee' : 'Add Employee'}</h5>
                        <button type="button" className="close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" name="firstname" value={employeeData.firstname} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control" name="lastname" value={employeeData.lastname} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Age</label>
                                <input type="number" className="form-control" name="age" value={employeeData.age} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Qualification</label>
                                <input type="text" className="form-control" name="qualification" value={employeeData.qualification} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" value={employeeData.email} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                            <button type="submit" className="btn btn-primary">{employee ? 'Update' : 'Add'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeModal;
