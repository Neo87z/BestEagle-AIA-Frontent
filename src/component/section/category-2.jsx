
import { Link } from "react-router-dom";
import Axios from 'axios';
import { BaseURL} from '../../constants'

import React, { useState, useRef, useEffect, Component, Fragment } from 'react'
const subTitle = "Popular Category";
const title = "Popular Category To Learn";



const categoryList = [
    {
        imgUrl: 'assets/images/category/icon/07.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Career Presentation ',
        desc: '24 Course',
        Cat: "CAAP"
    },
    {
        imgUrl: 'assets/images/category/icon/08.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Foundation Course',
        desc: '63 Course',
        Cat: "FC"

    },
    {
        imgUrl: 'assets/images/category/icon/09.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'IBSL',
        desc: '43 Course',
        Cat: "IBSL"
    },
    {
        imgUrl: 'assets/images/category/icon/10.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Online Role Play  ',
        desc: '50 Course',
        Cat: "ORPP"
    },
    {
        imgUrl: 'assets/images/category/icon/11.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Objection Handling ',
        desc: '27 Course',
        Cat: "OH"
    },
    {
        imgUrl: 'assets/images/category/icon/12.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Product & QuotationExplain  ',
        desc: '87 Course',
        Cat: "PXQP"
    },
    {
        imgUrl: 'assets/images/category/icon/13.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Health Need',
        desc: '15 Course',
        Cat: "HN"
    },
    {
        imgUrl: 'assets/images/category/icon/14.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Foreign Language',
        desc: '15 Course',
        Cat: "FN"
    },
]

const CategoryTwo = () => {


    const [CountList, setCountList] = useState([])

    const [CopurseCattList, setCopurseCattList] = useState([
        {
            imgUrl: 'assets/images/category/icon/07.jpg',
            imgAlt: 'category rajibraj91 rajibraj',
            title: 'Career Presentation ',
            desc: ' Course',
            Cat: "CAAP"
        },
        {
            imgUrl: 'assets/images/category/icon/08.jpg',
            imgAlt: 'category rajibraj91 rajibraj',
            title: 'Foundation Course',
            desc: 'Course',
            Cat: "FC"

        },
        {
            imgUrl: 'assets/images/category/icon/09.jpg',
            imgAlt: 'category rajibraj91 rajibraj',
            title: 'IBSL',
            desc: ' Course',
            Cat: "IBSL"
        },
        {
            imgUrl: 'assets/images/category/icon/10.jpg',
            imgAlt: 'category rajibraj91 rajibraj',
            title: 'Online Role Play  ',
            desc: ' Course',
            Cat: "ORPP"
        },
        {
            imgUrl: 'assets/images/category/icon/11.jpg',
            imgAlt: 'category rajibraj91 rajibraj',
            title: 'Objection Handling ',
            desc: ' Course',
            Cat: "OH"
        },
        {
            imgUrl: 'assets/images/category/icon/12.jpg',
            imgAlt: 'category rajibraj91 rajibraj',
            title: 'Product & QuotationExplain  ',
            desc: ' Course',
            Cat: "PXQP"
        },
        {
            imgUrl: 'assets/images/category/icon/13.jpg',
            imgAlt: 'category rajibraj91 rajibraj',
            title: 'Health Need',
            desc: ' Course',
            Cat: "HN"
        },
        {
            imgUrl: 'assets/images/category/icon/14.jpg',
            imgAlt: 'category rajibraj91 rajibraj',
            title: 'Foreign Language',
            desc: ' Course',
            Cat: "FN"
        },
    ])




    useEffect(() => {
        const controller = new AbortController();

        const fetchDta = async () => {


            let URL=BaseURL+"/course/get-courses-per-catergory-count"

            await Axios.get(URL).then((response) => {
                console.log(response.data.CAAPCount, "Countttttttttttt")
                setCountList(response.data)
               
                CopurseCattList[0].desc=response.data.CAAPCount
                CopurseCattList[1].desc=response.data.FCCount
                CopurseCattList[2].desc=response.data.IBSLCount
                CopurseCattList[3].desc=response.data.ORPPCount
                CopurseCattList[4].desc=response.data.OHCount
                CopurseCattList[5].desc=response.data.PXQPCount
                CopurseCattList[6].desc=response.data.HNCount
                CopurseCattList[7].desc=response.data.FNCount

            })

        }
        fetchDta();


        return () => controller.abort();

    }, []);

    return (
        <div className="category-section padding-tb section-bg style-2">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                        {CopurseCattList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="category-item text-center">
                                    <div className="category-inner">
                                        <div className="category-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                        <div className="category-content">
                                            <Link to="/courses-per-subject" state={{
                                                data: {
                                                    "CourseCateogry": val.Cat,

                                                }
                                            }}><h6>{val.title}</h6>
                                                <span>{val.desc} Courses</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryTwo;