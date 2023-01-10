
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";


const subTitle = "Featured Courses";
const title = "Pick A Course To Get Started";



const courseList = [
    {
        imgUrl: 'assets/images/course/07.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Fundamentals of Adobe XD Theory Learn New',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'William Smith',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/08.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Certified Graphic Design with Free Project Course',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/02.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Umme Nishat',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/09.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Theory Learn New Student And Fundamentals',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Robot Smith',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/10.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Computer Fundamentals Basic Startup Ultricies Vitae',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/04.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Zinat Zaara',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/11.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Boozy Halloween Drinks for the Grown Eleifend Kuismod',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/05.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Billy Rivera',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/12.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Student Want to Learn About Science And Arts',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/06.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Subrina Kabir',
        btnText: 'Read More',
    },
]


const CourseTwo = () => {
    return (
        <div className="course-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>

            </div>
        </div>
    );
}
 
export default CourseTwo;