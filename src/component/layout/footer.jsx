
import { Link } from "react-router-dom";

const title = "About BestEagle";
const desc = "AIA Insurance Lanka (Pvt) Ltd";
const courseTitle = "Courses";
const quickTitle = "Privacy";
const tweetTitle = "Recently Added Courses";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: 'Moratuwa Area Development Office.',
    },
    {
       
        text: 'No. 527/1/1, Galle Rd, Rawatawatta, Moratuwa.',
    },
   
    {
        iconName: 'icofont-phone',
        text: '+94 112 645806',
    },
    {
        iconName: 'icofont-envelope',
        text: 'info@besteagle.lk',
    },
]

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const courseList = [
    {
        text: 'All Courses',
        link: '#',
    },
    {
        text: 'Forms and Admision materials',
        link: '#',
    },
    {
        text: 'Professional Courses',
        link: '#',
    },
    {
        text: 'Course Outline',
        link: '#',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '#',
    },
    {
        text: 'Online Course',
        link: '#',
    },
]

const quickList = [
   
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms of Use',
        link: '#',
    },
]

const tweetList = [
    {
        iconName: 'icofont-ebook',
        desc: <p>Foundation Course</p>,
    },
    {
        iconName: 'icofont-ebook',
        desc: <p>Smart pension</p>,
    },
    {
        iconName: 'icofont-ebook',
        desc: <p>MDRT GYM</p>,
    },
    {
        iconName: 'icofont-ebook',
        desc: <p>Smart pension</p>,
    },
]

const footerbottomList = [
    {
        text: 'Faculty',
        link: '#',
    },
    {
        text: 'Staff',
        link: '#',
    },
    {
        text: 'Students',
        link: '#',
    },
    {
        text: 'Alumni',
        link: '#',
    },
]


const FooterThree = () => {
    return (
        <footer className="style-2">
            <div className="footer-top dark-view padding-tb">
                <div className="container">
                    <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{title}</h4>
                                        </div>
                                        <div className="content">
                                            <p>{desc}</p>
                                            <ul className="lab-ul office-address">
                                                {addressList.map((val, i) => (
                                                    <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                ))}
                                            </ul>
                                            <ul className="lab-ul social-icons">
                                                {socialList.map((val, i) => (
                                                    <li key={i}>
                                                        <a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-item">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{courseTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className="lab-ul">
                                                {courseList.map((val, i) => (
                                                    <li key={i}><a href={val.link}>{val.text}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-item">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{quickTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className="lab-ul">
                                                {quickList.map((val, i) => (
                                                    <li key={i}><a href={val.link}>{val.text}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-item twitter-post">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{tweetTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className="lab-ul">
                                                {tweetList.map((val, i) => (
                                                    <li key={i}>
                                                        <i className={val.iconName}></i>
                                                        {val.desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
    );
}
 
export default FooterThree;