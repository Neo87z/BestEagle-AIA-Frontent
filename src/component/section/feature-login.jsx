
import FeatureRegister from "../sidebar/loginnnn";
import edu from "../../assets/images/Edu.jpeg"
import edu2 from "../../assets/images/edu1.jpeg"
import edu3 from "../../assets/images/edu2.jpeg"

import stay from '../../assets/images/instructors.jpeg'


const featureList = [
    {
        imgUrl: 'assets/images/feature/08.png',
        imgAlt: 'feature thumb rajibraj91 rajibraj',
        title: 'XXXXX',
        desc: 'Dramatic myocardinate high quality through transparents.',
        btnText: 'View More',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/feedback/student/01.jpg',
        imgAlt: 'feature thumb rajibraj91 rajibraj',
        title: 'XXXX',
        desc: 'Dramatic myocardinate high quality through transparents.',
        btnText: 'View More',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/feature/08.png',
        imgAlt: 'feature thumb rajibraj91 rajibraj',
        title: 'XXXX',
        desc: 'Dramatic myocardinate high quality through transparents.',
        btnText: 'View More',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/feature/08.png',
        imgAlt: 'feature thumb rajibraj91 rajibraj',
        title: 'XXX',
        desc: 'Dramatic myocardinate high quality through transparents.',
        btnText: 'View More',
        siteLink: '#',
    },
]

const FeatureThree = () => {
    return (
        <section className="feature-section style-3 padding-tb">


            <div className="container">

                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-12">
                            <br></br>  <br></br>  <br></br>  <br></br> <br></br>  <br></br>
                            <FeatureRegister />
                        </div>
                        <div className="col-lg-8 col-12">

                            <div className="feature-items">

                                <div className="row g-4 row-cols-sm-2 row-cols-1">

                                    <div className="col">
                                        <div className="feature-item">
                                            <div className="feature-inner text-center">
                                                <div className="feature-thumb">
                                                    <img src={edu2} />
                                                </div>

                                                <div className="feature-content">
                                                    <h4>Online classes</h4>
                                                    <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="feature-item">
                                            <div className="feature-inner text-center">
                                                <div className="feature-thumb">
                                                    <img src={edu3} width="300px" />
                                                </div>

                                                <div className="feature-content">
                                                    <h4>Get certificates</h4>
                                                    <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="feature-item">
                                            <div className="feature-inner text-center">
                                                <div className="feature-thumb">
                                                    <img src={edu} />
                                                </div>

                                                <div className="feature-content">
                                                    <h4>Educators helps</h4>
                                                    <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="feature-item">
                                            <div className="feature-inner text-center">
                                                <div className="feature-thumb">
                                                    <img src={stay} />
                                                </div>

                                                <div className="feature-content">
                                                    <h4>Skilled instructors</h4>
                                                    <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
}

export default FeatureThree;