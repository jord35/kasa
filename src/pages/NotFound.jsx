// Page 404 pour les routes inconnues
import Header from "../components/Header";
import Footer from "../components/footer";
import Notfound from "../components/NotFound";

function NotFoundPage() {
    return (
        <>
            <Header picture={[]} txt="" />
            <Notfound />
            <Footer />
        </>
    );
}

export default NotFoundPage;
