//  dans la section info des page "Location"{
// Titre, emplacement, hôte (nom + photo)}
import "./logement-info.scss"

function LogementInfo({ title, location, hostPicture, hostName }) {
    return (
        <div className="LogementInfo">
            <div className="LogementInfo__hotel">
                <h1 className="LogementInfo__title">{title}</h1>
                <p className="LogementInfo__location">{location}</p>
            </div>
            <div className="LogementInfo__host">
                <h2 className="LogementInfo__hostName">{hostName}</h2>
                <img
                    className="LogementInfo__hostPicture"
                    src={hostPicture}
                    alt={hostName}
                />
            </div>
        </div>
    );
}
export default LogementInfo;