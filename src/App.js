import React,{Component} from 'react';
import {BrowserRouter as Router,Link,Route,Redirect,withRouter} from 'react-router-dom';
import Student from './Student/Student';
import Teacher from './Teacher/Teacher';
import Course from './course/Course';
// import Login from './Common/Login';
import {fakeAuth} from './Common/AuthFunc';
import {PrivateRoute} from './Common/AuthFunc';


class Login extends React.Component {

  state = {
  redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}




class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          {/* <AuthButton /> */}
              <ul>
                {/* <li>
                  <Link to="/">Home</Link>
                </li> */}
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
              {/* <Route exact path="/" component={App} /> */}
              <Route path="/student" component={Student}/>
              <Route path="/teacher" component={Teacher} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/course" component={Course} />
              

              </div>
          </div>
        </Router>

      </div>
      
    );
  }
}

export default App;

