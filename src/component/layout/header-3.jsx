import { Fragment, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo-dark.png"
import ProfileLogo from "../../assets/images/logo/profile.png"

const HeaderThree = () => {
    const [LoggesStatus, setLoggesStatus] = useState(false);
    useEffect(() => {
        const controller = new AbortController();

        console.log(localStorage.getItem("FirstName"))


        if (localStorage.getItem("FirstName") == null) {
            console.log("Sucess")
        } else {
            setLoggesStatus(true)
        }


        return () => controller.abort();

    }, []);




    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFiexd, setHeaderFiexd] = useState(false);
    const [searchTrigger, setSearchTrigger] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFiexd(true);
        } else {
            setHeaderFiexd(false);
        }
    });

    return (
        <Fragment>

            <header className={`header-section style-3 ${headerFiexd ? "header-fixed fadeInUp" : ""}`}>

                <div className="header-bottom">
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="logo-search-acte">
                                <div className="logo">
                                    <Link to="/"><img src={logo} alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="menu-area">
                                <div className="menu">
                                    <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>

                                        <li >
                                            <NavLink to="/">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/course">Course</NavLink>
                                        </li>


                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                        {
                                            LoggesStatus && (

                                                <li><NavLink to="/data-library">Online Library</NavLink></li>
                                            )
                                        }

                                        {
                                            LoggesStatus && (

                                                <li className="menu-item-has-children">
                                                    <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0"> <span>{localStorage.getItem("FirstName")}</span>
                                                        <span>&nbsp;</span>

                                                        <span>{localStorage.getItem("LastName")}     <img src={ProfileLogo} style={{ height: 30 }} /></span></a>
                                                    <ul className="lab-ul dropdown-menu">
                                                        <li><NavLink to="/course">Profile</NavLink></li>
                                                        <li><NavLink to="/course-single"> My Courses</NavLink></li>
                                                        <li><NavLink to="/logout">Logout</NavLink></li>
                                                    </ul>
                                                </li>
                                            )
                                        }




                                    </ul>
                                </div>



                                <div className="search-icon" onClick={() => setSearchTrigger(!searchTrigger)}>
                                    <i className="icofont-search"></i>
                                </div>
                                <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>


                                <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
                                {
                                    !LoggesStatus && (

                                        <div>     <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                                            <Link to="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span> </Link></div>

                                    )
                                }



                                <div className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`} onClick={() => setMenuToggle(!menuToggle)}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <div className="ellepsis-bar d-lg-none" onClick={() => setSocialToggle(!socialToggle)}>
                                    <i className="icofont-info-square"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`menu-search-form ${searchTrigger ? "open" : ""}`}>
                <div className="search-close" onClick={() => setSearchTrigger(!searchTrigger)}></div>
                <form>
                    <input type="text" name="search" placeholder="Search here..." />
                    <button type="submit"><i className="icofont-search"></i></button>
                </form>
            </div>
        </Fragment>
    );
}

export default HeaderThree;

