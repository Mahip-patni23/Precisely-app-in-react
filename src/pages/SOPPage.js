import React, { useState } from "react";
import "./Dashboard.css";
import "./UploadResume.css";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import { Button } from "react-bootstrap";

function SOPPage() {
  const [text, setText] = useState("");
  const [state, setState] = useState({
    wordCount: 0,
  });

  const handleText = () => {
    console.log(text);

    // fetch("https://grammarbot.p.rapidapi.com/check", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/x-www-form-urlencoded",
    //     "x-rapidapi-host": "grammarbot.p.rapidapi.com",
    //     "x-rapidapi-key": "e4fabb9be2msh6d00f3fe91d6a7bp14631fjsn1dc1b2c8f6c1",
    //   },
    //   body: {
    //     text: {text},
    //     language: "en-US",
    //   },
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  const handleKeyPress = (e) => {
    const count = e.target.value;
    setText(e.target.value);

    const countWords = (count) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi, "");
        count = count.replace(/[ ]{2,}/gi, " ");
        count = count.replace(/\n /, "\n");
        return count.split(" ").length;
      }
    };

    setState({
      wordCount: 100 - countWords(count),
    });
  };

  return (
    <>
      <Sidebar />
      <DashboardHeader name="Statement of Purpose Upload & Review" />

      <section className="dash-main">
        <div className="resume-heading">
          <h2>Get your SOP reviewed by experts.</h2>
          <h6>
            We review your SOP comprehensively so you get all the information
            you need.
          </h6>
          <img
            src="https://in.topresume.com/dist/images/resume-site/page-landing/critique-lp/how-working-with-0fbd926bb9.png"
            alt=""
          ></img>
          <br />
        </div>

        <div className="input-file">
          <p>
            Copy/Paste your Statement of Purpose in the textbox given below:
          </p>
          <textarea
            name="SOPtext"
            rows="15"
            cols="130"
            minLength="100"
            placeholder="Type Here"
            onChange={handleKeyPress}
          />
          <p>
            Your SOP needs to be atleast 100 words before you submit it .{" "}
            {state.wordCount} words to go...
          </p>
        </div>

        <Button
          variant="primary"
          size="sm"
          className="resume-upload-btn"
          onClick={handleText}
        >
          Submit
        </Button>

        <div className="resume-review-box">
          <div className="resume-flexbox">
            <h4>Expert Review of your SOP :</h4>
            <div className="border-line"></div>
            <div className="expert-review">Review here</div>
          </div>
        </div>
      </section>

      <div className="footer">
        <p>
          Copyright ©
          <a href="http://precisely.co.in/"> Precisely - Study Abroad </a>
          2020
        </p>
      </div>
    </>
  );
}

export default SOPPage;
