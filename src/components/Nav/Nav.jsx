// Liens vers Accueil et À propos (react-router)

import { Link } from "react-router-dom";
import "./nav.scss";
import RED_logo from "../../assets/images/RED_LOGO.png";

function Nav({ whereabouts }) {
    return (
        <nav className="nav">
            <img src={RED_logo} alt="Logo Kasa" className="nav__logo" />
            <div className="nav__links">
                <Link
                    className={`nav__link ${whereabouts === "Home" ? "nav__link--whereabouts" : ""}`}
                    to="/"
                >
                    Accueil
                </Link>
                <Link
                    className={`nav__link ${whereabouts === "About" ? "nav__link--whereabouts" : ""}`}
                    to="/a-propos"
                >
                    A Propos
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
