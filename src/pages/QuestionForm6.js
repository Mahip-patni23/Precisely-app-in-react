import React from 'react';
import './QuestionForm1.css';
import './QuestionForm6.css';
import QuestionFormBackground from '../components/QuestionFormBackground';
import Navbar from '../components/Navbar';
import {Dropdown, DropdownButton, ButtonGroup} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function QuestionForm6() {
    const history = useHistory();
  return <div className="DetailsForm1">
            <Navbar></Navbar>
            
            <div className="DetailsForm1Center">
                <QuestionFormBackground></QuestionFormBackground>
                
                <form className="form1">
                    {/* <input type="text" value="" /> */}

                      <div className="form-step">
                        <h3 className="main_question">
                          <strong>6 of 8</strong>Please fill with your details
                        </h3>
                        <div className="form-group">
                          <input type="number" placeholder="University Ranking (0-1000)" className="form-control"/>
                        </div>
                        
                        
                        {/* <Dropdown>
                          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                           Select Majors
                          </Dropdown.Toggle>

                          <Dropdown.Menu variant="dark">
                            <Dropdown.Item href="#/action-2">Computer Science Engineering</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Economics</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Education</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Civil Engineering</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Electronics and Communication Engineering</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Mechanical Engineering</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Electrical Engineering</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Finance</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Data Science</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Physics</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Biostatics</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Material Science</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Mathematics</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Environmental Engineering</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown> */}

                        <div className="mb-2">
                          {[DropdownButton].map((DropdownType, idx) => (
                            <DropdownType
                              as={ButtonGroup}
                              key={idx}
                              id={`dropdown-button-drop-${idx}`}
                              size="lg"
                              title="Select Majors"
                            >
                              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </DropdownType>
                          ))}
                        </div>



                        <div className="form-group range-input">
                          <label>How important is college ranking to you?</label>
                          <input type="range" />
                        </div>


                        <div className="form-group range-input">
                          <label>How important is cost of attendance to you?</label>
                          <input type="range" /* className="form-control" *//>
                        </div>

                      </div>
                      <div className='btn-container'>
                            <button className="next-btn btn" onClick={() => history.push('./QuestionForm7')}>Next</button>
                            <button className="prev-btn btn" onClick={() => history.push('./QuestionForm5')}>Prev</button>
                      </div>
                </form>
            </div>
        </div>
}

export default QuestionForm6;
