import React, { useState } from 'react';
import './QuestionForm1.css';
import './QuestionForm8.css';
import QuestionFormBackground from '../components/QuestionFormBackground';
import Navbar from '../components/Navbar';
import {useHistory} from 'react-router-dom';


function QuestionForm8() {
    const [show, setShow] = useState(false);
    const history = useHistory();
  return <div className="DetailsForm1">
            <Navbar></Navbar>
            
            <div className="DetailsForm1Center">
                <QuestionFormBackground></QuestionFormBackground>
                
                <form className="form1">
                    {/* <input type="text" value="" /> */}

                      <div className="form-step">
                        <h3 className="main_question">
                          <strong>8 of 8</strong>Financial Aid
                        </h3>
                        <div className="form-group">
                          <label>Would you require any kind of financial assistance?</label>
                        </div>
                        <div className="review_block">
                          <ul>
                            <li>
                              <div >
                                <input 
                                type="radio"                         
                                name="response"
                                value="yes"
                                onClick={() => setShow(true)} />
                                {/* <label className="radio" htmlFor="poor_1"></label> */}
                                <label htmlFor="poor_1" className="wrapper">Yes</label>
                              </div>
                            </li>
                            <li>
                              <div >
                                <input 
                                type="radio"  
                                name="response"
                                value="no"
                                onClick={() => setShow(false)} />
                                {/* <label className="radio" htmlFor="average_1"></label> */}
                                <label htmlFor="average_1" className="wrapper">No</label>
                              </div>
                            </li>
                            {show && <li>
                              <div className="checkbox_radio_container">
                                <input type="checkbox" className="checkmark" value="Yes" />
                                {/* <label className="radio" htmlFor="poor_1"></label> */}
                                <label htmlFor="poor_1" className="wrapper">Scolarship</label>
                              </div>
                            
                              <div className="checkbox_radio_container">
                                <input type="checkbox" className="checkmark" value="Yes" />
                                {/* <label className="radio" htmlFor="average_1"></label> */}
                                <label htmlFor="average_1" className="wrapper">Loans</label>
                              </div>
                            
                              <div className="checkbox_radio_container">
                                <input type="checkbox" className="checkmark" value="Yes" />
                                {/* <label className="radio" htmlFor="excellent_1"></label> */}
                                <label htmlFor="excellent_1" className="wrapper">Grant</label>
                              </div>
                              
                            <div className="checkbox_radio_container">
                                <input type="checkbox" className="checkmark" value="Yes" /> 
                                {/* <label className="radio" htmlFor="excellent_1"></label> */}
                                <label htmlFor="excellent_1" className="wrapper">Pay-it forward loan</label>
                            </div>
                            <div className="checkbox_radio_container">
                                <input type="checkbox" className="checkmark" value="Yes" />
                                {/* <label className="radio" htmlFor="excellent_1"></label> */}
                                <label htmlFor="excellent_1" className="wrapper">Community Assistance</label>
                              
                              </div>
                            </li>}
                        
                              
                          </ul>
                        </div>
                        </div>
                        <div className='btn-container'>
                            <button className="next-btn btn">Submit</button>
                            <button className="prev-btn btn" onClick={() => history.push('./QuestionForm7')}>Prev</button>
                        </div> 
                </form>
            </div>
        </div>;
}

export default QuestionForm8;


