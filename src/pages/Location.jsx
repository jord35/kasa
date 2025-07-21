// Page dynamique avec useParams() pour chaque logement
import { useParams, Navigate } from "react-router-dom";
import data from "../data/data.json";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LogementDetails from "../components/LogementDetails/LogementDetails";

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
            <Header img={pictures} title="" />
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
