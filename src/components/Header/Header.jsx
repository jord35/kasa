import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import "./header.scss";

function Header({ img, title, isLocation, whereabouts }) {
    return (
        <header className="header">
            <Nav whereabouts={whereabouts} />
            <Banner img={img} title={title} isLocation={isLocation} />
        </header>
    );
}

export default Header;