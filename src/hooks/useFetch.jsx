import { useState } from 'react';
import axios from 'axios';
const defaultHost = 'https://api.example.com'; // Replace with your default API host
const defaultHeaders = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer token',
};


// Create an Axios instance with baseURL and default headers
const apiClient = axios.create({
  baseURL: defaultHost, // <-- Set your API host here
  headers: defaultHeaders
});

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const callApi = async ({ method = 'GET', url, data: body, headers, ...rest }) => {
    setLoading(true);
    setError(null);

    // Mock response for /login
    if (url === '/login') {
      await new Promise(res => setTimeout(res, 500)); // Simulate network delay
      const mockResponse = {
        token: 'mocked-jwt-token-123',
        userId: 1,
        fullName: 'John Doe',
        role: {
          roleid: 2,
          name: 'Manager',
          permissions: ['read', 'write', 'update'],
        },
      };
      setData(mockResponse);
      setLoading(false);
      return mockResponse;
    }

    if (url === '/prod/v1/tasks' && headers?.METHOD === 'GETALL') {
      await new Promise(res => setTimeout(res, 500)); // Simulate network delay
      const mockTasks = [
        {
          taskName: 'Prepare Report',
          assignedTo: 'Alice Johnson',
          taskDesc: 'Prepare the monthly sales report',
          dueDate: '2025-06-25',
          status: 'Pending',
          priority: 'High',
          createdOn: '2025-06-20',
        },
        {
          taskName: 'Update Website',
          assignedTo: 'Bob Smith',
          taskDesc: 'Update the landing page with new offers',
          dueDate: '2025-06-22',
          status: 'In progress',
          priority: 'Medium',
          createdOn: '2025-06-18',
        },
        {
          taskName: 'Client Meeting',
          assignedTo: 'Charlie Brown',
          taskDesc: 'Meet with Gamma Inc for project discussion',
          dueDate: '2025-06-23',
          status: 'Completed',
          priority: 'Low',
          createdOn: '2025-06-15',
        },
      ];
      setData(mockTasks);
      setLoading(false);
      return mockTasks;
    }

    if (url === '/prod/v1/tasks' && headers?.METHOD === 'CREATE') {
      await new Promise(res => setTimeout(res, 500)); // Simulate network delay
      const mockCreatedTask = {
        taskName: body.taskName,
        assignedTo: body.assignedTo,
        taskDesc: body.taskDesc,
        dueDate: body.dueDate,
        status: 'Pending',
        priority: body.priority,
        createdOn: new Date().toLocaleDateString(),
      };
      setData(mockCreatedTask);
      setLoading(false);
      return mockCreatedTask;
    }

    if (url === '/prod/v1/users' && headers?.METHOD === 'GETALL') {
      await new Promise(res => setTimeout(res, 500)); // Simulate network delay
      const mockUsers = [
        {
          fullName: 'Alice Johnson',
          phoneNo: '9876543210',
          emailId: 'alice@email.com',
          role: 'Admin',
          clientName: 'Acme Corp',
          createdOn: '12 May 2025',
        },
        {
          fullName: 'Bob Smith',
          phoneNo: '9123456780',
          emailId: 'bob@email.com',
          role: 'User',
          clientName: 'Beta Ltd',
          createdOn: '15 May 2025',
        },
        {
          fullName: 'Charlie Brown',
          phoneNo: '9988776655',
          emailId: 'charlie@email.com',
          role: 'Manager',
          clientName: 'Gamma Inc',
          createdOn: '14 May 2025',
        }
      ];
      setData(mockUsers);
      setLoading(false);
      return mockUsers;
    }

    if (url === '/prod/v1/users' && headers?.METHOD === 'CREATE') {
      await new Promise(res => setTimeout(res, 500)); // Simulate network delay
      const mockCreatedUser = {
        fullName: body.fullName,
        phoneNo: body.phoneNo,
        emailId: body.emailId,
        role: body.role,
        clientName: body.clientName,
        createdOn: new Date().toLocaleDateString(),
      };
      setData(mockCreatedUser);
      setLoading(false);
      return mockCreatedUser;
    }

    if (url === '/prod/v1/roles' && headers?.METHOD === 'GETALL') {
      await new Promise(res => setTimeout(res, 500)); // Simulate network delay
      const mockRoles = [
        {
          name: 'Admin',
          description: 'Full access to all features and settings',
          createdOn: '12 May 2025',
        },
        {
          name: 'User',
          description: 'Access to basic features and tasks',
          createdOn: '15 May 2025',
        },
        {
          name: 'Manager',
          description: 'Can manage tasks and view reports',
          createdOn: '14 May 2025',
        },
      ];
      setData(mockRoles);
      setLoading(false);
      return mockRoles;
    }

    if (url === '/prod/v1/roles' && headers?.METHOD === 'CREATE') {
      await new Promise(res => setTimeout(res, 500)); // Simulate network delay
      // const mockCreatedRole = {
      //   name: body.name,
      //   description: body.description,
      //   createdOn: new Date().toLocaleDateString(),
      // };
      setData(body);
      setLoading(false);
      return body;
    }

    if (url === '/prod/v1/clients' && headers?.METHOD === 'GETALL') {
      await new Promise(res => setTimeout(res, 500)); // Simulate network delay
      const mockClients = [
        {
          name: 'Infosys',
          description: 'Leading IT services company',
          contactPerson: 'John Doe',
          emailId: 'abc@infosys.com',
          phoneNo: '1234567890',
          address: '123 Acme St, Springfield',
          createdOn: '12 May 2025',
        },
        {
          name: 'TCS',
          description: 'Global leader in IT services and consulting',
          contactPerson: 'Jane Smith',
          emailId: 'jane@tcs.com',
          phoneNo: '1234567890',
          createdOn: '15 May 2025',
        }];
      setData(mockClients);
      setLoading(false);
      return mockClients;
    }

    if (url === '/prod/v1/clients' && headers?.METHOD === 'CREATE') {
      await new Promise(res => setTimeout(res, 500)); // Simulate network delay
      // const mockCreatedClient = {
      //   name: body.name,

      //   description: body.description,
      //   contactPerson: body.contactPerson,
      //   emailId: body.emailId,
      //   phoneNo: body.phoneNo,
      //   address: body.address,
      //   createdOn: new Date().toLocaleDateString(),
      // };
      setData(body);
      setLoading(false);
      return body;
    }


    try {
      const response = await apiClient({
        method,
        url,
        data: body,
        headers: { ...apiClient.defaults.headers, ...headers },
        ...rest,
      });
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, callApi };
};

export default useApi;