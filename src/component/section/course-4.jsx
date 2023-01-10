
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";
import React, { useState, useRef, useEffect, Component, Fragment } from 'react'
import Axios from 'axios';
import { BaseURL} from '../../constants'

const title = "Data Library";


const CourseData = [
    {
        imgUrl: 'assets/images/course/16.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        cate: 'English',
        title: 'Basic English Spoken and Writing',
        author: 'assets/images/course/author/01.jpg',
        authorName: 'William Smith',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: 'assets/images/course/17.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        cate: 'Software',
        title: 'Learn Advance with PHP Language',
        author: 'assets/images/course/author/02.jpg',
        authorName: 'Angel Mili',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: 'assets/images/course/18.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        cate: 'Design',
        title: 'Logo Design in Adobe Illustrator',
        author: 'assets/images/course/author/03.jpg',
        authorName: 'Sajahan Sagor',
        price: '$199.00',
        id: 3,
    },
    {
        imgUrl: 'assets/images/course/19.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        cate: 'Photography',
        title: 'Digital Photography for Beginner',
        author: 'assets/images/course/author/04.jpg',
        authorName: 'Ummi Nishat',
        price: '$199.00',
        id: 4,
    },
    {
        imgUrl: 'assets/images/course/20.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        cate: 'Marketing',
        title: 'Advance Social Media Marketing',
        author: 'assets/images/course/author/05.jpg',
        authorName: 'Rassel Hossin',
        price: '$199.00',
        id: 5,
    },
    {
        imgUrl: 'assets/images/course/21.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        cate: 'Music',
        title: 'A Guidelines Complete Guitar System',
        author: 'assets/images/course/author/06.jpg',
        authorName: 'Zinat Zaara',
        price: '$199.00',
        id: 6,
    },
    {
        imgUrl: 'assets/images/course/22.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        cate: 'Design',
        title: 'Learn Piano Guidelines System A to Z',
        author: 'assets/images/course/author/01.jpg',
        authorName: 'William Smith',
        price: '$199.00',
        id: 7,
    },
    {
        imgUrl: 'assets/images/course/23.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        cate: 'Software',
        title: 'Advance Professional Graphic Design',
        author: 'assets/images/course/author/02.jpg',
        authorName: 'Angel Mili',
        price: '$199.00',
        id: 8,
    },
]


const CourseFour = () => {
    const [CourseList, setCourseList] = useState([])

    useEffect(() => {
        const controller = new AbortController();
        let URL=BaseURL+"/student/get-all-data-online"

        const fetchDta = async () => {
            await Axios.post(URL).then((response) => {
                console.log(response.data)
                setCourseList(response.data)
            })



        }
        fetchDta();
        console.log(CourseList)

        return () => controller.abort();

    }, []);


    const [items, setItems] = useState(CourseData);
    const filterItem = (categItem) => {
        const updateItems = CourseData.filter((curElem) => {
            return curElem.cate === categItem;
        });
        setItems(updateItems);
    }

    return (
        <div className="course-section style-3 padding-tb">
            <div className="course-shape one"><img src="assets/images/shape-img/icon/01.png" alt="education" /></div>
            <div className="course-shape two"><img src="assets/images/shape-img/icon/02.png" alt="education" /></div>
            <div className="container">
                <div className="section-header">
                    <h2 className="title">{title}</h2>

                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
                        {CourseList.map((val, i) => {

                            return (
                                <div className="col" key={i}>
                                    <div className="course-item style-4">
                                        <div className="course-inner">

                                            <div className="course-content">
                                               <a href={CourseList[i].URL} target="_blank"> <h5>{CourseList[i].Name}</h5></a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }


                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseFour;

