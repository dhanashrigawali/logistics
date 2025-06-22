import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import useApi from '../hooks/useFetch.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export default function CreateClient() {
    const [form, setForm] = useState({
        clientName: '',
        description: ''
    });

    const navigate = useNavigate();
    const { clients, setClients } = useContext(AppContext);
    const { loading, error, data, callApi } = useApi();
    const { auth } = useAuth();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCancel = () => {
        navigate('/dashboard/clients');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setClients((prev) => [
            ...prev,
            {
                name: form.clientName,
                description: form.description,
                createdOn: new Date().toLocaleDateString(),
            },
        ]);
        const clientData = {
            CLIENT_NAME: form.clientName,
            DESCRIPTION: form.description,
            CREATED_BY: auth.fullName,
        };
        async function createClient() {
            const result = await callApi({ method: 'POST', url: '/prod/v1/clients', headers: { 'METHOD': 'CREATE' }, data: clientData });
            // setClients(result);
        }
        createClient();
        navigate('/dashboard/clients');
    };

    return (
        <div className="main-panel">
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Create Task</h4>
                                <form className="form-sample" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Client Name</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="clientName"
                                                        value={form.clientName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Client Description</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="description"
                                                        value={form.description}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-12 text-end">
                                            <button type="submit" className="btn btn-gradient-primary me-2">Submit</button>
                                            <button type="button" className="btn btn-light" onClick={handleCancel}>Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}