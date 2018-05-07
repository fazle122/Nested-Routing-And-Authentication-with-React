import React,{Component} from 'react';
import {AuthButton} from '../Common/AuthFunc';


class Teacher extends Component{
    render(){
        return(
            
            <div>
                <AuthButton />
                <h2>Teachers</h2>
            </div>
        );
    }
}

export default Teacher;