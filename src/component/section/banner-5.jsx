
import { Link } from "react-router-dom";

const subTitle = "Best Eagle";
const title = <h2 className="title">BestEagle</h2>;
const desc = "Learn Management System";
const btnText = "View Courses";



const BannerFive = () => {
    return (
        <section className="banner-section style-5">
            <div className="container">
                <div className="section-wrapper">
                    <div className="row">
                        <div className="offset-md-6 col-xl-6">
                            <div className="banner-content"> 
                             
                                {title}
                                <p className="desc">{desc}</p>
                                <Link to="/course" className="lab-btn"><span>{btnText}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default BannerFive;