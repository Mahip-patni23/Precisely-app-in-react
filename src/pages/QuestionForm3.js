import React from 'react';
import './QuestionForm1.css';
import './QuestionForm3.css';
import QuestionFormBackground from '../components/QuestionFormBackground';
import Navbar from '../components/Navbar';
import {useHistory} from 'react-router-dom';


function QuestionForm3() {
    const history = useHistory();


  return <div className="DetailsForm3">
            <Navbar></Navbar>
            
            <div className="DetailsForm1Center">
                <QuestionFormBackground></QuestionFormBackground>
                
                <form className="form1">
                    {/* <input type="text" value="" /> */}

                      <div className="form-step">
                        <h3 className="main_question">
                          <strong>3 of 7</strong>Please fill your Work history
                        </h3>
                        <div className="form-group">
                          <label>Company</label>
                          <label>Position</label>
                        </div>

                        <div className="form-group add-btn">
                          <button className='add-btn-class'>
                              Add
                          </button>
                        </div>
                        
                        </div>
                        <div className='btn-container'>
                            <button className="next-btn btn" onClick={() => history.push('./QuestionForm4')}>Next</button>
                            <button className="prev-btn btn" onClick={() => history.push('./QuestionForm2')}>Prev</button>
                        </div> 
                </form>
            </div>
        </div>;
}

export default QuestionForm3;
