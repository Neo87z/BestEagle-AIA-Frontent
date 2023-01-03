
import Axios from 'axios';
import React, { useEffect, Fragment, useState } from 'react'
import Footer from "../component/layout/footer";
import { Link, useLocation, useParams } from 'react-router-dom';
import Header from "../component/layout/header-3";
import PageHeaderTwo from "../component/layout/pageheader-2";
import Author from "../component/sidebar/author";
import Comment from "../component/sidebar/comment";
import CourseSideCetagory from "../component/sidebar/course-cetagory";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CourseSideDetail from "../component/sidebar/course-detail";
import Respond from "../component/sidebar/respond";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Rating from "../component/sidebar/rating";
import 'react-tabs/style/react-tabs.css';
import { Button } from "bootstrap";
import axios from 'axios';
const title = "Foundation Course";
const desc = "Brief description about the course";
const author = "Shehan";
const reviewCount = "03 reviews";
const videoLink = "https://www.youtube-nocookie.com/embed/jP649ZHA8Tg";
const price = "89";
const excenge = "Course Features";
const paymentTitle = "Secure Payment:";
const shareTitle = "Share This Course:";
const btnText = "Enroll To The Course";



const csdcList = [
    {
        iconName: 'icofont-ui-alarm',
        leftText: 'Enrolled Students',
        rightText: '857',
    },
    {
        iconName: 'icofont-book-alt',
        leftText: 'On Demand Video Hours',
        rightText: '30:10:09',
    },
    {
        iconName: 'icofont-signal',
        leftText: 'Lessons',
        rightText: '08',
    },
    {
        iconName: 'icofont-video-alt',
        leftText: 'Language',
        rightText: 'English',
    },

]

const socialList = [
    {
        siteLink: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        siteLink: '#',
        iconName: 'icofont-vimeo',
        className: 'vimeo',
    },
    {
        siteLink: '#',
        iconName: 'icofont-rss',
        className: 'rss',
    },
]

const categoryList = [
    {
        link: '#',
        text: 'Adobe XD',
        className: 'course-cate',
    },
    {
        link: '#',
        text: '30% Off',
        className: 'course-offer',
    },
]

const CourseSingle = (props) => {
    const location = useLocation();
    console.log(location, " useLocation Hook");
    const data = location.state?.data;
    console.log(data)

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [LoadValued, setloadValues] = useState(false);

    const [EnrolledStatus, setNrolledStatus] = useState("NotEnroleled");

    const [CourseDetails, SetCourseDetails] = useState({
        CourseName: "",
        Author: "",
        BriefDescription: "",
        CourseOvervview: "",
        Lessons: "",
        Language: "",
        ID: "",
    })





    const SName = localStorage.getItem("FirstName") + " " + localStorage.getItem("LastName")

    const EnrollStudent = async (e) => {
        console.log("here")
        await axios.post('http://localhost:8089/course/enroll-course', {
            CourseID: data.ID,
            StudentName: SName,

            StudenTID: localStorage.getItem("StudentID"),
            EnrollStatus: "Pending",
            EnrollDate: "2020/12/1",
            CompletedDate: "Pending",
            CourseName:CourseDetails.CourseName

        }).then(res => {
            console.log(res);
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
            setNrolledStatus("Pending")
            

        }).catch(err => {
            console.log(err);
        });

    };


    if (LoadValued == false) {
        CourseDetails.CourseName = data.CourseDetails
        CourseDetails.Author = data.Author
        CourseDetails.BriefDescription = data.BriefDescription
        CourseDetails.CourseOvervview = data.CourseOvervview
        CourseDetails.Language = data.Language
        CourseDetails.Lessons = data.Lessons
        CourseDetails.ID = data.ID
        setloadValues(true)




    }


    useEffect(() => {
        const controller = new AbortController();

        const fetchDta = async () => {

            await Axios.post('http://localhost:8089/course/get-enrolled-Status', {
                StudentID: localStorage.getItem("StudentID"),
                CourseID: CourseDetails.ID

            }).then((response) => {

                if (response["data"]["Status"]) {
                    console.log(response, "Datata")
                    setNrolledStatus("NotEnroleled")
                    

                } else {

                    console.log(response, "Datata")
                    setNrolledStatus(response["data"][0]["EnrollStatus"])
                    
                    this.setState({
                        submitted: true,
                    });
                }


            })

        }
        fetchDta();


        return () => controller.abort();

    }, []);
    return (
        <Fragment>
            <Header />
            <ToastContainer

            />
            <div className="pageheader-section style-2">
                <div className="container">
                    <div style={{ marginTop: '-200px' }} className="row justify-content-center justify-content-lg-between align-items-center flex-row-reverse">
                        <div className="col-lg-7 col-12">
                            <div className="pageheader-thumb">
                                <img src="assets/images/pageheader/02.jpg" alt="rajibraj91" className="w-100" />

                            </div>
                        </div>
                        <div className="col-lg-5 col-12">
                            <div className="pageheader-content">

                                <h2 className="phs-title">{CourseDetails.CourseName}</h2>
                                <p className="phs-desc">{CourseDetails.BriefDescription}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course-single-section padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="main-part">
                                <div className="course-item">
                                    <Tabs>
                                        <TabList>
                                            <Tab>Overview</Tab>
                                            <Tab>Course Content</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <div className="course-inner">

                                                <div className="course-content">

                                                    <h3>Course Overview</h3>
                                                    <p>{CourseDetails.CourseOvervview}</p>
                                                    <h4>What You'll Learn in This Course:</h4>
                                                    <ul className="lab-ul">
                                                        <li><i className="icofont-tick-mark"></i>Ready to begin working on real-world data modeling projects</li>
                                                        <li><i className="icofont-tick-mark"></i>Expanded responsibilities as part of an existing role</li>
                                                        <li><i className="icofont-tick-mark"></i>Be able to create Flyers, Brochures, Advertisements</li>
                                                        <li><i className="icofont-tick-mark"></i>Find a new position involving data modeling.</li>
                                                        <li><i className="icofont-tick-mark"></i>Work with color and Gradients and Grids</li>
                                                    </ul>

                                                </div>

                                                <div className="course-content">

                                                    <h4>Requirements:</h4>
                                                    <ul className="lab-ul">
                                                        <li><i className="icofont-tick-mark"></i>Ready to begin working on real-world data modeling projects</li>
                                                        <li><i className="icofont-tick-mark"></i>Expanded responsibilities as part of an existing role</li>
                                                        <li><i className="icofont-tick-mark"></i>Be able to create Flyers, Brochures, Advertisements</li>
                                                        <li><i className="icofont-tick-mark"></i>Find a new position involving data modeling.</li>
                                                        <li><i className="icofont-tick-mark"></i>Work with color and Gradients and Grids</li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="course-video">
                                                <div className="course-video-title">
                                                    <h4>Course Content</h4>
                                                </div>
                                                <div className="course-video-content">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <div className="accordion-header" id="accordion01">
                                                                <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist1" aria-expanded="true" aria-controls="videolist1"><span>1.Introduction</span> <span>5lessons, 17:37</span> </button>
                                                            </div>
                                                            <div id="videolist1" className="accordion-collapse collapse show" aria-labelledby="accordion01" data-bs-parent="#accordionExample">
                                                                <ul className="lab-ul video-item-list">
                                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                                        <div className="video-item-title">1.1 Welcome to the course 02:30 minutes</div>
                                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                                    </li>
                                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                                        <div className="video-item-title">1.2 How to set up your photoshop workspace  08:33 minutes</div>
                                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                                    </li>
                                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                                        <div className="video-item-title">1.3 Essential Photoshop Tools 03:38 minutes</div>
                                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                                    </li>
                                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                                        <div className="video-item-title">1.4 Finding inspiration 02:30 minutes</div>
                                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                                    </li>
                                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                                        <div className="video-item-title">1.5 Choosing Your Format 03:48 minutes</div>
                                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <div className="accordion-header" id="accordion02">
                                                                <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist2" aria-expanded="true" aria-controls="videolist2"> <span>2.How to Create Mixed Media Art in Adobe Photoshop</span> <span>5 lessons, 52:15</span> </button>
                                                            </div>
                                                            <div id="videolist2" className="accordion-collapse collapse" aria-labelledby="accordion02" data-bs-parent="#accordionExample">
                                                                <ul className="lab-ul video-item-list">
                                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                                        <div className="video-item-title">2.1 Using Adjustment Layers 06:20 minutes</div>
                                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                                    </li>
                                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                                        <div className="video-item-title">2.2 Building the composition 07:33 minutes</div>
                                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                                    </li>
                                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                                        <div className="video-item-title">2.3 Photoshop Lighting effects 06:30 minutes</div>
                                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                                    </li>
                                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                                        <div className="video-item-title">2.4 Digital Painting using photoshop brushes 08:34 minutes</div>
                                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                                    </li>
                                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                                        <div className="video-item-title">2.5 Finalizing the details 10:30 minutes</div>
                                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </Tabs>

                                </div>





                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-part">
                                <div className="course-side-detail">
                                    <div style={{ backgroundColor: 'red' }} className="csd-title">

                                        <div className="csdt-right">
                                            <p className="mb-0"><i className="icofont-star"></i>{excenge}</p>
                                        </div>
                                    </div>
                                    <div className="csd-content">
                                        <div className="csdc-lists">
                                            <ul className="lab-ul">
                                                {csdcList.map((val, i) => (
                                                    <li key={i}>
                                                        <div className="csdc-left"><i className={val.iconName}></i>{val.leftText}</div>
                                                        <div className="csdc-right">{val.rightText}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {
                                            EnrolledStatus == "NotEnroleled" && (
                                                <div className="course-enroll">
                                                    <a onClick={EnrollStudent} className="lab-btn"><span>Enroll To Course</span></a>
                                                </div>
                                            )
                                        }

                                        {
                                            EnrolledStatus == "Pending" && (
                                                <div className="course-enroll">
                                                    <a onClick={EnrollStudent} className="lab-btn"><span>Pending Enrollement</span></a>
                                                </div>
                                            )
                                        }

                                        {
                                            EnrolledStatus == "Enrolled" && (
                                                <div className="course-enroll">
                                                    <Link className="lab-btn" to="/course-view" state={{
                                                        data: {
                                                            "CourseName": CourseDetails.CourseName,
                                                            "CourseID": CourseDetails.ID,
                                                        }
                                                    }}><h4>View Course Content</h4></Link>
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default CourseSingle;