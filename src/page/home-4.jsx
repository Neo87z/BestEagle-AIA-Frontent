import { Component, Fragment } from "react";
import FooterThree from "../component/layout/footer";
import HeaderFour from "../component/layout/header-3";
import AppSection from "../component/section/appsection";
import BannerFour from "../component/section/banner-4";
import CategoryThree from "../component/section/category-3";
import ClientsTwo from "../component/section/clients-2";
import CourseFour from "../component/section/course-4";
import InstructorTwo from "../component/section/instructor-2";
import Register from "../component/section/register";
import Sponsor from "../component/section/sponsor";


const HomeFour = () => {
    return (
        <Fragment>
            <HeaderFour />
            <BannerFour />
       
            <CourseFour />
        
        
        </Fragment>
    );
}
 
export default HomeFour;