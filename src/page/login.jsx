import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header-3";
import PageHeader from "../component/layout/pageheader";
import React, { useState } from 'react';
import axios from 'axios';

import FeatureThree from "../component/section/feature-login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BaseURL} from '../constants'
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


        let URL=BaseURL+"/student/student-login"
        await axios.post(URL, {
            Email: StudentDetails.Email,
            Password: StudentDetails.Password,

        }).then(res => {
            if (res["data"]["Status"]) {
                console.log("Invalud")
                toast.success('Sucessfully Enrolled To The Course', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

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
            <ToastContainer

            />
            <Header />
            <FeatureThree />


            <Footer />
        </Fragment>
    );
}

export default LoginPage;