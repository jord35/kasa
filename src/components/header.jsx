import Nav from "./Nav";
import Banner from "./Banner";
// import "./Header.scss";

function Header({ picture, txt }) {
    return (
        <header className="header">
            <Nav />
            <Banner img={picture} txt={txt} />
        </header>
    );
}

export default Header;