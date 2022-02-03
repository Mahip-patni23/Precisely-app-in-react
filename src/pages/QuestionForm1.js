import React from 'react';
import './QuestionForm1.css';
import QuestionFormBackground from '../components/QuestionFormBackground';
import Navbar from '../components/Navbar';
import {Dropdown} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import Footer from '../components/Footer';

function QuestionForm1() {
  const history = useHistory();
  
  

  const handleChange = (e) => {
    const [name, value]  = e.target.value;
  }

  return <div className="DetailsForm1">
            <Navbar></Navbar>
            
            <div className="DetailsForm1Center">
                <QuestionFormBackground></QuestionFormBackground>
                
                <form className="form1">
                    {/* <input type="text" value="" /> */}

                      <div className="form-step">
                        <h3 className="main_question">
                          <strong>1 of 8</strong>Please fill with your details
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
                                <input 
                                type="radio" 
                                id="male"
                                name = "gender" 
                                values="male"
                                className="required"
                                onChange={handleChange} />
                                {/* <label className="radio" htmlFor="poor_1"></label> */}
                                <label htmlFor="male" className="wrapper">Male</label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox_radio_container">
                                <input 
                                type="radio" 
                                id="female"
                                name="gender"
                                value = "female"
                                className="required" 
                                onChange={handleChange}/>
                                {/* <label className="radio" htmlFor="average_1"></label> */}
                                <label htmlFor="female" className="wrapper">Female</label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox_radio_container">
                                <input 
                                type="radio" 
                                id="others"
                                name = "gender" 
                                value = "others"
                                className="required" 
                                onChange={handleChange}/>
                                {/* <label className="radio" htmlFor="excellent_1"></label> */}
                                <label htmlFor="others" className="wrapper">Others</label>
                              </div>
                            </li>
                          </ul>
                        </div>
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
            <Footer></Footer>
        </div>
        

}

export default QuestionForm1;
