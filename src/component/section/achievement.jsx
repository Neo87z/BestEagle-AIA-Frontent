
import CountUp from 'react-countup';
import stay from '../../assets/images/instructor/other.png'
import wealth from '../../assets/images/instructor/welath.png'
const subTitle = "START TO SUCCESS";
const title = "Entrepreneur Success Stories";

const desc = "Would you like to be a Successful Entrepreneur, who earns more than 1 million rupees income per month and spend your life with happiness?";
const desc2="Here are some real life examples...Just watch and learn from them..."

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
                <div className="section-header text-center">

                    <h2 className="title">{title}</h2>
                    <span className="subtitle">{subTitle}</span>
                </div>
                <div className="section-wrapper">
                    <div className="section-header text-center">

                        <span style={{height:'100px'}}>{desc}</span><br></br>
                        <span className="title">{desc2}</span>
                    </div>
                    <div className="achieve-part">
                        <div className="row g-4 row-cols-1 row-cols-lg-2">
                            {achieveList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="achieve-item">
                                        <div className="achieve-inner">
                                            
                                            <div className="">

                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievement;