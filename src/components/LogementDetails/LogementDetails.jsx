import LogementInfo from "../LogementInfo/LogementInfo";
import Rating from "../Rating/Rating";
import TagListe from "../TagListe/TagListe";
import Collapse from "../Collapse/Collapse";
import "./logement-details.scss";




function LogementDetails({ title, location, hostPicture, hostName, tags, rating, description, equipments }) {
    return (
        <section>
            <LogementInfo
                title={title}
                location={location}
                hostPicture={hostPicture}
                hostName={hostName}
            />

            <TagListe tags={tags} />
            <Rating rating={rating} />

            <Collapse title="Description">
                {description}
            </Collapse>

            <Collapse title="Équipements">
                <ul>
                    {equipments.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </Collapse>
        </section>
    );
}

export default LogementDetails;
