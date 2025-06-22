import React, { useState, createContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../header/Header';
import { AppProvider } from '../context/AppContext';
import { useAuth } from '../context/AuthContext'; // <-- Import useAuth

export const UsersContext = createContext();

export default function DashboardLayout() {
    const { auth } = useAuth();
    return (
        <AppProvider>


            <div className="container-fluid page-body-wrapper" style={{ display: 'flex', minHeight: '100vh' }}>
                <Header />
                <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{ width: 220, background: '#f5f5f5', paddingTop: 100 }}>
                    <ul className="nav" style={{ listStyle: 'none', padding: 0 }}>
                         <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard">
                                <span className="menu-title">Dashboard</span>
                                <i className="mdi mdi-home menu-icon"></i>
                            </NavLink>
                        </li>
                        {auth && auth.role.name === 'Manager' && <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard/users">
                                <span className="menu-title">Users</span>
                                <i className="mdi mdi-account-multiple menu-icon"></i>
                            </NavLink>
                        </li>}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard/tasks">
                                <span className="menu-title">Tasks</span>
                                <i className="mdi mdi-format-list-bulleted-type menu-icon"></i>
                            </NavLink>
                        </li>
                        {auth && auth.role.name === 'Manager' && <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard/roles">
                                <span className="menu-title">Roles</span>
                                <i className="mdi mdi-account-key menu-icon"></i>
                            </NavLink>
                        </li>}
                        {auth && auth.role.name === 'Manager' &&<li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard/clients">
                                <span className="menu-title">Clients</span>
                                <i className="mdi mdi-account-star menu-icon"></i>
                            </NavLink>
                        </li>}
                        {/* Add more links as needed */}
                    </ul>
                </nav>
                {/* Main Content */}
                <main style={{ flex: 1, padding: 24, marginTop: 46 }}>
                    <Outlet />
                </main>
            </div>
        </AppProvider>

    );
}