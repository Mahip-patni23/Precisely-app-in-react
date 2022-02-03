import React from 'react';
import './QuestionForm1.css';
import './QuestionForm7.css';
import QuestionFormBackground from '../components/QuestionFormBackground';
import Navbar from '../components/Navbar';
import {useHistory} from 'react-router-dom';


function QuestionForm7() {
    const history = useHistory();
  return <div className="DetailsForm1">
            <Navbar></Navbar>
            
            <div className="DetailsForm1Center">
                <QuestionFormBackground></QuestionFormBackground>
                
                <form className="form1">
                    {/* <input type="text" value="" /> */}

                      <div className="form-step">
                        <h3 className="main_question">
                          <strong>7 of 8</strong>Supplementary questions
                        </h3>
                        <div className="form-group">
                          <input type="text" placeholder="Do you have any country preference" className="form-control"/>
                        </div>
                        <div className="form-group">
                          <label>When do you plan to start your studies?</label>
                        </div>
                        <div className="form-group">
                          <input type="date" placeholder="Your DOB" className="form-control"/>
                        </div>
                        
                      </div>
                      <div className='btn-container'>
                            <button className="next-btn btn" onClick={() => history.push('./QuestionForm8')}>Next</button>
                            <button className="prev-btn btn" onClick={() => history.push('./QuestionForm6')}>Prev</button>
                      </div>
                </form>
            </div>
        </div>;
}

export default QuestionForm7;
