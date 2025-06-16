import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function HorizontalForm() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        client: 'Infosys',
        role: 'User',
        phoneNo: '',
        emailId: ''
    });
    const { users, setUsers } = useContext(AppContext);
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
        setUsers((prev) => [
            ...prev,
            {
                fullName: `${form.firstName} ${form.lastName}`,
                phoneNo: form.phoneNo,
                emailId: form.emailId,
                role: form.role,
                clientName: form.client,
                createdOn: new Date().toLocaleDateString(),
            },
        ]);
        navigate('/dashboard/users');
    };
    const handleCancel = () => {
        navigate('/dashboard/users');
    };

    return (
        <div className="main-panel">
            <div className="content-wrapper">
                <div className="page-header"></div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Create New User</h4>
                                <form className="form-sample" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">First Name</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="firstName"
                                                        value={form.firstName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Last Name</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="lastName"
                                                        value={form.lastName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Phone No.</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        name="phoneNo"
                                                        value={form.phoneNo}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Email Id</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="emailId"
                                                        value={form.emailId}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Client</label>
                                                <div className="col-sm-9">
                                                    <select
                                                        className="form-control"
                                                        name="client"
                                                        value={form.client}
                                                        onChange={handleChange}
                                                    >
                                                        <option>Infosys</option>
                                                        <option>TCS</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Role</label>
                                                <div className="col-sm-9">
                                                    <select
                                                        className="form-control"
                                                        name="role"
                                                        value={form.role}
                                                        onChange={handleChange}
                                                    >
                                                        <option>Admin</option>
                                                        <option>User</option>
                                                        <option>Manager</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Category</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                    >
                      <option>Category1</option>
                      <option>Category2</option>
                      <option>Category3</option>
                      <option>Category4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Membership</label>
                  <div className="col-sm-4">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="membership"
                          value="Free"
                          checked={form.membership === 'Free'}
                          onChange={handleChange}
                        />{' '}
                        Free
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="membership"
                          value="Professional"
                          checked={form.membership === 'Professional'}
                          onChange={handleChange}
                        />{' '}
                        Professional
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="card-description"> Address </p>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Address 1</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="address1"
                      value={form.address1}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">State</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Address 2</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="address2"
                      value={form.address2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Postcode</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="postcode"
                      value={form.postcode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">City</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Country</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                    >
                      <option>America</option>
                      <option>Italy</option>
                      <option>Russia</option>
                      <option>Britain</option>
                    </select>
                  </div>
                </div>
              </div>
            </div> */}
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