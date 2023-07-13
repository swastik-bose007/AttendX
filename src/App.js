// -------------------------
//   Importing React
// -------------------------

import * as React from 'react';


// -------------------------
//   React Router
// -------------------------

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// ----------------------------
//   Root File for Navigation
// ----------------------------

import RootLayout from './App/routes/RootLayout';


// ------------------------------
//  App Intaerface Components
// ------------------------------

import HomeScreen from './App/components/HomeScreenPage/Homescreen';
import TeacherLogin from './App/components/LoginPages/TeacherLogin';
import StudentLogin from './App/components/LoginPages/StudentLogin';
import TeacherSignup from './App/components/SignupPages/TeacherSignup';
import StudentSignup from './App/components/SignupPages/StudentSignup';
import Dashboard from './App/components/DashboardPages/Dashboard';
import SubjectDataRegister from './App/components/SubjectCode/SubjectDataRegister';


// ------------------------------
//  Routing
// ------------------------------

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <HomeScreen />,
            },
            {
                path: 'teacher-login',
                element: <TeacherLogin />,
            },
            {
                path: 'student-login',
                element: <StudentLogin />,
            },
            {
                path: 'teacher-signup',
                element: <TeacherSignup />,
            },
            {
                path: 'student-signup',
                element: <StudentSignup />,
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'subject-data-register',
                element: <SubjectDataRegister />,
            }
        ]
    }
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App;
