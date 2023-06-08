import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Instractors from "../pages/Instractors/Instractors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import InstractorsHome from "../pages/Dashboard/InstractorsHome/InstractorsHome";
// import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'instractors',
                element: <Instractors />
            },
            {
                path: 'classes',
                element: <Classes />
            }
        ]

    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'userhome',
                element: <UserHome />
            },
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: 'instractorshome',
                element: <InstractorsHome />
            },
            {
                path: 'manageusers',
                element: <ManageUsers />
            },
            {
                path: 'manageclasses',
                element: <ManageClasses />
            }


        ]
    }

]);
