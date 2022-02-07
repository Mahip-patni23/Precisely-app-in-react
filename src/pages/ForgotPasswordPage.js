import React from 'react';
import './LoginPage.css';

function ForgotPasswordPage() {
    return <div className="authenticationPage">
    <div className="authenticationPage-signIn-section">
        <div className="authenticationPage-logo">
            <a href="index.html"><img src="" alt="brand-logo"/></a>
        </div>
        <h4 className="authenticationPage-signIn-heading">Forgot Password</h4>
        <form className="authenticationPage-signIn-form">
            <div className="form-group authenticationPage-form-group">
                <label className="authenticationPage-label"><strong>Email</strong></label>
                <input type="email" className="form-control" placeholder="abc@gmail.com" />
            </div>
            <div className='form-group authenticationPage-form-group'>
                <div className="authenticationPage-signIn-btn">
                   <button className="btn">SUBMIT</button>
                </div>
            </div>
        </form>
    </div>                     
</div>
}

export default ForgotPasswordPage;
