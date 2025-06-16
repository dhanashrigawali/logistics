import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [users, setUsers] = useState([
        {
            fullName: 'Alice Johnson',
            phoneNo: '9876543210',
            emailId: 'alice@email.com',
            role: 'Admin',
            clientName: 'Acme Corp',
            createdOn: '12 May 2025',
        },
        {
            fullName: 'Bob Smith',
            phoneNo: '9123456780',
            emailId: 'bob@email.com',
            role: 'User',
            clientName: 'Beta Ltd',
            createdOn: '15 May 2025',
        },
        {
            fullName: 'Charlie Brown',
            phoneNo: '9988776655',
            emailId: 'charlie@email.com',
            role: 'Manager',
            clientName: 'Gamma Inc',
            createdOn: '14 May 2025',
        },
    ]);
    const [tasks, setTasks] = useState([
        {
            taskName: 'Design Homepage',
            taskDesc: 'Create a responsive homepage layout',
            assignedTo: 'Alice Johnson',
            priority: 'High',
            createdOn: '12 May 2025',
            dueDate: '20 May 2025',
            status: 'Pending',
        },
        {
            taskName: 'Implement API',
            taskDesc: 'Develop RESTful API for user management',
            assignedTo: 'Bob Smith',
            priority: 'Normal',
            createdOn: '15 May 2025',
            dueDate: '25 May 2025',
            status: 'In progress',
        },
        {
            taskName: 'Database Migration',
            taskDesc: 'Migrate database to new server',
            assignedTo: 'Charlie Brown',
            priority: 'Critical',
            createdOn: '14 May 2025',
            dueDate: '30 May 2025',
            status: 'Blocked',
        },
    ]);

    const [roles, setRoles] = useState([
        {
            name: 'Admin',
            description: 'Full access to all features and settings',
            createdOn: '12 May 2025',
        },
        {
            name: 'User',
            description: 'Access to basic features and tasks',
            createdOn: '15 May 2025',
        },
        {
            name: 'Manager',
            description: 'Can manage tasks and view reports',
            createdOn: '14 May 2025',
        },
    ]);
    const [clients, setClients] = useState([
        {
            name: 'Infosys',
            description: 'Leading IT services company',
            contactPerson: 'John Doe',
            emailId: 'abc@infosys.com',
            phoneNo: '1234567890',
            address: '123 Acme St, Springfield',
            createdOn: '12 May 2025',
        },
        {
            name: 'TCS',
            description: 'Global leader in IT services and consulting',
            contactPerson: 'Jane Smith',
            emailId: 'jane@tcs.com',
            phoneNo: '1234567890',
            createdOn: '15 May 2025',
        },
    ]);
    return (
        <AppContext.Provider value={{ users, setUsers, tasks, setTasks, roles, setRoles, clients, setClients }}>
            {children}
        </AppContext.Provider>
    );
}