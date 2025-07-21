// Page 404 pour les routes inconnues
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Notfound from "../components/NotFound/NotFound";

function NotFoundPage() {
    return (
        <>
            <Header picture={[]} title="" />
            <Notfound />
            <Footer />
        </>
    );
}

export default NotFoundPage;
