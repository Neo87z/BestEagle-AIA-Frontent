
import CountUp from 'react-countup';
import stay from '../../assets/images/instructor/other.png'
import wealth from '../../assets/images/instructor/welath.png'
import Slidder1 from "../../assets/images/logo/slider1.jpg"
import Slidder2 from "../../assets/images/logo/slider2.jpg"
import Slidder3 from "../../assets/images/logo/slider3.jpg"
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    {
        url: Slidder1,
        caption: 'Slide 1'
    },
    {
        url: Slidder2,
        caption: 'Slide 2'
    },
    {
        url: Slidder3,
        caption: 'Slide 3'
    },
];

const subTitle = "START TO SUCCESS";
const title = "Entrepreneur Success Stories";

const desc = "Would you like to be a Successful Entrepreneur, who earns more than 1 million rupees income per month and spend your life with happiness?";
const desc2 = "Here are some real life examples...Just watch and learn from them..."

const achievementList = [
    {
        count: '30',
        desc: 'Would you like to be a Successful Entrepreneur, who earns more than 1 million rupees income per month and spend your life with happiness?',
    },

]

const achieveList = [
    {
        imgUrl: stay,
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'Start Teaching Today',
        desc: 'Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica',
        btnText: 'Become A Instructor',
        siteLink: '#',
    },
    {
        imgUrl: wealth,
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'If You Join Our Course',
        desc: 'Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica',
        btnText: 'Register For Free',
        siteLink: '#',
    },
]


const Achievement = () => {
    return (
        <div className="achievement-section padding-tb">
            <div className="container">
              
                <div className="section-wrapper">
                    <div className="section-header text-center">
                        <Fade>
                            {fadeImages.map((fadeImage, index) => (
                                <div className="each-fade" key={index}>
                                    <div className="image-container">
                                        <img src={fadeImage.url} />
                                    </div>

                                </div>
                            ))}
                        </Fade>

                       
                    </div>
                    <div className="achieve-part">
                        <div className="row g-4 row-cols-1 row-cols-lg-2">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievement;