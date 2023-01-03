
import { Link } from "react-router-dom";

const newsTitle = "Want Us To Email You About Special Offers And Updates?";
const siteTitle = "Quick Links";
const useTitle = "Privacy";
const socialTitle = "Social Contact";
const supportTitle = "Contact";


const siteList = [
    {
        text: 'Home',
        link: '#',
    },
    {
        text: 'Courses',
        link: '#',
    },
    {
        text: 'About Us',
        link: '#',
    },
    
]

const useList = [
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms & Conditions',
        link: '#',
    }
]

const socialList = [
    {
        text: 'Facebook',
        link: '#',
    },
    {
        text: 'Twitter',
        link: '#',
    },
    {
        text: 'Instagram',
        link: '#',
    },
    {
        text: 'YouTube',
        link: '#',
    },
    {
        text: 'Github',
        link: '#',
    },
]

const supportList = [
    {
        text: 'Contact',
        link: '#',
    },
   
]



const Footer = () => {
    return (
        <div className="news-footer-wrap">
      
            
       
            <br></br> <br></br>
            <footer>
                <div className="footer-top padding-tb pt-0">
                    <div className="container">
                        <div className="row g-4 row-cols-xl-4 row-cols-md-2 row-cols-1 justify-content-center">
                            
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{siteTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {siteList.map((val, i) => (
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
                                                <h4>{useTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {useList.map((val, i) => (
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
                                                <h4>{socialTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {socialList.map((val, i) => (
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
                                                <h4>{supportTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {supportList.map((val, i) => (
                                                        <li key={i}><a href={val.link}>{val.text}</a></li>
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
        </div>
    );
}
 
export default Footer;