import React from 'react';
import './QuesPage.css'


function QuesPage2() {
  return <>
        <header>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-5">
                          <a href="index.html"><img src="img/logo.svg" alt="" width="200" height="55" /></a>
                        </div>
                        <div className="col-7">
                          <div id="social">
                            <ul>
                              <li>
                                <a href="https://www.facebook.com/WeArePrecisely/"><i className="social_facebook"></i></a>
                              </li>
                
                              <li>
                                <a href="https://www.instagram.com/studyabroadprecisely/"><i className="social_instagram"></i></a>
                              </li>
                              <li>
                                <a href="https://www.linkedin.com/company/weareprecisely/"><i className="social_linkedin"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    
                  </header>
                  
        <div className="step">
                    <h3 className="main_question">
                      <strong>2 of 7</strong>Please fill your education
                      history
                    </h3>
                    <div className="form-group">
                      <p for="last-education">
                        Course level you want to pursue
                      </p>
                    </div>
                    <div className="form-group">
                      <div className="review_block">
                        <ul>
                          <li>
                            <div className="checkbox_radio_container">
                              <input type="radio" id="bachelors" name="question_2" className="required" value="bachelors"
                                onchange="getVals(this, 'question_2');" />
                              <label className="radio" for="bachelors"></label>
                              <label for="bachelors" className="wrapper">Bachelors</label>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_radio_container">
                              <input type="radio" id="masters" name="question_2" className="required" value="masters"
                                onchange="getVals(this, 'question_2');" />
                              <label className="radio" for="masters"></label>
                              <label for="masters" className="wrapper">Masters</label>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_radio_container">
                              <input type="radio" id="phd" name="question_2" className="required" value="phd"
                                onchange="getVals(this, 'question_2');" />
                              <label className="radio" for="phd"></label>
                              <label for="phd" className="wrapper">Phd</label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div id="high-school" className="form-group">
                      <label for="school">High School</label>
                      <input type="text" name="school" id="school" className="form-control" />
                    </div>
                    <div id="high_school_gpa_div" className="form-group">
                      <label for="high-school-gpa">High School GPA (0-10)</label>
                      <input type="text" name="gpa" id="high-school-gpa" className="form-control" />
                    </div>
                    <div className="form-group" id="university-name">
                      <label for="university">University Name</label>
                      <input type="text" name="university" id="university" className="form-control" />
                    </div>
                    <div sclassName="form-group" id="university-gpa">
                      <label for="university_gpa">University GPA (0-4)</label>
                      <input type="text" name="university_gpa" id="university_gpa" className="form-control" />
                    </div>
                  </div>
  </>;
}

export default QuesPage2;
