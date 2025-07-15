import Nav from "kasa/src/components/Nav.jsx";
import Banner from "kasa/src/components/Banner.jsx";
import "./Header.scss";

function Header({ picture, txt }) {
    return (
        <header className="header">
            <Nav />
            <Banner img={picture} txt={txt} />
        </header>
    );
}

export default Header;