import React, { useState } from "react";
import "./Dashboard.css";
import "./UploadResume.css";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";

function UploadResume() {

    const changeHandler = (e) => {
        let files = e.target.files;
        console.warn("data file", files)
    };

    return (
        <>
            <Sidebar />
            <DashboardHeader name="Resume/CV Upload and Review" />


            <section className="dash-main">
                <div className="resume-heading">
                    <h2>Get a confidential review from a resume expert.</h2>
                    <h6>We review your resume comprehensively so you get all the information you need.</h6>
                    <img src="https://in.topresume.com/dist/images/resume-site/page-landing/critique-lp/how-working-with-0fbd926bb9.png" alt=""></img>
                    <br/>
                </div>

                <div className="input-file">
                    <p>Upload your resume to be reviewed — it’s an easy drag and drop</p>
                    <input className="input-btn" type="file" name="file" onChange={changeHandler} />
                </div>

                <div className="resume-review-box">
                    <div className="resume-flexbox">
                        <h4>Expert Review of your Resume :</h4>
                        <div className="border-line"></div>
                        <div className="expert-review">

                        </div>
                    </div>
                </div>

                <div className="footer">
                    <p>Copyright ©
                        <a href="http://precisely.co.in/" > Precisely - Study Abroad </a>
                        2020</p>
                </div>
            </section>
        </>
    )
}

export default UploadResume;