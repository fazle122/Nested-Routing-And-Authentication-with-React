import React, { Component } from 'react';
import { courses } from './courseData';


class CourseDescription extends Component {
    render() {

        const courseDescription = courses.find(({ id }) => id === this.props.match.params.courseId)
            .description.find(({ id }) => id === this.props.match.params.subId)
        return (
            <div>
                <h4>Comment</h4>
                <h4>{courseDescription.detail}</h4>
            </div>
        );
    }
}

export default CourseDescription;