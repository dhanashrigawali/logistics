import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';
import useApi from '../hooks/useFetch.jsx';
import { useAuth } from '../context/AuthContext.jsx';



function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { loading, error, data, callApi } = useApi();
    const { setAuth } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await callApi({
                method: 'POST',
                url: '/login',
                data: { email, password },
            });
            setAuth(res); // Save login response in context

            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth">
                    <div className="row flex-grow">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left p-5">
                                <div className="brand-logo">
                                    <img src={logo} alt="logo" />
                                </div>
                                <h4>Hello! let's get started</h4>
                                <h6 className="font-weight-light">Sign in to continue.</h6>
                                <form className="pt-3" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            id="exampleInputEmail1"
                                            placeholder="Username"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <button
                                            type="submit"
                                            className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                                        >
                                            {loading ? 'Logging in...' : 'Login'}
                                        </button>
                                    </div>
                                    {error && <div style={{ color: 'red', margin: '10px 0', fontSize: '12px' }}>Login failed</div>}

                                    <div className="text-center mt-4 font-weight-light">
                                        Don't have an account?{' '}
                                        <a href="register.html" className="text-primary">
                                            Create
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* content-wrapper ends */}
            </div>
            {/* page-body-wrapper ends */}
        </div>
    );
}

export default LoginForm;


// admin ---
// user -- CRUD
// role -- CRUD
// tasks -- CRUD
// client -- CRUD

// Manager
// user -- CRUD
// role -- CRUD
// tasks -- CRUD

// user ---
// tasks -- CRUD


// client---
// tasks -- read only