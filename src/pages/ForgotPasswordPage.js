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
            <div className="form-group">
                <label className="authenticationPage-label"><strong>Email</strong></label>
                <input type="email" className="form-control" placeholder="" />
            </div>
            <div className="authenticationPage-signIn-btn">
                <button className="btn">Submit</button>
            </div>
        </form>
    </div>                     
</div>
}

export default ForgotPasswordPage;
