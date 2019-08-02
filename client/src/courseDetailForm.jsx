import React, { Component } from "react";
import './courseDetail.css';


class CourseDetailForm extends Component {
      state ={
            detail: [],
            percent: [],
            course_details: {
                  co: '',
                  co_des: '',
                  quiz: 0,
                  homework: 0,
                  assignment: 0,
                  mid_term: 0,
                  project: 0,
                  lab: 0,
                  final: 0,
                  
            },
            percentage:{
              quiz: 0,
              homework: 0,
              assignment: 0,
              mid_term: 0,
              project: 0,
              lab: 0,
              final: 0, 
            },
            carry:{
              quiz: 0,
              homework: 0,
              assignment: 0,
              mid_term: 0,
              project: 0,
              lab: 0,
              final: 0,
            }, 
            carrys: [],
            percentages: [],
      }
      
      
      getAllDetail = _ =>{
            fetch(`http://localhost:3001/co/${this.props.course_det}&&${this.props.ini}`)
                  .then(res => res.json())
                  .then(res => this.setState({detail: res.data}))
                  .catch(err => console.log(err));

            fetch(`http://localhost:3001/co/carry/${this.props.course_det}&&${this.props.ini}`)
                  .then(res => res.json())
                  .then(res => this.setState({carrys: res.data}))
                  .catch(err => console.log(err));

            fetch(`http://localhost:3001/co/percent/${this.props.course_det}&&${this.props.ini}`)
                  .then(res => res.json())
                  .then(res => this.setState({percentages: res.data}))
                  .catch(err => console.log(err));
                  
      }

      render() {
            const {course_detail, detail, carry, carrys, percentages, percentage, percent} = this.state;
    return (
     <div>
       <div className="table">
       <div>
        <h5>{this.props.course_det !== '' ? "Course Code: " + this.props.course_det : "Please Select A Course"}</h5>
          <h5>{this.props.course_t !== '' ? "Course Title: " + this.props.course_t : ''}</h5>
          <h5>{this.props.ini !== '' ? "Faculty Initial: " + this.props.ini : ''}</h5>
        </div>
        <div className='con-2'>
        <div className='form'>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>CO NO: </span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.co}
            placeholder='CO NO Example: CO1'
            onChange={event =>
              this.setState({
                course_detail: { ...course_detail, co: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>CO Description</span>
          </div>
          <textarea
            rows = "10"
            type='text'
            className='form-control'
            value={this.co_des}
            placeholder='CO Description'
            onChange={event =>
              this.setState({
                course_detail: { ...course_detail, co_des: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Quiz</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.quiz}
            placeholder='Quiz Example 20'
            onChange={event =>
              this.setState({
                course_detail: { ...course_detail, quiz: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Homework</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.homework}
            placeholder='Homework example 10'
            onChange={event =>
              this.setState({
                course_detail: { ...course_detail, homework: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Assignment</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.assignment}
            placeholder='Assignment example 10'
            onChange={event =>
              this.setState({
                course_detail: { ...course_detail, assignment: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Mid term</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.mid_term}
            placeholder='Mid Term example 25'
            onChange={event =>
              this.setState({
                course_detail: { ...course_detail, mid_term: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Project</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.project}
            placeholder='Project example 10'
            onChange={event =>
              this.setState({
                course_detail: { ...course_detail, project: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Lab</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.lab}
            placeholder='Lab example 20'
            onChange={event =>
              this.setState({
                course_detail: { ...course_detail, lab: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Final</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.final}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                course_detail: { ...course_detail, final: event.target.value }
              })
            }
          />
        </div>
        <button className="btn btn-primary" onClick={this.detailSubmit}>Submit</button>
        </div>
        <div className='percent-input'>
          <div className="in-1 carry">
         
          <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Quiz Carry</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.quiz}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                carry: { ...carry, quiz: event.target.value }
              })
            }
          />
        </div>
          
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Homework Carry</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.homework}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                carry: { ...carry, homework: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Assignment Carry</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.assignment}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                carry: { ...carry, assignment: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Mid Term Carry</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.mid_term}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                carry: { ...carry, mid_term: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Project Carry</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.project}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                carry: { ...carry, project: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Lab Carry</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.lab}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                carry: { ...carry, lab: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Final Carry</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.final}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                carry: { ...carry, final: event.target.value }
              })
            }
          />
        </div>
        <button className="btn btn-primary" onClick={this.carrySubmit}>Submit</button>
          </div>
          <div className="in2 percent">
          <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Quiz Percentage</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.quiz}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                percentage: { ...percentage, quiz: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Homework Percentage</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.homework}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                percentage: { ...percentage, homework: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Assignment Percentage</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.assignment}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                percentage: { ...percentage, assignment: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Mid Term Percentage</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.mid_term}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                percentage: { ...percentage, mid_term: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Project Percentage</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.project}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                percentage: { ...percentage, project: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Lab Percentage</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.lab}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                percentage: { ...percentage, lab: event.target.value }
              })
            }
          />
        </div>
        <div className='input-group mb-3 title-input'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Final Percentage</span>
          </div>
          <input
            type='text'
            className='form-control'
            value={this.final}
            placeholder='Final example 30'
            onChange={event =>
              this.setState({
                percentage: { ...percentage, final: event.target.value }
              })
            }
          />
        </div>
        <button className="btn btn-primary" onClick={this.percentSubmit}>Submit</button>
          </div>
        </div>
      </div>
      <div className="final-table">
      <h5>{this.props.course_det !== '' ? "Course Code: " + this.props.course_det : "Please Select A Course"}</h5>
          <h5>{this.props.course_t !== '' ? "Course Title: " + this.props.course_t : ''}</h5>
          <h5>{this.props.ini !== '' ? "Faculty Initial: " + this.props.ini : ''}</h5>
          <button className="btn btn-primary" onClick={this.getAllDetail}>LOAD DATA</button>
          <table className="table">
                <thead>
                      <tr>
                            <th scope="col">CO's</th>
                            <th scope="col">CO Description</th>
                            <th scope="col">Quiz</th>
                            <th scope="col">Homework</th>
                            <th scope="col">Assignment</th>
                            <th scope="col">Mid Term</th>
                            <th scope="col">Project</th>
                            <th scope="col">Lab</th>
                            <th scope="col">Final</th>
                      </tr>
                </thead>
                <tbody>
                      {carrys.map(this.renderCarry)}
                      {percentages.map(this.renderPercent)}
                      {detail.map(this.renderDetail)}
                </tbody>
          </table>
      </div>
     </div>
       <div className="per-carry">
         <h3>Get All Percentage For CO's</h3>
         <button className="btn btn-primary" onClick={this.calculator}>Calculate</button>
         {percent.map(this.renderPercents)}
         </div>     
     </div>
    );
  }
  carrySubmit = _ =>{
    const{carry} = this.state;
      fetch(`http://localhost:3001/co/carry/insert/${this.props.course_det}&&${this.props.ini}&&${carry.quiz}&&${carry.homework}&&${carry.assignment}&&${carry.mid_term}&&${carry.project}&&${carry.lab}&&${carry.final}`)
            .then(this.getAllDetail)
            .then(console.log(carry.lab))
            .catch(err=> console.log(err))
  }
  detailSubmit= _ =>{
      const{course_detail} = this.state;
      
      fetch(`http://localhost:3001/co/insert/${this.props.course_det}&&${this.props.ini}&&${course_detail.co}&&${course_detail.co_des}&&${course_detail.quiz}&&${course_detail.homework}&&${course_detail.assignment}&&${course_detail.mid_term}&&${course_detail.project}&&${course_detail.lab}&&${course_detail.final}`)
            .then(this.getAllDetail)
            .then(console.log(course_detail.lab))
            .catch(err=> console.log(err))
  }

  percentSubmit = _ =>{
    const{percentage} = this.state;
      fetch(`http://localhost:3001/co/percent/insert/${this.props.course_det}&&${this.props.ini}&&${percentage.quiz}&&${percentage.homework}&&${percentage.assignment}&&${percentage.mid_term}&&${percentage.project}&&${percentage.lab}&&${percentage.final}`)
            .then(this.getAllDetail)
            .then(console.log(percentage.lab))
            .catch(err=> console.log(err))
  }
  renderPercent = ({course_id, quiz, homework, assignment, mid_term, project, lab, final}) =>{
    return (
      <tr key={course_id}>
        <th scope="row">Percentage</th>
                  <td></td>
                  <td>{quiz}</td>
                  <td>{homework}</td>
                  <td>{assignment}</td>
                  <td>{mid_term}</td>
                  <td>{project}</td>
                  <td>{lab}</td>
                  <td>{final}</td>
      </tr>
    );
  }
  renderCarry = ({course_id, quiz, homework, assignment, mid_term, project, lab, final}) => {
    return (
      <tr key={course_id}>
        <th scope="row">carry</th>
                  <td></td>
                  <td>{quiz}</td>
                  <td>{homework}</td>
                  <td>{assignment}</td>
                  <td>{mid_term}</td>
                  <td>{project}</td>
                  <td>{lab}</td>
                  <td>{final}</td>
      </tr>
    );
  }
  renderDetail = ({co, co_des, quiz, homework, assignment, mid_term, project, lab, final}) =>{
      return(
            <tr key={co}>
                  <th scope="row">{co}</th>
                  <td>{co_des}</td>
                  <td>{quiz}</td>
                  <td>{homework}</td>
                  <td>{assignment}</td>
                  <td>{mid_term}</td>
                  <td>{project}</td>
                  <td>{lab}</td>
                  <td>{final}</td>
            </tr>
      );
  }

  calculator= _ =>{
    fetch(`http://localhost:3001/per/${this.props.course_det}&&${this.props.ini}&&${this.props.course_det}&&${this.props.ini}`)
                  .then(res=> res.json())
                  .then(res => this.setState({percent: res.data}))
                  .then(console.log(this.state.percent))
                  .catch(err => console.log(err))
  }
  renderPercents = ({per}) =>{
    return(
      <div>
        <h5>{per + "%"}</h5>
      </div>
    );
  }
}

export default CourseDetailForm;
