import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


export default function Clients() {
    const navigate = useNavigate();
    const { clients, setClients } = useContext(AppContext);

    return (
        <div>
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="page-header"></div>
                    <div className="row">
                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Client List</h4>
                                    <button
                                        type="button"
                                        className="btn btn-gradient-primary btn-rounded btn-fw btn-float-right"
                                        style={{ float: 'right', marginBottom: 16 }}
                                        onClick={() => navigate('createclient')}
                                    >
                                        Create Client
                                    </button>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th><b>Client Name</b></th>
                                                <th><b>Description</b></th>
                                                <th><b>Created On</b></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {clients.map((client, idx) => (
                                                <tr key={idx}>
                                                    <td>{client.name}</td>
                                                    <td>{client.description}</td>
                                                    <td>{client.createdOn}</td>

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