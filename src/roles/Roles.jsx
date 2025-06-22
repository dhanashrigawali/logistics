import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import useApi from '../hooks/useFetch.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export default function Roles() {
    const navigate = useNavigate();
    const { roles, setRoles } = useContext(AppContext);
    const { loading, error, data, callApi } = useApi();
    const { auth } = useAuth();
    useEffect(() => {
        async function fetchRoles() {
            const result = await callApi({ method: 'POST', url: '/prod/v1/roles', headers: { 'METHOD': 'GETALL' } });
            setRoles(result);
        }
        fetchRoles();
    }, []);
    return (
        <div>
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="page-header"></div>
                    <div className="row">
                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Role List</h4>
                                    <button
                                        type="button"
                                        className="btn btn-gradient-primary btn-rounded btn-fw btn-float-right"
                                        style={{ float: 'right', marginBottom: 16 }}
                                        onClick={() => navigate('createrole')}
                                    >
                                        Create Role
                                    </button>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th><b>Role Name</b></th>
                                                <th><b>Description</b></th>
                                                <th><b>Created On</b></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {roles.map((role, idx) => (
                                                <tr key={idx}>
                                                    <td>{role.name}</td>
                                                    <td>{role.description}</td>
                                                    <td>{role.createdOn}</td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container-fluid d-flex justify-content-between">
                        <span className="text-muted d-block text-center text-sm-start d-sm-inline-block">
                            Copyright © abc.com 2025
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    );
}