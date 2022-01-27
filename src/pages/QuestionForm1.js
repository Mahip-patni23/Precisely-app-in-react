import React from 'react';
import './QuestionForm1.css';
import QuestionFormBackground from '../components/QuestionFormBackground';
import Navbar from '../components/Navbar';
import {Dropdown} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function QuestionForm1() {
  const history = useHistory();
  return <div className="DetailsForm1">
            <Navbar></Navbar>
            
            <div className="DetailsForm1Center">
                <QuestionFormBackground></QuestionFormBackground>
                
                <form className="form1">
                    {/* <input type="text" value="" /> */}

                      <div className="form-step">
                        <h3 className="main_question">
                          <strong>1 of 7</strong>Please fill with your details
                        </h3>
                        <div className="form-group">
                          <input type="text" placeholder="Your Name" className="form-control"/>
                        </div>
                        <div className="form-group">
                          <input type="date" placeholder="Your DOB" className="form-control"/>
                        </div>
                        <div className="form-group">
                          <label>Select your gender</label>
                        </div>
                        <div className="review_block">
                          <ul>
                            <li>
                              <div className="checkbox_radio_container">
                                <input type="radio" className="required" value="Poor" />
                                {/* <label className="radio" htmlFor="poor_1"></label> */}
                                <label htmlFor="poor_1" className="wrapper">Male</label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox_radio_container">
                                <input type="radio" id="average_1" name="question_1" className="required" value="Average" />
                                {/* <label className="radio" htmlFor="average_1"></label> */}
                                <label htmlFor="average_1" className="wrapper">Female</label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox_radio_container">
                                <input type="radio" id="excellent_1" name="question_1" className="required" value="Excellent"/>
                                {/* <label className="radio" htmlFor="excellent_1"></label> */}
                                <label htmlFor="excellent_1" className="wrapper">Others</label>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="dropdown form-group">
                          <button className="btn btn-secondary dropdown-toggle form-control marital" type="button"
                            id="dropdownMenu2">
                            Marital status
                          </button>
                          <div className="dropdown-menu">
                            <button className="dropdown-item martial-drop" type="button">
                              Married
                            </button>
                            <button className="dropdown-item martial-drop" type="button">
                              Unmarried
                            </button>
                            <button className="dropdown-item martial-drop" type="button">
                              Separated
                            </button>
                            <button className="dropdown-item martial-drop" type="button">
                              Divorced
                            </button>
                            <button className="dropdown-item mart" type="button">
                              Widowed
                            </button>
                          </div>
                        </div> */}
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                           Marital Status
                          </Dropdown.Toggle>

                          <Dropdown.Menu variant="dark">
                            <Dropdown.Item href="#/action-2">Married</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Unmarried</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Divorced</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Separated</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Widowed</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>


                        <div className="terms">
                          <input type="checkbox" className="checkmark" value="Yes" />
                          <label className="container_check">Please accept our
                            <a href="#">Terms and conditions</a>
                          </label>
                        </div>
                      </div>
                      <button className="next-btn btn" onClick={() => history.push('./QuestionForm2')}>Next</button>
                </form>
            </div>
        </div>
}

export default QuestionForm1;
