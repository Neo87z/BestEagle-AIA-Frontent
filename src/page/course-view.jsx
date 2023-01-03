
import Axios from 'axios';
import React, { useEffect, Fragment, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

import ReactPlayer from 'react-player/youtube'


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



const CourseView = () => {
    const [viewFull, setViewFull] = useState(false);
    const [icon, setIcon] = useState(false);
    const location = useLocation();
    console.log(location, " useLocation Hook");
    const data = location.state?.data;
    console.log(data)


    const [VidUrl, setVidUrl] = useState("https://www.youtube.com/watch?v=E_aBd6jwKMg")
    const [CourseList, setCourseList] = useState([])
    const [VedioLost, setVedioLost] = useState([])
    useEffect(() => {
        const controller = new AbortController();

        const fetchDta = async () => {
            console.log(data.CourseID)

            await Axios.post('http://localhost:8089/course/get-section-per-seubject', {

                subjectID: data.CourseID

            }).then((response) => {
                console.log(response.data)
                setCourseList(response.data)




            })

        }
        fetchDta();


        return () => controller.abort();

    }, []);



    useEffect(() => {
        const controller = new AbortController();

        const fetchDta = async () => {
            console.log(data.CourseID)

            await Axios.post('http://localhost:8089/course/get-vedio-per-seubject', {

                subjectID: data.CourseID

            }).then((response) => {
                console.log(response.data)
                setVedioLost(response.data)




            })

        }
        fetchDta();


        return () => controller.abort();

    }, []);



    const CHangeVid = async (event) => {
        var a = (event.target.id)
        console.log(a)
        setVidUrl(a)


    };

    return (
        <Fragment>
            <Header />

            <div className="course-view-section padding-tb section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="course-view">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 col-12">
                                        <div className="video-part mb-4 mb-lg-0">
                                            <div className="vp-title mb-4">
                                                <h3>{data.CourseName}</h3>
                                            </div>
                                            <div className="vp-video mb-4">

                                                <ReactPlayer width="100%" controls url={VidUrl} />


                                            </div>
                                            <div className={`content-wrapper ${icon ? "open" : ""}`} >
                                                <div className="content-icon d-lg-none" onClick={() => setIcon(!icon)}>
                                                    <i className="icofont-caret-down"></i>
                                                </div>
                                                <div className="vp-content mb-5">
                                                    <h4>Summary</h4>
                                                    <p>This is an excellent course. The content seems very thorough and comprehensive. I like the way all the concepts and configurations are clearly demonstrated in GNS3. There are also a lot of troubleshooting examples and real world applications. I especially enjoyed the practical simlets. </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-8 col-12">
                                        <div className="video-list-area">
                                            <div className="video-head"></div>
                                            <div className="video-body">
                                                <div className="course-select-area border-radius-12">
                                                    <div className="csa-title mb-4">
                                                        <h5>Course Requirements</h5>
                                                    </div>
                                                    <div className="csa-body">
                                                        <ul className="lab-ul">
                                                            <li>
                                                                <div id="accordion">



                                                                    {CourseList.map((val, key) => {
                                                                        console.log("hereXXXXXXX", key);
                                                                        if (key == 0) {
                                                                            return <div className="card active bg-ash mb-1" VIdd={CourseList[key].VedioURL}>

                                                                                <div className="card-header bg-transparent border-bottom-0" id="acc-list-1">
                                                                                    <h5 className="mb-0">
                                                                                        <button className="w-100 border-0 bg-transparent outline-none text-left" data-bs-toggle="collapse" data-bs-target="#acc-1" aria-expanded="true" aria-controls="acc-1">
                                                                                            Section {CourseList[key].SectionNumber} : {CourseList[key].SectionName}
                                                                                            <span className="d-block font-weight-normal">Videos: 13  |  26:00 Min</span>
                                                                                            <div className="icon">
                                                                                                <i className="icofont-thin-down"></i>
                                                                                            </div>
                                                                                        </button>
                                                                                    </h5>
                                                                                </div>
                                                                                <div id="acc-1" className="collapse show" aria-labelledby="acc-list-1" data-bs-parent="#accordion">





                                                                                    {VedioLost.map((val, keyData) => {
                                                                                        console.log(CourseList[key].SectionNumber, "Sectionmnnnn", VedioLost[parseInt(CourseList[key].SectionNumber)].SectionNumber)
                                                                                        var x = parseInt(VedioLost[key].SectionNumber)
                                                                                        if (VedioLost[keyData].SectionNumber == 1) {
                                                                                            console.log("Lol HEREEEEEEEEEEEEE")
                                                                                            return <div className="card-body py-0">

                                                                                                <div className="course-lists d-flex flex-wrap justify-content-between">
                                                                                                    <div className="csa-left">
                                                                                                        <i className="icofont-checked complite"></i>
                                                                                                        <h6 onClick={CHangeVid} id={VedioLost[keyData].VedioURL} name="EventID" value={VedioLost[keyData].VedioURL}>{VedioLost[keyData].Vedioname}</h6>
                                                                                                        <p><i className="icofont-play-alt-2"></i>6:00 Min</p>
                                                                                                    </div>
                                                                                                </div>


                                                                                            </div>


                                                                                        }


                                                                                    })}

                                                                                </div>
                                                                            </div>

                                                                        } else {
                                                                            var xData = "acc-" + CourseList[key].SectionNumber
                                                                            var xDataHa = "#acc-" + CourseList[key].SectionNumber
                                                                            return <div className="card bg-ash mb-1">
                                                                                <div className="card-header bg-transparent border-bottom-0" >
                                                                                    <h5 className="mb-0">
                                                                                        <button className="w-100 border-0 bg-transparent outline-none text-left" data-bs-toggle="collapse" data-bs-target={xDataHa} aria-expanded="true" aria-controls="acc-2">
                                                                                            Section {CourseList[key].SectionNumber} : {CourseList[key].SectionName}
                                                                                            <span className="d-block font-weight-normal">Videos: 13  |  26:00 Min</span>
                                                                                            <div className="icon">
                                                                                                <i className="icofont-thin-down"></i>
                                                                                            </div>
                                                                                        </button>
                                                                                    </h5>
                                                                                </div>
                                                                                <div id={xData} className="collapse" data-bs-parent="#accordion">

                                                                                    {VedioLost.map((val, keyData) => {
                                                                                        try {
                                                                                            if (VedioLost[keyData].SectionNumber == CourseList[key].SectionNumber) {
                                                                                                return <div className="card-body py-0">
                                                                                                    <div className="course-lists d-flex flex-wrap justify-content-between">
                                                                                                        <div className="csa-left">
                                                                                                            <i className="icofont-square"></i>
                                                                                                            <h6>{VedioLost[keyData].Vedioname}</h6>
                                                                                                            <p><i className="icofont-play-alt-2"></i>6:00 Min</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>

                                                                                            }

                                                                                        } catch (err) {

                                                                                        }


                                                                                    })}



                                                                                </div>
                                                                            </div>








                                                                        }



                                                                    })}









                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </Fragment>
    )
}

export default CourseView;