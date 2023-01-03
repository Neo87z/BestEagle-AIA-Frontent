

import wealth from '../../assets/images/instructor/lady.png'
import { Link, NavLink } from "react-router-dom";
const subTitle = "About Our Edukon";
const title = "START YOUR WEALTH PLANNING CAREER";
const desc = "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";



const aboutList = [
    {
        imgUrl: 'assets/images/about/icon/01.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Join With BestEgale Learning Portal',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
        imgUrl: 'assets/images/about/icon/02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Already registered with BestEagle?',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },

]


const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end ">
                    <div className="col">
                        <div className="about-right padding-tb">
                            <div className="section-header">

                                <h2 className="title">{title}</h2>

                            </div>
                            <div className="section-wrapper">
                                <ul className="lab-ul">
                                 
                             
                                            <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                                            <Link to="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span> </Link>
                                 
                                </ul>
                            </div>
                        </div>
                    </div>

                    <img src={wealth} alt="about" />


                </div>
            </div>

        </div>
    );
}

export default About;