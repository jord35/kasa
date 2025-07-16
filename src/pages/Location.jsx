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

    return (
        <>
            <Header picture={logement.pictures} txt="" />
            <LogementDetails data={logement} />
            <Footer />
        </>
    );
}

export default LocationPage;