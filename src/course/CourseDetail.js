import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route,withRouter} from 'react-router-dom';
import CourseDescription from './CourseDescription'
import { courses } from './courseData';


class CourseDetail extends Component {
    render() {

        const course = courses.find(({ id }) => id === this.props.match.params.courseId);
        return (
            <div>
                <h3>Course Name : {course.name}</h3>
                <h4>Course credit : {course.credit}</h4>
                <h4>Course fees : {course.fees}</h4>

                <h4>Course Module </h4>
                <ul>
                    {course.description.map((sub) => (
                        <li key={sub.id}>
                            {/* <Link to={`/course/${match.params.courseId}/${sub.id}`}> */}
                            <Link to={`${this.props.match.url}/${sub.id}`}>
                                {sub.heading}<br />
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr />
                {/* <Route path={`/course/:courseId/:subId`} component={Detail} /> */}
                <Route path={`${this.props.match.path}/:subId`} component={CourseDescription} />

            </div>
        );
    }
}

export default CourseDetail;