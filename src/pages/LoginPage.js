import React from 'react';
import './LoginPage.css';
import { useHistory, Link } from "react-router-dom";

function LoginPage() {
    const history = useHistory();
    
  return <div className="authenticationPage">
            <div className="authenticationPage-signIn-section">
                <div className="authenticationPage-logo">
				    <a href="index.html"><img src="" alt="brand-logo"/></a>
			    </div>
                <h4 className="authenticationPage-signIn-heading">Sign in your account</h4>
                <form className="authenticationPage-signIn-form">
                    <div className="form-group authenticationPage-form-group">
                        <label className="authenticationPage-label"><strong>Email</strong></label>
                        <input type="email" className="form-control" placeholder="abc@gmail.com" />
                    </div>
                    <div className="form-group authenticationPage-form-group">
                        <label className="authenticationPage-label"><strong>Password</strong></label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="authenticationPage-signIn-help">
                        <div className="form-group authenticationPage-form-group">
                           <div className="authenticationPage-rememberMyPreference">
							    <input type="checkbox" className="custom-control-input" id="basic_checkbox_1"/>
							    <label className="custom-control-label" htmlFor="basic_checkbox_1">Remember my preference</label>
						    </div>
                        </div>
                        <div className="form-group authenticationPage-form-group">
                            <Link className="authenticationPage-forgotPassword" to='/ForgotPasswordPage'>Forgot Password?</Link>
                        </div>
                    </div>
                    <div className="authenticationPage-signIn-btn">
                        <button className="btn" onClick={() => history.push("./QuestionForm1")}>Sign Me In</button>
                    </div>
                </form>
                <div className="authenticationPage-footer">
                    <p>Don't have an account? <Link to='/RegisterPage'>Sign up</Link></p>
                </div>
            </div>                     
        </div>
}

export default LoginPage;
