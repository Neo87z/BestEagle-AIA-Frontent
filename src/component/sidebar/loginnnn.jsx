

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BaseURL} from '../../constants'


const title = "Student login";

const FeatureRegister = () => {
    const [StudentDetails, SetStudentDetails] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        NIC: "",
        Passowrdd: "",
        HighestEducation: "",
        EnglishLevel: "",
        WorkingStatus: ""
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
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(StudentDetails.Email)
        console.log(StudentDetails.Passowrdd)
        console.log(StudentDetails);
        let URL=BaseURL+"/student/student-login"
        await axios.post(URL, {
            Email: StudentDetails.Email,
            Password: StudentDetails.Passowrdd,

        }).then(res => {
            console.log("ResData",res.data["token"])
            if (res.data["Status"]== "Fail") {
                console.log("Invalud")
                toast.error('Invalid credentials', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

            } else {

                toast.success('Login Sucessfull', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                localStorage.setItem("token", res.data["token"])
                localStorage.setItem("FirstName", res.data["FinalData"][0]["FirstName"])
                localStorage.setItem("FirstName", res.data["FinalData"][0]["FirstName"])
                localStorage.setItem("LastName", res.data["FinalData"][0]["LastName"])
                localStorage.setItem("StudentID", res.data["FinalData"][0]["StudentID"])
                localStorage.setItem("_id", res.data["FinalData"][0]["_id"])
                sleep(2000).then(r => {
                    window.location = `/`
                })
            }


        }).catch(err => {
            console.log(err);
        });



    };

    return (

        <div className="feature-register">


            <h3>{title}</h3>

            <form onSubmit={handleSubmit}>

                <input required onChange={handleChange} type="email" value={StudentDetails.Email} name="Email" placeholder="Your Email" className="reg-input" />

                <input required onChange={handleChange} type="password" value={StudentDetails.Passowrdd} name="Passowrdd" placeholder="Password" className="reg-input" />



                <button className="lab-btn" type="submit"><span>Login</span></button>
            </form>
        </div>
    );
}

export default FeatureRegister;