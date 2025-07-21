import { Link } from "react-router-dom";
import "./not-found.scss";

function Notfound() {
    return (
        <main className="notfound">
            <h1 className="notfound__title">404</h1>
            <p className="notfound__txt">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link className="notfound__link" to="/">
                Retourner sur la page d’accueil
            </Link>
        </main>
    );
}

export default Notfound;
