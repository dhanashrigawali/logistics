import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function CreateTask() {
    const [form, setForm] = useState({
        taskName: '',
        taskDesc: '',
        assignedTo: '',
        priority: 'Normal',
        dueDate: new Date(new Date().setDate(new Date().getDate() + 7)).toLocaleDateString(), // Default due date is 7 days from now
    });

    const navigate = useNavigate();
    const { tasks, setTasks } = useContext(AppContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCancel = () => {
        navigate('/dashboard/tasks');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks((prev) => [
            ...prev,
            {
                taskName: form.taskName,
                taskDesc: form.taskDesc,
                assignedTo: form.assignedTo,
                priority: form.priority,
                createdOn: new Date().toLocaleDateString(),
                dueDate: form.dueDate // new Date(new Date().setDate(new Date().getDate() + 7)).toLocaleDateString(), // Default due date is 7 days from now
            },
        ]);
        navigate('/dashboard/tasks');
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
                                                <label className="col-sm-3 col-form-label">Task Name</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="taskName"
                                                        value={form.taskName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Task Desc</label>
                                                <div className="col-sm-9">
                                                    <textarea
                                                        className="form-control"
                                                        name="taskDesc"
                                                        value={form.taskDesc}
                                                        onChange={handleChange}
                                                        rows={3}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Priority</label>
                                                <div className="col-sm-9">
                                                    <select
                                                        className="form-control"
                                                        name="priority"
                                                        value={form.priority}
                                                        onChange={handleChange}
                                                    >
                                                        <option>Low</option>
                                                        <option>Medium</option>
                                                        <option>High</option>
                                                        <option>Critical</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Assigned To</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="assignedTo"
                                                        value={form.assignedTo}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Due Date</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        name="dueDate"
                                                        value={form.dueDate}
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