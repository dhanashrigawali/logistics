import React from 'react';

const jobs = [
  {
    name: 'Job 1',
    vat: '53275531',
    created: '12 May 2025',
    status: { label: 'Pending', className: 'badge-danger' },
  },
  {
    name: 'Job 2',
    vat: '53275532',
    created: '15 May 2025',
    status: { label: 'In progress', className: 'badge-warning' },
  },
  {
    name: 'Job 3',
    vat: '53275533',
    created: '14 May 2025',
    status: { label: 'Fixed', className: 'badge-info' },
  },
  {
    name: 'Job 4',
    vat: '53275534',
    created: '16 May 2025',
    status: { label: 'Completed', className: 'badge-success' },
  },
  {
    name: 'Job 5',
    vat: '53275535',
    created: '20 May 2025',
    status: { label: 'In progress', className: 'badge-warning' },
  },
];

function JobsTable() {
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Job List</h4>
                <a className="nav-link" href="../../pages/forms/create_job.html">
                  <button
                    type="button"
                    className="btn btn-gradient-primary btn-rounded btn-fw btn-float-right"
                  >
                    Create Job
                  </button>
                </a>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Jobs</th>
                      <th>VatNo.</th>
                      <th>Created</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job, idx) => (
                      <tr key={idx}>
                        <td>{job.name}</td>
                        <td>{job.vat}</td>
                        <td>{job.created}</td>
                        <td>
                          <label className={`badge ${job.status.className}`}>
                            {job.status.label}
                          </label>
                        </td>
                        <td>
                          <i className="mdi mdi-pencil" style={{ cursor: 'pointer' }}></i>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <i className="mdi mdi-delete" style={{ cursor: 'pointer' }}></i>
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
  );
}

export default JobsTable;