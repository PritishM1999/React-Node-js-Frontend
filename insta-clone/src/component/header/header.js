// import logo from "../../images/"
import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {

    return (
        <>
        <header>
        <nav className="header">
                <section className="logo">
                    <img src={require("../../images/icon.png")} alt="logo" />
                    <span>Instaclone</span>
                </section>
                
                <section className="camera-icon">
                    <Link to={"/postform"}>
                        <div>
                        <img src={require("../../images/camera.png")} alt="camera"/>
                        </div>
                    </Link>
                </section>  
            </nav>
        </header>
        </>
    )
}
export default Header;