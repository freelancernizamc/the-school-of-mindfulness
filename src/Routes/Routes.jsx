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
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import InstractorRoute from "./InstractorRoute";
import InstractorDetails from "../pages/Instractors/InstractorDetails";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import Payment from "../pages/Dashboard/Payment/Payment";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
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
                path: '/instractor/:id',
                element: <InstractorDetails />
            },

            {
                path: 'classes',
                element: <Classes />
            }
        ]

    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'userhome',
                element: <UserHome />
            },
            {
                path: 'selectedclasses',
                element: <SelectedClass />
            },
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: 'instractorshome',
                element: <InstractorRoute><InstractorsHome /></InstractorRoute>
            },
            {
                path: 'manageusers',
                element: <ManageUsers />
            },
            {
                path: 'manageclasses',
                element: <ManageClasses />
            },
            {
                path: 'addclass',
                element: <AddClass />
            },
            {
                path: 'myclasses',
                element: <MyClasses />
            },
            {
                path: 'enrolledclasses',
                element: <MyEnrolledClasses />
            },
            {
                path: 'payment',
                element: <Payment />
            }


        ]
    }

]);
