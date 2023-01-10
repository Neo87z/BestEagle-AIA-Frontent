
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";
import React, { useEffect, Fragment, useState } from 'react'
import stay from '../../assets/images/instructor/other.png'
import wealth from '../../assets/images/instructor/welath.png'

const subTitle = "Entrepreneur Success Stories";
const title = "START TO SUCCESS";


const studentList = [
    {
        imgUrl: 'assets/images/feedback/student/01.jpg',
        imgAlt: 'student rajibraj91 rajibraj',
        name: 'Oliver Beddows',
        degi: 'UX designer',
        desc: 'Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze',
    },
    {
        imgUrl: 'assets/images/feedback/student/02.jpg',
        imgAlt: 'student rajibraj91 rajibraj',
        name: 'Madley Pondor',
        degi: 'UX designer',
        desc: 'Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze',
    },
]


const Student = () => {


    const [VedioLost, setVedioLost] = useState([""])

    useEffect(() => {
        setVedioLost(stay)

    }, []);

    const CHangeVid = async (event) => {
        console.log(stay)
        setVedioLost(stay)



    };
    const CHangeVid1 = async (event) => {
        setVedioLost(wealth)



    };



    return (
        <div className="student-feedbak-section padding-tb shape-img">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="title">{title}</h2>
                    <span className="subtitle">{subTitle}</span>

                </div>
                <div className="section-wrapper">
                    <div className="row justify-content-center row-cols-lg-2 row-cols-1">
                        <div className="col">
                            <div className="sf-left">
                                <div className="sfl-thumb">
                                    <img src={VedioLost} />
                                    <a href="https://www.youtube.com/embed/MU3qrgR2Kkc" className="video-button popup" target="_blank"><i className="icofont-ui-play"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div onClick={CHangeVid} className="stu-feed-item" >
                                <div className="stu-feed-inner">
                                    <div className="stu-feed-top">
                                        <div className="sft-left">
                                            <div className="sftl-thumb">
                                                <img src="assets/images/feedback/student/01.jpg" />
                                            </div>
                                            <div className="sftl-content">
                                                <h6>Vinol Priyasenarath </h6>
                                                <span>Area Development Manager</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="stu-feed-bottom">
                                        <p>Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze</p>
                                    </div>
                                </div>
                            </div>
                            <div onClick={CHangeVid1} className="stu-feed-item" >
                                <div className="stu-feed-inner">
                                    <div className="stu-feed-top">
                                        <div className="sft-left">
                                            <div className="sftl-thumb">
                                                <img src="assets/images/feedback/student/01.jpg" />
                                            </div>
                                            <div className="sftl-content">
                                                <h6>Priyanthi Dias</h6>
                                                <span>Business Development Manager</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="stu-feed-bottom">
                                        <p>Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Student;