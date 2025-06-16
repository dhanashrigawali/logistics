# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
//1. login api 

req cred {
    "email":"",
    "password":""
}

or otp based  {
    "emailid"
} // verify otp

res  {
    "status": "success",
    "message": "Login successful",
    "accessToken": "abc123xyz",
    "data": {
        "userId": "12345",
        "role": "user",
        "name": "John Doe",
        "clientID": ["client1", "client2"]
}
}

//2. Dashboard api

req {
    "userId": "12345",
}

res {
"Open Tickets": 5,
"Closed Tickets": 10,
"Pending Tickets": 2,
"Total Tickets": 17,
}

//3. Users - get all users 
res {
    [
        {
            fullName: 'Alice Johnson',
            phoneNo: '9876543210',
            emailId: 'alice@email.com',
            role: 'Admin',
            clientName: 'Acme Corp',
            createdOn: '12 May 2025',
            "userId": "67890"
        }, ......
    ]
}

// 4. Users - create user
req {
    "fullName": "Alice Johnson",
    "phoneNo": "9876543210",
    "emailId": ""...
}  
res {
    "status": "success",
    "message": "User created successfully",
    "data": {
        "userId": "67890",
        "fullName": "Alice Johnson",
        "role": "Admin",
        "clientID": ["client1"]
    }
}

// get all clients , get all roles


// users - update user
 req {
    "userId": "67890",
    "fullName": "Alice Johnson",
    "phoneNo": "9876543210",
    "emailId": "
 }
res  {
    "status": "success",
    "message": "User updated successfully",
 }

 // users - delete user
 req {
    "userId": "67890"
 }

res  {
    "status": "success",
    "message": "User deleted successfully",
 }