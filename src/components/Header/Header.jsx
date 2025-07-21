import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import "./header.scss";

function Header({ img, title }) {
    return (
        <header className="header">
            <Nav />
            <Banner img={img} title={title} />
        </header>
    );
}

export default Header;