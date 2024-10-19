import React, { useState } from 'react';
import EmployeeModal from './EmployeeModal';

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee); 
        setIsModalOpen(true);      
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);       
        setSelectedEmployee(null);    
    };

    if (!Array.isArray(employees) || employees.length === 0) {
        return <p>No employees available.</p>;
    }

    return (
        <>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Qualification</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp._id}>
                            <td>{emp.firstname}</td>
                            <td>{emp.lastname}</td>
                            <td>{emp.age}</td>
                            <td>{emp.qualification}</td>
                            <td>{emp.email}</td>
                            <td>
                                <button className="btn btn-warning me-3" onClick={() => handleEdit(emp)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => onDelete(emp._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EmployeeModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={onEdit}
                employee={selectedEmployee} 
            />
        </>
    );
};

export default EmployeeTable;
