import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header-3";
import PageHeader from "../component/layout/pageheader";
import React, { useState } from 'react';
import axios from 'axios';
import FeatureThree from "../component/section/feature-3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BaseURL} from '../constants'


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
        const IDST = Math.floor(Math.random() * (100222222222222202 - 1000000 + 1)) + 10000;
        console.log(StudentDetails);


        let URL=BaseURL+"/student/add-student"

        await axios.post(URL, {
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
            <ToastContainer

            />

            <Header />

            <FeatureThree />

            <Footer />
        </Fragment>
    );
}

export default SignupPage;