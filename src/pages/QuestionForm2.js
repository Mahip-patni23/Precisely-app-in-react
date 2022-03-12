import React, { useState } from 'react';
import './QuestionForm1.css';
import './QuestionForm2.css';
import QuestionFormBackground from '../components/QuestionFormBackground';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import {useHistory} from 'react-router-dom';

function QuestionForm2() {
  const [showSchool, setShowSchool] = useState(false);
  const [showUniversity, setShowUniversity] = useState(false);
    const history = useHistory();

    const displayInputFields = () => {
      setShowSchool(true);
      setShowUniversity(true);
    }

    const displayOnlySchoolInputFields = () => {
      setShowSchool(true);
      setShowUniversity(false);
    }
  return <div className="DetailsForm1">
            <Navbar></Navbar>
            
            <div className="DetailsForm1Center">
                <QuestionFormBackground></QuestionFormBackground>
                
                <form className="form1">
                    {/* <input type="text" value="" /> */}

                      <div className="form-step">
                        <h3 className="main_question">
                          <strong>2 of 8</strong>Please fill your education history
                        </h3>
                        <div className="form-group">
                          <label>Course level you want to pursue</label>
                        </div>
                        <div className="review_block">
                          <ul>
                            <li>
                              <div className="checkbox_radio_container" >
                                <input 
                                type="radio" 
                                className="required" 
                                name = "degree"
                                value="bachelors" 
                                onClick={displayOnlySchoolInputFields}/>

                                {/* <label className="radio" htmlFor="poor_1"></label> */}

                                <label htmlFor="poor_1" className="wrapper">Bachelors</label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox_radio_container">
                                <input 
                                type="radio"
                                id="average_1" 
                                name="degree" 
                                className="required" 
                                value="masters" 
                                onClick={displayInputFields}/>

                                {/* <label className="radio" htmlFor="average_1"></label> */}

                                <label htmlFor="average_1" className="wrapper">Masters</label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox_radio_container">
                                <input 
                                type="radio" 
                                id="excellent_1" 
                                name="degree" 
                                className="required" 
                                value="phd" 
                                onClick={displayInputFields}/>

                                {/* <label className="radio" htmlFor="excellent_1"></label> */}

                                <label htmlFor="excellent_1" className="wrapper">Phd</label>
                              </div>
                            </li>
                            {showSchool && <li>
                              <div className="form-group">
                                <input type="text" placeholder="High School" className="form-control"/>
                              </div>
                              <div className="form-group">
                                <input type="number" placeholder="High School GPA(0-10)" className="form-control"/>
                              </div>
                              </li>}
                              {showUniversity && <li>
                              <div className="form-group">
                                <input type="text" placeholder="University Name" className="form-control"/>
                              </div>
                              <div className="form-group">
                                <input type="number" placeholder="University GPA(0-4)" className="form-control"/>
                              </div>
                              </li>}
                              
                          </ul>
                        </div>
                        </div>
                        <div className='btn-container'>
                            <button className="next-btn btn" onClick={() => history.push('./QuestionForm3')}>Next</button>
                            <button className="prev-btn btn" onClick={() => history.push('./QuestionForm1')}>Prev</button>
                        </div> 
                </form>
            </div>
            <Footer></Footer>
        </div>;
}

export default QuestionForm2;
