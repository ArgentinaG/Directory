import React from 'react';
import '../styles/Table.css';


const Table = () => {

    const employees = [
        { id: 1, name: 'Melissa Moreno', title: 'CEO', salary: '250,000' },
        { id: 2, name: 'Scott Johnson', title: 'Engineer', salary: '150,000' },
        { id: 3, name: 'Massimo Scala', title: 'Web Developer', salary: '189,000' },
        { id: 4, name: 'Laura Donahue', title: 'Recruiter', salary: '100,000' },
        { id: 5, name: 'Hector Bonilla', title: 'Supervisor', salary: '75,000' },
        { id: 6, name: 'Dustin Garza', title: 'Engineer', salary: '95,000' },
        { id: 7, name: 'Valerie Cordova', title: 'Web Developer', salary: '125,000' },
        { id: 8, name: 'Diego Lopez', title: 'Intern', salary: '55,000' },
    ]

    const renderEmployee = (employee, index) => {
        return (
            <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.title}</td>
                <td>{employee.salary}</td>
            </tr>
        )
    }

    return (
        <div className="App">
            <h1>Employee Table</h1>
            <table striped border hover>
                <thread>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Salary</th>
                    </tr>
                </thread>
                <tbody>
                    {employees.map(renderEmployee)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;