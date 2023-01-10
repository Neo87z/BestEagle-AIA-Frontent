
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
import { BaseURL} from '../constants'
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
        rightText: '-',
    },
    {
        iconName: 'icofont-book-alt',
        leftText: 'On Demand Video Hours',
        rightText: '-:-:-',
    },
    {
        iconName: 'icofont-signal',
        leftText: 'Lessons',
        rightText: '-',
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

const  CourseSingle = (props) => {
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

    const [CourseList, setCourseList] = useState([])
    const [VedioLost, setVedioLost] = useState([])

    useEffect(() => {
        const controller = new AbortController();

        const fetchDta = async () => {
            Authenication()
            console.log(data.ID, "IDDD")

            let URL=BaseURL+"/course/get-section-per-seubject"
            await Axios.post(URL, {

                subjectID: data.ID

            }).then((response) => {

                setCourseList(response.data)
                console.log(CourseList, "Doneeeeeeeeee")




            })

        }
        fetchDta();


        return () => controller.abort();

    }, []);

    const Authenication = () => {

        let URL=BaseURL+"/student/Authenicate"
      
        axios.get(URL, {
            headers: {
                "x-access-token": localStorage.getItem("token"),

            },
        })
            .then(
                (res => {
                    console.log(res.data.Login, "Stateee")
                    if (res.data.Login == true) {
                        setLoggedStatus("True")

                    }else{
                        setLoggedStatus("False")
                        localStorage.removeItem("FirstName");
                        localStorage.removeItem("LastName");
                    }

                })
            );
    }



    const [LoggedStatusFinal, setLoggedStatus] = useState(["False"])

    useEffect(() => {


        const controller = new AbortController();

        const fetchDta = async () => {



            let URL=BaseURL+"/course/get-vedio-per-seubject"
            await Axios.post(URL, {

                subjectID: data.ID

            }).then((response) => {

                setVedioLost(response.data)




            })

        }
        fetchDta();


        return () => controller.abort();

    }, []);





    const SName = localStorage.getItem("FirstName") + " " + localStorage.getItem("LastName")

    const EnrollStudent = async (e) => {
        let URL=BaseURL+"/course/enroll-course"

        await axios.post(URL, {
            CourseID: data.ID,
            StudentName: SName,

            StudenTID: localStorage.getItem("StudentID"),
            EnrollStatus: "Pending",
            EnrollDate: "2020/12/1",
            CompletedDate: "Pending",
            CourseName: CourseDetails.CourseName

        }).then(res => {

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


            let URL=BaseURL+"/course/get-enrolled-Status"

            await Axios.post(URL, {
                StudentID: localStorage.getItem("StudentID"),
                CourseID: CourseDetails.ID

            }).then((response) => {

                if (response["data"]["Status"]) {

                    setNrolledStatus("NotEnroleled")


                } else {


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
                                <img src={data.CourseImage} alt="rajibraj91" className="w-100" />

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

                                    <div className="course-video" style={{ marginTop: '-45px' }}>
                                        <div className="course-video-title">
                                            <h4>Course Content</h4>
                                        </div>
                                        <div className="course-video-content">
                                            <div className="accordion" id="accordionExample">


                                                {CourseList.map((val, key) => {
                                                    try {


                                                        if (key == 0) {
                                                            return <div className="accordion-item">
                                                                <div className="accordion-header" id="accordion01">
                                                                    <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist1" aria-expanded="true" aria-controls="videolist1"><span>{CourseList[key].SectionNumber} .{CourseList[key].SectionName}</span> <span>- lessons, -:-</span> </button>
                                                                </div>
                                                                <div id="videolist1" className="accordion-collapse collapse show" aria-labelledby="accordion01" data-bs-parent="#accordionExample">
                                                                    <ul className="lab-ul video-item-list">
                                                                        {VedioLost.map((val, keyData) => {
                                                                            console.log(CourseList[key].SectionNumber, "Sectionmnnnn", VedioLost[parseInt(CourseList[key].SectionNumber)].SectionNumber)
                                                                            var x = parseInt(VedioLost[key].SectionNumber)
                                                                            if (VedioLost[keyData].SectionNumber == 1) {
                                                                                console.log("Lol HEREEEEEEEEEEEEE")
                                                                                return <div className="card-body py-0">

                                                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                                                        <div className="video-item-title">{VedioLost[keyData].Vedioname}</div>
                                                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"></a></div>
                                                                                    </li>




                                                                                </div>


                                                                            }


                                                                        })}


                                                                    </ul>
                                                                </div>

                                                            </div>



                                                        } else {
                                                            var xData = "acc-" + CourseList[key].SectionNumber
                                                            var xDataHa = "#acc-" + CourseList[key].SectionNumber
                                                            return <div className="accordion-item">
                                                                <div className="accordion-header" id="accordion02">
                                                                    <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target={xDataHa} aria-expanded="true" > <span>{CourseList[key].SectionNumber} .{CourseList[key].SectionName}</span> <span>- lessons, -:-</span> </button>
                                                                </div>
                                                                <div id={xData} className="accordion-collapse collapse" aria-labelledby="accordion02" data-bs-parent="#accordionExample">
                                                                    <ul className="lab-ul video-item-list">
                                                                        {VedioLost.map((val, keyData) => {
                                                                            try {
                                                                                if (VedioLost[keyData].SectionNumber == CourseList[key].SectionNumber) {
                                                                                    return <li className=" d-flex flex-wrap justify-content-between">
                                                                                        <div className="video-item-title">{VedioLost[keyData].Vedioname}</div>
                                                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"></a></div>
                                                                                    </li>

                                                                                }

                                                                            } catch (err) {

                                                                            }


                                                                        })}
                                                                    </ul>
                                                                </div>
                                                            </div>



                                                        }
                                                    } catch {

                                                    }
                                                })}

                                            </div>
                                        </div>
                                    </div>


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
                                            EnrolledStatus == "NotEnroleled" && LoggedStatusFinal == "True" && (
                                                <div className="course-enroll">
                                                    <a onClick={EnrollStudent} className="lab-btn"><span>Enroll To Course</span></a>
                                                </div>
                                            )
                                        }

                                        {
                                            EnrolledStatus == "Pending" && LoggedStatusFinal == "True" && (
                                                <div className="course-enroll">
                                                    <a onClick={EnrollStudent} className="lab-btn"><span>Pending Enrollement</span></a>
                                                </div>
                                            )
                                        }

                                        {
                                            EnrolledStatus == "Enrolled" && LoggedStatusFinal == "True" && (
                                                <div className="course-enroll">
                                                    <Link className="lab-btn" to="/course-view" state={{
                                                        data: {
                                                            "CourseName": CourseDetails.CourseName,
                                                            "CourseID": CourseDetails.ID,
                                                            "Desc":CourseDetails.BriefDescription,
                                                            
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