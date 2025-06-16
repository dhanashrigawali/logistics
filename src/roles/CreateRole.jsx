import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function HorizontalForm() {
  const [form, setForm] = useState({
    role: 'Admin',
  });
  const { roles, setRoles } = useContext(AppContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'radio' ? value : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRoles((prev) => [
      ...prev,
      {
        name: form.role,
        description: form.description,
        createdOn: new Date().toLocaleDateString(),
      },
    ]);
    navigate('/dashboard/roles');
  };
  const handleCancel = () => {
    navigate('/dashboard/roles');
  };

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header"></div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create New Role</h4>
                <form className="form-sample" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Role Name</label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Description</label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="row mt-3">
                    <div className="col-md-12 text-end">
                      <button type="submit" class="btn btn-gradient-primary me-2">Submit</button>
                      <button type="button" class="btn btn-light" onClick={handleCancel}>Cancel</button>
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