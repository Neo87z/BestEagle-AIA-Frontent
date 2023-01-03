
import { Link } from "react-router-dom";

const price = "89";
const excenge = "Course Features";
const paymentTitle = "Secure Payment:";
const shareTitle = "Share This Course:";
const btnText = "Add To Wishlist";


const csdcList = [
    {
        iconName: 'icofont-ui-alarm',
        leftText: 'Enrolled Students',
        rightText: '857',
    },
    {
        iconName: 'icofont-book-alt',
        leftText: 'On Demand Video Hours',
        rightText: '30:10:09',
    },
    {
        iconName: 'icofont-signal',
        leftText: 'Lessons',
        rightText: '08',
    },
    {
        iconName: 'icofont-video-alt',
        leftText: 'Language',
        rightText: 'English',
    },
    
]

const socialList = [
    {
        siteLink: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        siteLink: '#',
        iconName: 'icofont-vimeo',
        className: 'vimeo',
    },
    {
        siteLink: '#',
        iconName: 'icofont-rss',
        className: 'rss',
    },
]

const CourseSideDetail = () => {
    return (
        <div className="course-side-detail">
            <div className="csd-title">
               
                <div className="csdt-right">
                    <p className="mb-0"><i className="icofont-star"></i>{excenge}</p>
                </div>
            </div>
            <div className="csd-content">
                <div className="csdc-lists">
                    <ul className="lab-ul">
                        {csdcList.map((val, i) => (
                            <li key={i}>
                                <div className="csdc-left"><i className={val.iconName}></i>{val.leftText}</div>
                                <div className="csdc-right">{val.rightText}</div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="course-enroll">
                    <Link to="/signup" className="lab-btn"><span>{btnText}</span></Link>
                </div>
            </div>
        </div>
    );
}
 
export default CourseSideDetail;