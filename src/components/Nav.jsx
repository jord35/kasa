// Liens vers Accueil et À propos (react-router)

import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav className="nav">
            <Link to="/">Accueil</Link>
            <Link to="/a-propos">À propos</Link>
        </nav>
    )
}

export default Nav
