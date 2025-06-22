import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [tasks, setTasks] = useState([]);

    const [roles, setRoles] = useState([]);
    const [clients, setClients] = useState([]);
    return (
        <AppContext.Provider value={{ users, setUsers, tasks, setTasks, roles, setRoles, clients, setClients }}>
            {children}
        </AppContext.Provider>
    );
}