import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from './login/LoginForm.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import JobsTable from './jobs/JobLists.jsx'
import DashboardLayout from './dashboard/DashboardLayout.jsx';
import Users from './users/Users.jsx';
import Tasks from './tasks/Tasks.jsx';
import CreateUser from './users/CreateUser.jsx';
import CreateTask from './tasks/CreateTask.jsx';
import Roles from './roles/Roles.jsx'; 
import CreateRole from './roles/CreateRole.jsx';
import Clients from './clients/Clients.jsx';
import CreateClient from './clients/CreateClient.jsx';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/createuser" element={<CreateUser />} /> 
          <Route path="tasks" element={<Tasks />} />
          <Route path="tasks/createtask" element={<CreateTask />} /> 
          <Route path="jobs" element={<JobsTable />} />
          <Route path="roles" element={<Roles />} /> 
          <Route path="roles/createrole" element={<CreateRole/>} />
          <Route path="clients" element={<Clients />} />
          <Route path="clients/createclient" element={<CreateClient />} />
          {/* <Route path="createuser" element={<CreateUser />} /> */}
          {/* Add more nested routes as needed */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
