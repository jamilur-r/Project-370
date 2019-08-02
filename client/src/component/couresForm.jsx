import React, { Component } from "react";
import "./courseForm.css";
import CourseDetailForm from "../courseDetailForm";


class CourseForm extends Component {
  state = {
    courses: [],
    course: {
      course_id: "",
      course_title: "",
      faculty_ini: ""
    },
    course_detail:{
      course_id: "",
      course_title: "",
      faculty_ini: "",
    }
  };
  componentDidMount(){
    this.getAllCourse();
  }
  getAllCourse = _ =>{
    fetch('http://localhost:3001/course')
      .then(res => res.json())
      .then(res => this.setState({courses: res.data}))
      .catch(err => console.log(err))
  }
  render() {
    const { course, courses, course_detail} = this.state;

    return (
      <div className="row-1">
        <div className='form-container'>
        <div className="con-1">
        <h3>Add your Course details here</h3>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Course Title</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.course_title}
            placeholder='Course Title: Programming 1'
            onChange={event =>
              this.setState({
                course: { ...course, course_title: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 code-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Course Code</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.course_id}
            placeholder='Course Code: CSE101'
            onChange={event =>
              this.setState({
                course: { ...course, course_id: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 ini-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Faculty Initial</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.faculty_ini}
            placeholder='FBA'
            onChange={event =>
              this.setState({
                course: { ...course, faculty_ini: event.target.value }
              })
            }
          />
        </div>
        <button className="btn btn-outline-primary submit-btn" onClick={this.coursesubmit}>ADD COURSE</button>
        </div>
        <div className="con-2">
          <div className="courses">{courses.map(this.renderCourse)}</div>
        </div>
      </div>
      <div className="course-detail">
        <CourseDetailForm course_det={course_detail.course_id} course_t ={course_detail.course_title} ini={course_detail.faculty_ini}/>
      </div>
      </div>
    );
  }
  renderCourse = ({course_id, course_title, faculty_ini}) =>{
    return (
      <div className="card post-card" key={course_id} onClick={this.handleDetail.bind(this, course_id, course_title, faculty_ini)}>
        <div className="card-body">
          <h4 className="card-title">{course_title}</h4>
          <p className="card-text">{course_id}</p>
          <p className="card-text">{faculty_ini}</p>
          <button className="btn btn-danger" onClick={this.deleteData.bind(this, course_id, faculty_ini)}>DELETE</button>
        </div>
      </div>
    );
  }
  deleteData(id, ini){
    fetch(`http://localhost:3001/course/delete/${id}&&${ini}`)
      .then(this.getAllCourse)
      .then(console.log(`Deleted ${id} ${ini}`))
      .catch(err => console.log(err));

    fetch(`http://localhost:3001/co/delete/${id}&&${ini}`)
      .then(this.getAllCourse)
      .catch(err => console.log(err));
  }
  handleDetail(id, title, ini){
    
    this.setState({
      course_detail: {
         course_id: id,
         course_title: title,
         faculty_ini: ini
        },
    })
  }

  coursesubmit = _ =>{
    const {course} = this.state;
    fetch(`http://localhost:3001/course/insert/${course.course_id}&&${course.course_title}&&${course.faculty_ini}`)
      .then(this.getAllCourse)
      .catch(err => console.log(err))
  }
}

export default CourseForm;
