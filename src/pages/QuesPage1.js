import React from 'react';
import './QuesPage.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';

// const [value, setValue] = React.useState(null);


function QuesPage1() {
     return <>   
                <div className='main-div'>
                  {/* Header */}
                    <div className="header-div">                      
                        <div className='col-5'>
                          <a href="index.html"><img src="img/logo.svg" alt="" width="200" height="55" /></a>
                        </div>
                        <div className="col-7">                           
                              <div className='social-links'>
                             
                                <a href="https://www.linkedin.com/company/weareprecisely/"><LinkedInIcon fontSize='large'/></a>
                              
                              </div>
                              <div className='social-links'>
                                <a href="https://www.instagram.com/studyabroadprecisely/"><InstagramIcon fontSize='large'/></a>
                              
                              </div>
                              
                              <div className='social-links'>
                                
                                <a href="https://www.facebook.com/WeArePrecisely/"><FacebookIcon fontSize='large'/></a>
                              
                              </div>                              
                      </div>
                    </div>
                  
                 {/* Body  */}
              
                  <div className='body-div'>
                    <div className="body-div-right">
                        <div className="main-question">
                          <h3>
                          <strong>1 of 7</strong>                          
                        </h3>
                        <h4>
                          <strong>Please fill with your details</strong>
                        </h4>
                        </div>
                        <div className="form-group">
                          
                          <Box
                            component="form"
                            sx={{
                              '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                          >
                          <TextField id="filled-basic" label="Name" variant="filled" />
                          </Box>
                          
                        </div>

                        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="Basic example"
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider> */}

                        <div className="form-group">                          
                          <input type="text" name="birthday" id="datepicker" className="form-control" placeholder='Date of Birth'/>
                        </div>
                        <div className="form-group">
                          <label for="email">Select your gender</label>
                        </div>
                        <div className="review_block">
                          <ul>
                            <li>
                              <div className="checkbox_radio_container">
                                <input type="radio" id="poor_1" name="question_1" className="required" value="Poor"
                                  onchange="getVals(this, 'question_1');" />
                                <label className="radio" for="poor_1"></label>
                                <label for="poor_1" className="wrapper">Male</label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox_radio_container">
                                <input type="radio" id="average_1" name="question_1" className="required" value="Average"
                                  onchange="getVals(this, 'question_1');" />
                                <label className="radio" for="average_1"></label>
                                <label for="average_1" className="wrapper">Female</label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox_radio_container">
                                <input type="radio" id="excellent_1" name="question_1" className="required" value="Excellent"
                                  onchange="getVals(this, 'question_1');" />
                                <label className="radio" for="excellent_1"></label>
                                <label for="excellent_1" className="wrapper">Others</label>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="dropdown form-group">
                          <button className="btn btn-secondary dropdown-toggle form-control marital" type="button"
                            id="dropdownMenu2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            background-color="#4CAF50">
                            Marital status
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
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
                        </div>
                    
                        <div className="form-group terms">
                          <input type="checkbox" name="terms" value="Yes" className="" />
                            <span className="checkmark"></span>
                          <label className="container_check">Please accept our
                            <a href="https://www.freecodecamp.org/news/css-vertical-align-how-to-center-a-div-text-or-an-image-example-code/" >Terms and conditions</a>
                            
                          </label>
                        </div>
                      </div>

                      <div className='body-div-left'>
                          <h1><strong>PRECISELY</strong></h1>
                          <br />
                          <p>" Preparing students for international mobility programs "</p>
                          <br />
                          <p>- Yours Truly</p>
                      </div> 
                    </div> 




                 {/* <footer> */}
                    <div class="footer-div">
                        <div class="col-md-3">
                          <a href="https://www.precisely.co.in" class="animated_link">Precisely Website</a>
                        </div>
                    </div>
                </div>
                 
                </>  
}

export default QuesPage1;
