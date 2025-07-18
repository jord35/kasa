// Liens vers Accueil et À propos (react-router)
import { Link } from "react-router-dom"
// import './Nav.scss';

function Nav() {
    return (
        <nav className="nav">
            <img src="./assets/LOGO.png" alt="" className="nav-logo" />
            <div className="nav-links">
                <Link className="nav-link" to="/">Accueil</Link>
                <Link className="nav-link" to="/a-propos">À propos</Link>
            </div>
        </nav>
    )
}

export default Nav
