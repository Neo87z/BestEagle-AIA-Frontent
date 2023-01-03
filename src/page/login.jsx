import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import React, { useState } from 'react';
import axios from 'axios';

import FeatureThree from "../component/section/feature-3";
const title = "Login";
const socialTitle = "Login With Social Media";
const btnText = "Submit Now";


const socialList = [
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

const LoginPage = () => {
    const [StudentDetails, SetStudentDetails] = useState({

        Email: "",
        Password: ""

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

        console.log(StudentDetails.Email)
        console.log(StudentDetails.Password)
        console.log(StudentDetails);
        await axios.post('http://localhost:8089/student/student-login', {
            Email: StudentDetails.Email,
            Password: StudentDetails.Password,

        }).then(res => {
            if (res["data"]["Status"]) {
                console.log("Invalud")

            } else {

                localStorage.setItem("FirstName", res["data"][0]["FirstName"])
                localStorage.setItem("LastName", res["data"][0]["LastName"])
                localStorage.setItem("StudentID", res["data"][0]["StudentID"])
                localStorage.setItem("_id", res["data"][0]["_id"])
                sleep(2000).then(r => {
                    window.location = `/`
                })
            }


        }).catch(err => {
            console.log(err);
        });



    };
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
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
                                    type="email"
                                    name="Email"
                                    placeholder="Enter Email"
                                    onChange={handleChange}
                                    value={StudentDetails.Email}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="Password"
                                    placeholder="Enter Password"
                                    onChange={handleChange}
                                    value={StudentDetails.Password}
                                />
                            </div>
                            <div className="form-group">
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className="checkgroup">
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                    <Link to="/forgetpass">Forget Password?</Link>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button className="d-block lab-btn"><span>{btnText}</span></button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default LoginPage;