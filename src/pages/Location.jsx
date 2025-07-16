// Page dynamique avec useParams() pour chaque logement
import { useParams, Navigate } from "react-router-dom";
import data from "../data/data.json";

import Header from "../components/Header";
import Footer from "../components/footer";
import LogementDetails from "../components/LogementDetails";

function LocationPage() {
    const { id } = useParams();
    const logement = data.find((item) => item.id === id);

    if (!logement) {
        return <Navigate to="/404" />;
    }

    const {
        title,
        location,
        host: { name: hostName, picture: hostPicture },
        tags,
        rating,
        description,
        equipments,
        pictures,
    } = logement;

    return (
        <>
            <Header picture={pictures} txt="" />
            <LogementDetails
                title={title}
                location={location}
                hostName={hostName}
                hostPicture={hostPicture}
                tags={tags}
                rating={rating}
                description={description}
                equipments={equipments}
            />
            <Footer />
        </>
    );
}

export default LocationPage;
