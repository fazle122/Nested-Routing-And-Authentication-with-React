import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect, withRouter } from 'react-router-dom';
import Student from './Student/Student';
import Teacher from './Teacher/Teacher';
import Course from './course/Course';
import Login from './Common/Login';
import { fakeAuth } from './Common/AuthFunc';
import { PrivateRoute } from './Common/AuthFunc';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <div>Home</div>,
        sidebar: () => <h4>Home</h4>
    },
    {
        path: "/student",
        main: Student,
        sidebar: () => <h4>Student</h4>
    },
    // {
    //   path:"/teacher",
    //   main: Teacher,
    //   sidebar: () => <h4>Teacher</h4>
    // },
    {
        path: "/login",
        main: Login,
        sidebar: () => <h4>log-in</h4>
    }
]
const privateRroutes = [
    {
        path: "/teacher",
        main: Teacher,
        sidebar: () => <h4>Teacher</h4>
    },
    {
        path: "/course",
        main: Course,
        sidebar: () => <h4>Courses</h4>
    },
]


class App1 extends React.Component {
    render() {
        return (
            <div >
                <Router>
                    <div style={{ display: "flex" }}>
                        <div style={{ padding: "10px", width: "20%", background: "#f0f0f0" }}>

                            <ul style={{ listStyleType: "none", padding: 0 }}>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/student">Students</Link>
                                </li>
                                <li>
                                    <Link to="/teacher">Teachers</Link>
                                </li>
                                <li>
                                    <Link to="/course">Courses</Link>
                                </li>
                            </ul>

                            <hr />

                            <div>
                                {routes.map((route, index) => (
                                    <Route key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.sidebar}

                                    />
                                ))}
                                {privateRroutes.map((route, index) => (
                                    <Route key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.sidebar}

                                    />
                                ))}
                            </div>
                        </div>
                        <div style={{ flex: 1, padding: "10px" }}>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                            {privateRroutes.map((route, index) => (
                                <PrivateRoute
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                        </div>
                    </div>

                </Router>

            </div>

        );
    }
}

export default App1;

