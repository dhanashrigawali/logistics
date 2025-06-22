import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import useApi from '../hooks/useFetch.jsx';

// const users = [
//     {
//         fullName: 'Alice Johnson',
//         phoneNo: '9876543210',
//         emailId: 'alice@email.com',
//         role: 'Admin',
//         clientName: 'Acme Corp',
//         createdOn: '12 May 2025',
//     },
//     {
//         fullName: 'Bob Smith',
//         phoneNo: '9123456780',
//         emailId: 'bob@email.com',
//         role: 'User',
//         clientName: 'Beta Ltd',
//         createdOn: '15 May 2025',
//     },
//     {
//         fullName: 'Charlie Brown',
//         phoneNo: '9988776655',
//         emailId: 'charlie@email.com',
//         role: 'Manager',
//         clientName: 'Gamma Inc',
//         createdOn: '14 May 2025',
//     },
// ];

const statusBadge = (status) => {
  switch (status) {
    case 'Pending':
      return <label className="badge badge-info">Pending</label>;
    case 'In progress':
      return <label className="badge badge-warning">In progress</label>;
    case 'Blocked':
      return <label className="badge badge-danger">Blocked</label>;
    case 'Completed':
      return <label className="badge badge-success">Completed</label>;
    default:
      return <label className="badge badge-info">Pending</label>;
  }
};

export default function Tasks() {
  const navigate = useNavigate();
  const { tasks, setTasks } = useContext(AppContext);
  const { loading, error, data, callApi } = useApi();

  useEffect(() => {
    async function fetchTasks() {
      const result = await callApi({ method: 'POST', url: '/prod/v1/tasks' , headers: { 'METHOD': 'GETALL' } });
      setTasks(result);
    }
    fetchTasks();
  }, []);
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="page-header"></div>
          <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Task List</h4>
                  <button
                    type="button"
                    className="btn btn-gradient-primary btn-rounded btn-fw btn-float-right"
                    style={{ float: 'right', marginBottom: 16 }}
                    onClick={() => navigate('createtask')}
                  >
                    Create Task
                  </button>
                  <table className="table">
                    <thead>
                      <tr>
                        <th><b>Task Name</b></th>
                        <th><b>Assigned To</b></th>
                        <th><b>Task Description</b></th>
                        <th><b>Due Date</b></th>
                        <th><b>Status</b></th>
                        <th><b>Priority</b></th>
                        <th><b>Created On</b></th>
                        <th><b>Action</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasks.map((task, idx) => (
                        <tr key={idx}>
                          <td>{task.taskName}</td>
                          <td>{task.assignedTo}</td>
                          <td>{task.taskDesc}</td>
                          <td>{task.dueDate}</td>
                          <td>{statusBadge(task.status)}</td>
                          <td>
                            <label className={`badge badge-${task.priority === 'High' || task.priority === 'Critical' ? 'danger' : task.priority === 'Medium' ? 'warning' : 'info'}`}>
                              {task.priority}
                            </label>
                          </td>
                          <td>{task.createdOn}</td>
                          <td>
                            <i className="mdi mdi-pencil" style={{ cursor: 'pointer', color: '#2196f3' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="mdi mdi-delete" style={{ cursor: 'pointer', color: '#f44336' }} onClick={() => handleDelete(idx)}></i>
                          </td>
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