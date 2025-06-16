import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

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

// const statusBadge = (status) => {
//     switch (status) {
//         case 'Pending':
//             return <label className="badge badge-danger">Pending</label>;
//         case 'In progress':
//             return <label className="badge badge-warning">In progress</label>;
//         case 'Fixed':
//             return <label className="badge badge-info">Fixed</label>;
//         case 'Completed':
//             return <label className="badge badge-success">Completed</label>;
//         default:
//             return <label className="badge badge-secondary">{status}</label>;
//     }
// };

export default function Users() {
    const navigate = useNavigate();
    const { users, setUsers } = useContext(AppContext);

    return (
        <div>
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="page-header"></div>
                    <div className="row">
                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">User List</h4>
                                    <button
                                        type="button"
                                        className="btn btn-gradient-primary btn-rounded btn-fw btn-float-right"
                                        style={{ float: 'right', marginBottom: 16 }}
                                        onClick={() => navigate('createuser')}
                                    >
                                        Create User
                                    </button>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th><b>User Name</b></th>
                                                <th><b>Phone No.</b></th>
                                                <th><b>Email Id</b></th>
                                                <th><b>Role</b></th>
                                                <th><b>Client Name</b></th>
                                                <th><b>Created On</b></th>
                                                <th><b>Action</b></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user, idx) => (
                                                <tr key={idx}>
                                                    <td>{user.fullName}</td>
                                                    <td>{user.phoneNo}</td>
                                                    <td>{user.emailId}</td>
                                                    <td>{user.role}</td>
                                                    <td>{user.clientName}</td>
                                                    <td>{user.createdOn}</td>
                                                    <td>
                                                        <i className="mdi mdi-pencil" style={{ cursor: 'pointer', color: '#2196f3' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="mdi mdi-delete" style={{ cursor: 'pointer', color: '#f44336' }}></i>
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