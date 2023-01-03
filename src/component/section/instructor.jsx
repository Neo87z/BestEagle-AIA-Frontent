
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";

import career from "../../assets/images/instructor/career.png";
import Logo from '../../assets/images/instructor/register.png'
import follow from '../../assets/images/instructor/follow.png'
import exam from '../../assets/images/instructor/exam.png'
import stay from '../../assets/images/instructor/career.png'

const subTitle = "Just follow these simple steps and start your career as an Entrepreneur";
const title = "HOW I BECOME AN ENTREPRENEUR";

const instructorList = [
    {
        imgUrl: Logo,
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'GET REGISTERED FREE',
        degi: 'Master of Education Degree',
        courseCount: '08 courses',
        studentAnroll: '30 students',
    },
    {
        imgUrl: follow,
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'FOLLOW ONLINE COURSES',
        degi: 'Master of Education Degree',
        courseCount: '08 courses',
        studentAnroll: '30 students',
    },
    {
        imgUrl: exam,
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'GET THROUGH EXAM',
        degi: 'Master of Education Degree',
        courseCount: '08 courses',
        studentAnroll: '30 students',
    },
    {
        imgUrl: stay,
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'STAY YOUR CAREER',
        degi: 'Master of Education Degree',
        courseCount: '08 courses',
        studentAnroll: '30 students',
    },
]


const Instructor = () => {
    return (
        
        <div className="instructor-section padding-b section-bg">
            <br></br><br></br>
            <div className="container">
                <div className="section-header text-center">
                   
                    <h2 className="title">{title}</h2>
                    <span className="subtitle">{subTitle}</span>
                </div>
               
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        {instructorList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="instructor-item">
                                    <div className="instructor-inner">
                                        <div className="">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                        <div className="instructor-content">
                                            <Link to="/team-single"><h4>{val.name}</h4></Link>
                                          
                                           
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
 
export default Instructor;