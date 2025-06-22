import React from 'react';
import logo from '../assets/images/logo.svg';
import logomini from '../assets/images/logo-mini.svg';
import facepic from '../assets/faces/pic-1.png';
import circleimg from '../assets/dashboard/circle.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function Dashboard() {
    const { auth } = useAuth();
    if (!auth) return <div>Please log in.</div>;
    console.log('Dashboard auth:', auth);
    return (
        <div className="container-scroller">
            {/* header Navbar */}
            {/* <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <a className="navbar-brand brand-logo" href="index.html">
                        <img src={logo} alt="logo" />
                    </a>
                    <a className="navbar-brand brand-logo-mini" href="index.html">
                        <img src={logomini} alt="logo" />
                    </a>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-stretch">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span className="mdi mdi-menu"></span>
                    </button>
                    <div className="search-field d-none d-md-block">
                        <form className="d-flex align-items-center h-100" action="#">
                            <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                    <i className="input-group-text border-0 mdi mdi-magnify"></i>
                                </div>
                                <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
                            </div>
                        </form>
                    </div>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item nav-profile dropdown">
                            <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="nav-profile-img">
                                    <img src={facepic} alt="image" />
                                    <span className="availability-status online"></span>
                                </div>
                                <div className="nav-profile-text">
                                    <p className="mb-1 text-black">User </p>
                                </div>
                            </a>
                            <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="pages/samples/login.html">
                                    <i className="mdi mdi-logout me-2 text-primary text-gray mb-0"></i> Signout
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="mdi mdi-email-outline"></i>
                                <span className="count-symbol bg-warning"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                <h6 className="p-3 mb-0">Messages</h6>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src={facepic} alt="image" className="profile-pic" />
                                    </div>
                                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                                        <p className="text-gray mb-0"> 1 Minutes ago </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src={facepic} alt="image" className="profile-pic" />
                                    </div>
                                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                                        <p className="text-gray mb-0"> 15 Minutes ago </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src={facepic} alt="image" className="profile-pic" />
                                    </div>
                                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                                        <p className="text-gray mb-0"> 18 Minutes ago </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <h6 className="p-3 mb-0 text-center">4 new messages</h6>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav> */}
            <div className="container-fluid page-body-wrapper">
                {/* <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <ul className="nav">
                        <li className="nav-item nav-profile">
                            <a href="#" className="nav-link">
                                <div className="nav-profile-image">
                                    <img src={facepic} alt="profile" />
                                    <span className="login-status online"></span>
                                </div>
                                <div className="nav-profile-text d-flex flex-column">
                                    <span className="font-weight-bold mb-2">User </span>
                                    <span className="text-secondary text-small">Project Manager</span>
                                </div>
                                <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard">
                                <span className="menu-title">Dashboard</span>
                                <i className="mdi mdi-home menu-icon"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/jobs">
                                <span className="menu-title">Jobs</span>
                                <i className="mdi mdi-table-large menu-icon"></i>
                            </NavLink>
                        </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/users">
                                <span className="menu-title">Users</span>
                                <i className="mdi mdi-table-large menu-icon"></i>
                            </NavLink>
                        </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/tasks">
                                <span className="menu-title">Tasks</span>
                                <i className="mdi mdi-table-large menu-icon"></i>
                            </NavLink>
                        </li>

                    </ul>
                </nav> */}
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="page-header">
                            <h3 className="page-title">
                                <span className="page-title-icon bg-gradient-primary text-white me-2">
                                    <i className="mdi mdi-home"></i>
                                </span> Dashboard
                            </h3>
                            <nav aria-label="breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page">
                                        <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="row">
                            <div className="col-md-4 stretch-card grid-margin">
                                <div className="card bg-gradient-danger card-img-holder text-white">
                                    <div className="card-body">
                                        <img src={circleimg} className="card-img-absolute" alt="circle" />
                                        <h4 className="font-weight-normal mb-3">
                                            Open Tasks <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                                        </h4>
                                        <h2 className="mb-5">15,0000</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 stretch-card grid-margin">
                                <div className="card bg-gradient-info card-img-holder text-white">
                                    <div className="card-body">
                                        <img src={circleimg} className="card-img-absolute" alt="circle" />
                                        <h4 className="font-weight-normal mb-3">
                                            In Progress Tasks <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                                        </h4>
                                        <h2 className="mb-5">45,6334</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 stretch-card grid-margin">
                                <div className="card bg-gradient-success card-img-holder text-white">
                                    <div className="card-body">
                                        <img src={circleimg} className="card-img-absolute" alt="circle" />
                                        <h4 className="font-weight-normal mb-3">
                                            Completed Tasks <i className="mdi mdi-diamond mdi-24px float-right"></i>
                                        </h4>
                                        <h2 className="mb-5">95,5741</h2>
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
        </div>
    );
}

export default Dashboard;