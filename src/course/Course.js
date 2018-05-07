import React,{Component} from 'react';
import {BrowserRouter as Router,Link,Route,withRouter} from 'react-router-dom';
import CourseDetail from './CourseDetail';
import {AuthButton} from '../Common/AuthFunc';
import {courses} from './courseData';


// function Detail({match}){
//     // const courseDetail = courses.find(({id}) => id === match.params.courseId)
//     // .description.find(({ id }) => id === match.params.subId)
//     const courseDetail = courses.find(({ id }) => id === match.params.courseId)
//     .description.find(({ id }) => id === match.params.subId)
    
//     return(
//         <div>
//             <h4>{courseDetail.detail}</h4>
//         </div>
//     )
// }
// function CourseItem({match}) {
//     const crs = courses.find(({id}) => id === match.params.courseId)
//     return(
//         <div>         
//             <h2>{crs.name}</h2>
//             <p>course credit: {crs.credit}</p>

//             <hr/>
//             <ul>
//                 {crs.description.map((sub) =>(
//                     <li key={sub.id}>
//                         {/* <Link to={`/course/${match.params.courseId}/${sub.id}`}> */}
//                         <Link to={`${match.url}/${sub.id}`}>
//                             {sub.heading}<br />
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//             <hr/>
//             {/* <Route path={`/course/:courseId/:subId`} component={Detail} /> */}
//             <Route path={`${match.path}/:subId`} component={Detail} />
//         </div>
//     )       
// }

class Course extends Component{      
    render(){      
        return(
            <div>
                <AuthButton />
                <div><h2>Courses</h2></div>
                <div>
                    <ul>
                        {courses.map(({name,id}) =>(
                            <li key={id}>
                                {/* <Link to={`/course/${id}`}>{name}</Link> */}
                                <Link to={`${this.props.match.url}/${id}`}>{name}</Link>
                            </li>
                        ))}
                    </ul>

                    <hr />
                    {/* <Route path={`/course/:courseId`} component={CourseItema} /> */}
                    <Route path={`${this.props.match.path}/:courseId`} component={CourseDetail} />
                </div>
                          
            </div>
        );
    }
}

export default Course;