
import Rating from "../sidebar/rating";

const title = "Foundation Course";
const desc = "Brief description about the course";
const author = "Shehan";
const reviewCount = "03 reviews";
const videoLink = "https://www.youtube-nocookie.com/embed/jP649ZHA8Tg";


const categoryList = [
    {
        link: '#',
        text: 'Adobe XD',
        className: 'course-cate',
    },
    {
        link: '#',
        text: '30% Off',
        className: 'course-offer',
    },
]


const PageHeaderTwo = () => {
    return (
        <div className="pageheader-section style-2">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-between align-items-center flex-row-reverse">
                    <div className="col-lg-7 col-12">
                        <div className="pageheader-thumb">
                            <img src="assets/images/pageheader/02.jpg" alt="rajibraj91" className="w-100" />
                           
                        </div>
                    </div>
                    <div className="col-lg-5 col-12">
                        <div className="pageheader-content">
                            
                            <h2 className="phs-title">{title}</h2>
                            <p className="phs-desc">{desc}</p>
                            <div className="phs-thumb">
                                <img src="assets/images/pageheader/03.jpg" alt="rajibraj91" />
                                <span>{author}</span>
                                <div className="course-reiew">
                                    <Rating />
                                    <span className="ratting-count">{reviewCount}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PageHeaderTwo;