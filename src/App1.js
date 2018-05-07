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
            <div class="row">
                <Router>
                    <div>
                        <div class="side-menu">
                            <nav class="navbar navbar-default" role="navigation">
                                <div class="navbar-header">

                                    <div class="brand-wrapper">

                                        <button type="button" class="navbar-toggle">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>

                                    <div class="brand-name-wrapper">
                                        <a class="navbar-brand" href="#">
                                            LMS
                                    </a>
                                    </div>

                                    <a data-toggle="collapse" href="#search" class="btn btn-default" id="search-trigger">
                                        <span class="glyphicon glyphicon-search"></span>
                                    </a>

                                    <div id="search" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <form class="navbar-form" role="search">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Search" />
                                                </div>
                                                <button type="submit" class="btn btn-default "><span class="glyphicon glyphicon-ok"></span></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="side-menu-container">
                                        <ul class="nav navbar-nav">
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
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div>
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
                            <div class="container-fluid">
                                <div class="side-body">
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
                        </div>
                    </div>
                </Router>

            </div>

        );
    }
}

export default App1;

