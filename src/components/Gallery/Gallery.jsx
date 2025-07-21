// Composant UI de disposition en grille responsive.
import Card from "../Card/Card";
import './gallery.scss';

function Gallery({ data }) {
    return (
        <div className="gallery">
            {data.map(item => (
                <Card
                    key={item.id}
                    id={item.id}
                    img={item.cover}
                    title={item.title}
                />
            ))}
        </div>
    );
}

export default Gallery;


