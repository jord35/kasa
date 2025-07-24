//  dans la section info des page "Location"{
// Titre, emplacement, hôte (nom + photo)}
import Rating from "../Rating/Rating";
import TagListe from "../TagListe/TagListe";
import "./logement-info.scss"

function LogementInfo({ title, location, hostPicture, hostName, tags, rating }) {
    return (
        <div className="LogementInfo">
            <div className="LogementInfo__hotel">
                <h1 className="LogementInfo__title">{title}</h1>
                <p className="LogementInfo__location">{location}</p>
                <TagListe tags={tags} />
            </div>
            <div className="LogementInfo__hostAndRating" >
                <div className="LogementInfo__host">
                    <h2 className="LogementInfo__hostName">{hostName.split(' ').map((word, index) => (
                        <span key={index}>
                            {word}
                            <br />
                        </span>
                    ))}</h2>
                    <img
                        className="LogementInfo__hostPicture"
                        src={hostPicture}
                        alt={hostName}
                    />

                </div>

                <Rating rating={rating} />
            </div>

        </div>

    );
}
export default LogementInfo;