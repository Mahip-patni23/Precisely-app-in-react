import React from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom';

function RegisterPage() {
  return <div className="authenticationPage">
            <div className="authenticationPage-signIn-section">
                <div className="authenticationPage-logo">
				    <a href="index.html"><img src="" alt="brand-logo"/></a>
			    </div>
                <h4 className="authenticationPage-signIn-heading">Sign up your account</h4>
                <form className="authenticationPage-signIn-form">
                    <div className="form-group">
                        <label className="authenticationPage-label"><strong>Username</strong></label>
                        <input type="text" className="form-control" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label className="authenticationPage-label"><strong>Email</strong></label>
                        <input type="email" className="form-control" placeholder="abc@gmail.com" />
                    </div>
                    <div className="form-group">
                        <label className="authenticationPage-label"><strong>Password</strong></label>
                        <input type="password" className="form-control" placeholder="********" />
                    </div>
                    
                    <div className="authenticationPage-signIn-btn">
                        <button className="btn">Sign Up</button>
                    </div>
                </form>
                <div className="authenticationPage-footer">
                    <p>Already have an account? <Link to='/'>Sign in</Link></p>
                </div>
            </div>                     
        </div>;
}

export default RegisterPage;
