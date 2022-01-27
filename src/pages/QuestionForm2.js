import React from 'react';
import './QuestionForm1.css';
import './QuestionForm2.css';
import QuestionFormBackground from '../components/QuestionFormBackground';
import Navbar from '../components/Navbar';
import {useHistory} from 'react-router-dom';

function QuestionForm2() {
    const history = useHistory();
  return <div className="DetailsForm1">
            <Navbar></Navbar>
            
            <div className="DetailsForm1Center">
                <QuestionFormBackground></QuestionFormBackground>
                
                <form className="form1">
                    {/* <input type="text" value="" /> */}

                      <div className="form-step">
                        <h3 className="main_question">
                          <strong>2 of 7</strong>Please fill your education history
                        </h3>
                        <div className="form-group">
                          <label>Course level you want to pursue</label>
                        </div>
                        <div className="review_block">
                          <ul>
                            <li>
                              <div className="checkbox_radio_container">
                                <input type="radio" className="required" value="Poor" />
                                {/* <label className="radio" htmlFor="poor_1"></label> */}
                                <label htmlFor="poor_1" className="wrapper">Bachelors</label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox_radio_container">
                                <input type="radio" id="average_1" name="question_1" className="required" value="Average" />
                                {/* <label className="radio" htmlFor="average_1"></label> */}
                                <label htmlFor="average_1" className="wrapper">Masters</label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox_radio_container">
                                <input type="radio" id="excellent_1" name="question_1" className="required" value="Excellent"/>
                                {/* <label className="radio" htmlFor="excellent_1"></label> */}
                                <label htmlFor="excellent_1" className="wrapper">Phd</label>
                              </div>
                            </li>
                          </ul>
                        </div>
                        </div>
                        <div className='btn-container'>
                            <button className="next-btn btn" onClick={() => history.push('./QuestionForm3')}>Next</button>
                            <button className="prev-btn btn" onClick={() => history.push('./QuestionForm1')}>Prev</button>
                        </div> 
                </form>
            </div>
        </div>;
}

export default QuestionForm2;
