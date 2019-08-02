import React, { Component } from 'react';
import CourseForm from './component/couresForm';
import './root.css'

class Root extends Component {
      state = {  }
      render() { 
            return ( 
            <div className="con">
                  <div>
                  <CourseForm/>
                  </div>
            </div>
            );
      }
}
 
export default Root;