
import { Link } from "react-router-dom";
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


const title = "Build Skills With Experts Any Time Anywhere";
const desc = "Professor is Best & Perfect Venue to Grow up Your Knowledge";
const btnText = "Get Started Now";



const BannerThree = () => {
    return (
        <section className=" style-4">
            <div className="slide-container">
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
        </section >
    );
}

export default BannerThree;