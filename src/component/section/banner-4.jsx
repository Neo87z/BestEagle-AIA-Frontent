
import SelectCatagory from "../sidebar/selectCatagory";


const title = <h2>BestEagle Online  <span>Data Library</span> </h2>;
const desc = "Easily Acess Any Of The Courese Material Offered By BestEagle";


const bannerList = [
    {
        iconName: 'icofont-users-alt-4',
        text: '1.5 Million Students',
    },
    {
        iconName: 'icofont-notification',
        text: 'More then 2000 Courses',
    },
    {
        iconName: 'icofont-globe',
        text: 'Learn Anything Online',
    },
]

const BannerFour = () => {
    return (
        <div className="banner-section style-4">
            <div className="container">
                <div className="banner-content">
                    {title}
                    <form>
                      
                        <input type="text" name="search" placeholder="Enter The Name Of The Material " />
                        <button type="submit"><i className="icofont-search"></i></button>
                    </form>
                    <p>{desc}</p>
                    
                </div>
            </div>
        </div>
    );
}
 
export default BannerFour;