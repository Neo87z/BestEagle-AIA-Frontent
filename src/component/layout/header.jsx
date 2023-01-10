import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo-dark.png"

const HeaderThree = () => {

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
                                    
                                        <li className="menu-item-has-children">
                                            <NavLink to="/">Home</NavLink>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <NavLink to="/course">Course</NavLink>
                                        </li>
                                       

                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                    </ul>
                                </div>

                                <div className="search-icon" onClick={() => setSearchTrigger(!searchTrigger)}>
                                    <i className="icofont-search"></i>
                                </div>

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

