import './footer.scss';
import logo from "../../assets/images/LOGO.png";

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="Logo" />
            <p className="footer__txt">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer