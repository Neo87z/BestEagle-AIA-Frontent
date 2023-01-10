

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BaseURL} from '../../constants'




const title = "Register Now!";

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
        const IDST = Math.floor(Math.random() * (100222222222222202 - 1000000 + 1)) + 10000;

        const myArray = StudentDetails.FirstName.split(" ");
        StudentDetails.FirstName = myArray[0]
        if (myArray[1] != undefined) {
            console.log("heree")
            StudentDetails.LastName = myArray[1]
        }




        let URL=BaseURL+"/student/add-student"
        await axios.post(URL, {
            FirstName: StudentDetails.FirstName,
            LastName: StudentDetails.LastName,
            Phone: StudentDetails.Phone,
            Email: StudentDetails.Email,
            Password: StudentDetails.Passowrdd,
            HighestEducation: StudentDetails.HighestEducation,
            NIC: StudentDetails.NIC,
            EnglishLevel: StudentDetails.EnglishLevel,
            WorkingStatus: StudentDetails.WorkingStatus,
            StudentID: IDST

        }).then(res => {
            toast.success('Registeration Sucessfull', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            sleep(2000).then(r => {
                window.location = `/login`
            })

        }).catch(err => {
            toast.error('Please Contact System Admin', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            console.log(err);
        });


        console.log(StudentDetails);





    };
    return (
        <div className="feature-register">
            <h3>{title}</h3>
            <form onSubmit={handleSubmit}>
                <input required onChange={handleChange} type="text" value={StudentDetails.FirstName} name="FirstName" placeholder="Your Name" className="reg-input" />
                <input required onChange={handleChange} type="email" value={StudentDetails.Email} name="Email" placeholder="Your Email" className="reg-input" />
                <input required onChange={handleChange} type="phone" value={StudentDetails.Phone} name="Phone" placeholder="Your Phone" className="reg-input" />
                <input required onChange={handleChange} type="text" value={StudentDetails.NIC} name="NIC" placeholder="NIC/WP Code" className="reg-input" />
                <input required onChange={handleChange} type="password" value={StudentDetails.Passowrdd} name="Passowrdd" placeholder="Password" className="reg-input" />
                <select required onChange={handleChange} value={StudentDetails.HighestEducation} name="HighestEducation" className="reg-input">
                    <option>Advanced level</option>
                    <option>Diploma</option>
                    <option>Undergraduate</option>
                    <option>Degree</option>
                    <option>Masters</option>
                </select>
                <select required onChange={handleChange} value={StudentDetails.EnglishLevel} name="EnglishLevel" className="reg-input">
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                    <option>Poor</option>
                </select>
                <select required onChange={handleChange} value={StudentDetails.WorkingStatus} name="WorkingStatus" className="reg-input">
                    <option>Not Working</option>
                    <option>Working</option>

                </select>


                <button className="lab-btn" type="submit"><span>Register Now</span></button>
            </form>
        </div>
    );
}

export default FeatureRegister;