

import Footer from "../component/layout/footer";
import Header from "../component/layout/header-3";
import PageHeader from "../component/layout/pageheader";
import GroupSelect from "../component/sidebar/group-select";
import Pagination from "../component/sidebar/pagination";
import Rating from "../component/sidebar/rating";
import SkillSelect from "../component/sidebar/skill-select";
import React, { useState, useRef, useEffect, Component, Fragment } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import Axios from 'axios';
import { BaseURL} from '../constants'
import CourseTwo from "../component/section/course-2";
import CategoryTwo from "../component/section/category-2";

const subTitle = "Featured Courses";
const title = "Pick A Course To Get Started";


const courseList = [
    {
        imgUrl: 'assets/images/course/01.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '3.00 Hours',
        title: 'Fundamentals of Adobe XD Theory Learn New',
        totalLeson: '18 Lesson',
        schdule: '0 Exams',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'William Smith',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/02.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Certified Graphic Design with Free Project Course',
        totalLeson: '18 Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/02.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Lora Smith',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/03.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Theory Learn New Student And Fundamentals',
        totalLeson: '18 Lesson',
        schdule: '0 Exams',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Robot Smith',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/04.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Computer Fundamentals Basic Startup Ultricies Vitae',
        totalLeson: '18 Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/04.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Zinat Zaara',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/05.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Boozy Halloween Drinks for the Grown Eleifend Kuismod',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/05.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Rajib Raj',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/06.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Student Want to Learn About Science And Arts',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/06.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Angel Mili',
        btnText: 'Read More',
    },
]


const CoursePage = () => {
    const location = useLocation();
    console.log(location, " useLocation Hook");
    const dataNew = location.state?.data;
    console.log(dataNew.CourseCateogry,"Filterrrrrrrrrrr")
    const [Subtitle, setSubtitle] = useState("Featured Courses")

  


    const [CourseList, setCourseList] = useState([])

    const [data, setData] = useState({
        id: "1t4",
        title: " How to pass state in react-router-dom",
        tag: ["reactjs", "react-router-dom"]
    });




    useEffect(() => {
        const controller = new AbortController();
        if(dataNew.CourseCateogry == "CAAP"){
            setSubtitle("Career Presentation Courses")
            
    
        }
        if(dataNew.CourseCateogry == "FC"){
            setSubtitle("Foundation Courses")
            
    
        }
        if(dataNew.CourseCateogry == "IBSL"){
            setSubtitle("IBSL Courses")
            
    
        }
        if(dataNew.CourseCateogry == "ORPP"){
            setSubtitle("Online Role Play Presentation Courses")
            
    
        }
        if(dataNew.CourseCateogry == "OH"){
            setSubtitle("Objection Handling Courses")
            
    
        }
        if(dataNew.CourseCateogry == "PXQP"){
            setSubtitle("Product Explain & Quotation Practice Courses")
            
    
        }
        if(dataNew.CourseCateogry == "HN"){
            setSubtitle("Health Need Courses")
            
    
        }
        if(dataNew.CourseCateogry == "FN"){
            setSubtitle("CaForeing Language Courses")
            
    
        }


        const fetchDta = async () => {

            let URL=BaseURL+"/course/get-courses-per-catergory"
            await Axios.post(URL,{
                CourseFilterID:dataNew.CourseCateogry
            }).then((response) => {
                console.log(response.data)
                setCourseList(response.data)
            })

        }
        fetchDta();
        console.log(CourseList)

        return () => controller.abort();

    }, []);


    return (
        <Fragment>
            <Header />



            <div className="course-section padding-tb section-bg">
                <div className="container">
                    <div className="section-wrapper">

                        <div className="section-header text-center">
                            <span className="subtitle">{Subtitle}</span>
                            <h2 className="title">{title}</h2>
                        </div>
                        <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
                            {CourseList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="course-item">
                                        <div className="course-inner">
                                            <div className="course-thumb">
                                                <img src={val.Lessons} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="course-content">

                                                <div className="course-category">

                                                    <div className="course-reiew">
                                                        <Rating />

                                                    </div>
                                                </div>

                                                <Link to="/course-single" state={{
                                                    data: {
                                                        "CourseDetails": val.CourseDetails,
                                                        "Author": val.Author,
                                                        "BriefDescription": val.BriefDescription,
                                                        "CourseOvervview": val.CourseOvervview,
                                                        "Lessons": val.Lessons,
                                                        "Language": val.Language,
                                                        "ID": val._id

                                                    }
                                                }}><h4>{val.CourseDetails}</h4></Link>
                                                <div className="course-details">
                                                    <div className="couse-count"><i className="icofont-video-alt"></i> </div>
                                                    <div className="couse-topic"><i className="icofont-signal"></i> 0 Exams</div>
                                                    <div className="couse-topic"><i className="icofont-signal"></i>  Watch Hours</div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default CoursePage;