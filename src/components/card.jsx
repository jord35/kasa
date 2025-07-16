// Composant UI représentant une carte visuelle avec une image et un titre.
// Sert principalement de lien vers une page dynamique (Location) .
import { Link } from 'react-router-dom';
// import './Card.scss';

function Card({ id, img, title }) {
    return (
        <Link to={`/location/${id}`} className="card">
            <img src={img} alt={title} className="card__img" />
            <h2 className="card__title">{title}</h2>
        </Link>
    );
}

export default Card;