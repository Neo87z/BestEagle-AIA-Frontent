import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import React, { useState } from 'react';
import axios from 'axios';
import FeatureThree from "../component/section/feature-3";



const title = "Register Now";
const socialTitle = "Register With Social Media";
const btnText = "Get Started Now";


let socialList = [
    {
        link: '#',
        iconName: 'icofont-facebook',
        className: 'facebook',
    },
    {
        link: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        link: '#',
        iconName: 'icofont-linkedin',
        className: 'linkedin',
    },
    {
        link: '#',
        iconName: 'icofont-instagram',
        className: 'instagram',
    },
    {
        link: '#',
        iconName: 'icofont-pinterest',
        className: 'pinterest',
    },
]


const SignupPage = () => {

    const [StudentDetails, SetStudentDetails] = useState({
        FirstName: "",
        LastName: "",
        Phone: "",
        Email: "",
        Passowrdd: "",
        ConmfirmPassword: "",
        NIC: "",
        IntroducedBy: "",
        StudentID: ""
    })

    const handleChange = (e) => {
        console.log("ddd")
        const { name, value } = e.target;
        console.log(e.target.name)
        SetStudentDetails({
            ...StudentDetails,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const IDST= Math.floor(Math.random() * (100222222222222202 - 1000000 + 1)) + 10000;
        console.log(StudentDetails);
        await axios.post('http://localhost:8089/student/add-student', {
            FirstName: StudentDetails.FirstName,
            LastName: StudentDetails.LastName,
            Phone: StudentDetails.Phone,
            Email: StudentDetails.Email,
            Password: StudentDetails.Passowrdd,
            ConfirmPassword: StudentDetails.ConmfirmPassword,
            NIC: StudentDetails.NIC,
            IntorcudedBy: StudentDetails.IntorcudedBy,
            StudentID: IDST

        }).then(res => {
            console.log(res);

        }).catch(err => {
            console.log(err);
        });


        

    };

    return (
        <Fragment>
                  
            <Header />

            <FeatureThree />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="FirstName"
                                    placeholder="First Name"
                                    onChange={handleChange}
                                    value={StudentDetails.FirstName}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="LastName"
                                    placeholder="Last Name"
                                    onChange={handleChange}
                                    value={StudentDetails.LastName}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="Phone"
                                    placeholder="Phone"
                                    onChange={handleChange}
                                    value={StudentDetails.Phone}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="Email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    value={StudentDetails.Email}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="Passowrdd"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    value={StudentDetails.Passowrdd}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="ConmfirmPassword"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    value={StudentDetails.ConmfirmPassword}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="NIC"
                                    placeholder="WP code or NIC Number"
                                    onChange={handleChange}
                                    value={StudentDetails.NIC}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="IntroducedBy"
                                    placeholder="Introduced By"
                                    onChange={handleChange}
                                    value={StudentDetails.IntroducedBy}
                                />
                            </div>
                            <div className="form-group">
                                <button className="lab-btn"><span>{btnText}</span></button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default SignupPage;