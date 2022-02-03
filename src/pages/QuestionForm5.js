import React from 'react';
import './QuestionForm1.css';
import './QuestionForm5.css';
import QuestionFormBackground from '../components/QuestionFormBackground';
import Navbar from '../components/Navbar';
import {useHistory} from 'react-router-dom';

function QuestionForm5() {
    const history = useHistory();
  return <div className="DetailsForm1">
            <Navbar></Navbar>
            
            <div className="DetailsForm1Center">
                <QuestionFormBackground></QuestionFormBackground>
                
                <form className="form1">
                    {/* <input type="text" value="" /> */}

                      <div className="form-step">
                        <h3 className="main_question">
                          <strong>5 of 8</strong>Please enter your scores
                        </h3>
                        <div className="form-group">
                          <label>*In case, you have not taken any of these test you may well enter an indicative expected scores between the allowed range</label>
                        </div>
                        <div className="form-group">
                          <input type="number" placeholder="GRE Q (130-170 or 200-800)" className="form-control"/>
                        </div>
                        <div className="form-group">
                          <input type="number" placeholder="GRE V (130-170 or 200-800)" className="form-control"/>
                        </div>
                        <div className="form-group">
                          <input type="number" placeholder="GRE W (0-6)" className="form-control"/>
                        </div>
                        <div className="form-group">
                          <input type="number" placeholder="TOEFL (0-120)" className="form-control"/>
                        </div>
                        <div className="form-group">
                          <input type="number" placeholder="IELTS (1-10)" className="form-control"/>
                        </div>
                      </div>
                      <div className='btn-container'>
                            <button className="next-btn btn" onClick={() => history.push('./QuestionForm6')}>Next</button>
                            <button className="prev-btn btn" onClick={() => history.push('./QuestionForm4')}>Prev</button>
                      </div> 
                </form>
            </div>
        </div>;
}

export default QuestionForm5;
