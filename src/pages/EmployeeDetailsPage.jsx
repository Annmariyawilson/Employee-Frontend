import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeTable from '../components/EmployeeTable';
import EmployeeModal from '../components/EmployeeModal';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EmployeeDetailsPage = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('https://employee-c42l.onrender.com/employees'); 
            setEmployees(response.data);
        } catch (error) {
            console.error("Error fetching employees: ", error);
            toast.error("Failed to fetch employee data.");
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleAdd = () => {
        setSelectedEmployee(null);
        setIsModalOpen(true);
    };

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedEmployee(null);
    };

    const handleSave = async (employeeData) => {
        try {
            if (selectedEmployee) {
                await axios.put(`https://employee-c42l.onrender.com/update/${selectedEmployee._id}`, employeeData);
                toast.success("Employee updated successfully!");
            } else {
                await axios.post('https://employee-c42l.onrender.com/addemp', employeeData);
                toast.success("Employee added successfully!");
            }
            fetchEmployees();
            handleCloseModal(); 
        } catch (error) {
            console.error("Error saving employee: ", error);
            toast.error("Failed to save employee data.");
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://employee-c42l.onrender.com/deleteemp/${id}`);
            toast.success("Employee deleted successfully!");
            fetchEmployees();
        } catch (error) {
            console.error("Error deleting employee: ", error);
            toast.error("Failed to delete employee.");
        }
    };

    return (
        <>
        <Navbar/>
                <div className="container mt-4">
            <h2>Employee Details</h2>
            <button className="btn btn-success mb-3" onClick={handleAdd}>
                Add Employee
            </button>
            <EmployeeTable 
                employees={employees} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
            />
            {isModalOpen && (
                <EmployeeModal 
                    isOpen={isModalOpen} 
                    onClose={handleCloseModal} 
                    onSave={handleSave} 
                    employee={selectedEmployee} 
                />
            )}
        </div>
        <Footer/>
        </>
        
    );
};

export default EmployeeDetailsPage;
