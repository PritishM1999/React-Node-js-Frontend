// import landingImage from "../../images/lens.jpeg"
import { Link } from "react-router-dom";
import "./landingpage.css"
const  landingImage = require("../../images/lens.jpg");

const Landing = () => {
    return (
        <>
            <div className='landing'>
                <div className="landing-Image">
                    <img src={landingImage} alt="landing"/>
                </div>


                <div className="landing-actions">
                <div className="landing-text">10x Pritish</div>
                    <Link to={"/post-view"} >
                      
                      <div className="landing-button">
                        <button className="button">Enter</button>
                      
                      </div>
                    </Link>

                </div>
            </div>
        </>
    )
}
export default Landing;