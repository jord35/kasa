// Page d'accueil (liste des logements)
import data from "../data/data.json";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import HomeImage from "../assets/images/Accueil.png"

function HomePage() {
    return (
        <>
            <Header img={[HomeImage]} title="Chez vous, partout et ailleurs" />
            <Gallery data={data} />
            <Footer />
        </>
    )
}
export default HomePage;