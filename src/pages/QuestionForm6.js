import React from 'react';
import './QuestionForm1.css';
import './QuestionForm6.css';
import QuestionFormBackground from '../components/QuestionFormBackground';
import Navbar from '../components/Navbar';
import {useHistory} from 'react-router-dom';
import Select from 'react-select';

const options = [
  { value: 'cse', label: 'Computer Science And Engineering' },
  { value: 'economics', label: 'Economics' },
  { value: 'education', label: 'Education' },
  { value: 'ce', label: 'Civil Engineering' },
  { value: 'me', label: 'Mechanical Engineering' }
]

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
                        

                        <div className="mb-2">
                          <Select
                            options={options}
                            className="select-dropdown-majors"
                            placeholder="Select Majors"
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 0,
                              colors: {
                                ...theme.colors,
                                primary25: 'lightblue',
                                primary: 'blue',
                              },
                            })}
                          />
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
