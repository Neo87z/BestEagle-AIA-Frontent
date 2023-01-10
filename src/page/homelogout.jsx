
import React, { useEffect, Fragment, useState } from 'react'
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import About from "../component/section/about";
import Achievement from "../component/section/achievement";
import Banner from "../component/section/banner";
import Blog from "../component/section/blog";
import Skill from "../component/section/skill";
import HeaderThree from "../component/layout/header-3";
import Category from "../component/section/category";
import BannerThree from "../component/section/banner-5";
import Course from "../component/section/course";
import Instructor from "../component/section/instructor";
import Sponsor from "../component/section/sponsor";
import Clients from "../component/section/clients";
import Student from "../component/section/student";



const Home = () => {
    useEffect(() => {
        const controller = new AbortController();
        console.log("Logout")
        localStorage.removeItem("FirstName");
        localStorage.removeItem("LastName");
        localStorage.removeItem("token");
        window.location = `/`

        return () => controller.abort();

    }, []);

    return (
        <Fragment>
            <HeaderThree />

        </Fragment>
    );
}

export default Home;