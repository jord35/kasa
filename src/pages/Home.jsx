// Page d'accueil (liste des logements)
import data from "../data/data.json";
import Header from "../components/Header";
import Footer from "../components/footer";
import Gallery from "../components/Gallery";
import HomeImage from "../assets/Accueil.png"

function HomePage() {
    return (
        <>
            <Header picture={[HomeImage]} txt="Chez vous, partout et ailleurs" />
            <Gallery data={data} />
            <Footer />
        </>
    )
}
export default HomePage;