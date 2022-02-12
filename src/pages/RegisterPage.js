import React,{useState} from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom';
import {app} from '../firebase';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';

function RegisterPage() {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const RegisterUser = (e) => {
      e.preventDefault();
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
          console.log(response);
      }).catch((error) => {
          console.log(error.message);
      })
  };

  return <div className="authenticationPage">
            <div className="authenticationPage-signIn-section">
                <div className="authenticationPage-logo">
				    <a href="index.html"><img src="" alt="brand-logo"/></a>
			    </div>
                <h4 className="authenticationPage-signIn-heading">Sign up your account</h4>
                <form className="authenticationPage-signIn-form">
                    <div className="form-group authenticationPage-form-group">
                        <label className="authenticationPage-label"><strong>Username</strong></label>
                        <input type="email" className="form-control" placeholder="username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group authenticationPage-form-group">
                        <label className="authenticationPage-label"><strong>Phone Number</strong></label>
                        <input type="password" className="form-control" placeholder="***" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {/* <div className="form-group authenticationPage-form-group">
                        <label className="authenticationPage-label"><strong>Password</strong></label>
                        <input type="password" className="form-control" placeholder="********" value={password}/>
                    </div> */}
                    
                    <div className="authenticationPage-signIn-btn">
                        <button className="btn" onClick={RegisterUser}>Sign Up</button>
                    </div>
                </form>
                <div className="authenticationPage-footer">
                    <p>Already have an account? <Link to='/'>Sign in</Link></p>
                </div>
            </div>                     
        </div>;
}

export default RegisterPage;
