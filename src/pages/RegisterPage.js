import React,{useState} from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom';
import {app} from '../firebase';
import {signInWithPhoneNumber, getAuth, RecaptchaVerifier} from 'firebase/auth';
import {useHistory} from 'react-router-dom';

function RegisterPage() {
    const history = useHistory();
    const[phoneNumber, setPhoneNumber] = useState("");

    
  const auth = getAuth();
  const setUpRecaptcha = () => {
      window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
              size: "invisible",
              callback: (response) => {
                  console.log("captcha resolved");
                  RegisterUser();
              },
              defaultCountry: "IN",
          }, auth);
  };
    
  const RegisterUser = (e) => {
      e.preventDefault();
      setUpRecaptcha();

      var phoneNumber1 = "+911234567899";
      console.log(phoneNumber1);

      
      var appVerifier = window.recaptchaVerifier;
      
      signInWithPhoneNumber(auth, phoneNumber1, appVerifier)
      .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          const code = window.prompt("Enter OTP");
          confirmationResult
          .confirm(code)
          .then((result) => {
            // User signed in successfully.
             /* const user = result.user; */
             console.log("User is Signed In");
             history.push('./QuestionForm1');
          // ...
          }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          alert("Incorrect OTP")
        });

      }).catch((error) => {
          /* console.log(error.message); */
      })
  };

  return <div className="authenticationPage">
            <div className="authenticationPage-signIn-section">
                <div className="authenticationPage-logo">
				    <a href="https://www.precisely.co.in/"><img className="brand-title" src='https://demo.precisely.co.in/images/logo-text.png' alt=""></img></a>
			    </div>
                <h4 className="authenticationPage-signIn-heading">Sign up your account</h4>
                <form onSubmit={RegisterUser}>
                    
                    <div id="recaptcha-container"></div>
                    <div className="form-group authenticationPage-form-group">
                        <label className="authenticationPage-label"><strong>Phone Number</strong></label>
                        <input type="phone" className="form-control" placeholder="98712***" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                    
                    <div className="authenticationPage-signIn-btn">
                        <button className="btn" type="submit" >Sign Up</button>
                    </div>
                </form>
                <div className="authenticationPage-footer">
                    <p>Already have an account? <Link to='/'>Sign in</Link></p>
                </div>
            </div>                     
        </div>;
}

export default RegisterPage;
