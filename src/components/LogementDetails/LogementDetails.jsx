import LogementInfo from "../LogementInfo/LogementInfo";
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
                tags={tags}
                rating={rating}
            />

            <div className="LogementDetails__collapses">
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
            </div>
        </section>
    );
}

export default LogementDetails;
