import React, {useState} from 'react';
import './QuestionForm1.css';
import './QuestionForm3.css';
import QuestionFormBackground from '../components/QuestionFormBackground';
import Navbar from '../components/Navbar';
import {useHistory} from 'react-router-dom';
import {Button, Modal, Form} from 'react-bootstrap';


function QuestionForm3(props) {
    const history = useHistory();
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



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
                        <Button variant="primary" className='add-btn-class' onClick={handleShow}>
                          Add
                        </Button>

                          <Modal{...props}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Work Experience</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                              <Form.Group controlId="formBasicEmail">
                                
                                <Form.Control type="text" placeholder="Company" />
                                
                              </Form.Group>

                              <Form.Group controlId="formBasicPassword">
                                
                                <Form.Control className='form-control' type="text" placeholder="Position" />

                              </Form.Group>
                            </Form>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                              <Button variant="primary" onClick={handleClose}>
                                Save
                              </Button>
                            </Modal.Footer>
                          </Modal>

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
