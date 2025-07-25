// Affiche une image (et éventuellement un slogan) 

import { useState } from "react";
import './banner.scss';

function Banner({ img, title, isLocation }) {
    const [index, setIndex] = useState(0);
    const handleNext = () => {
        setIndex((prev) => (prev + 1) % img.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + img.length) % img.length);
    };

    //  Cas 0 : pas d'image
    if (!img || img.length < 1) return null;

    //  Cas 1 : page "Location" avec 1 seule image
    if (isLocation && img.length === 1) {
        return (
            <div className="banner banner--location">
                <img
                    src={img[0]}
                    alt="banner"
                    className="banner__picture "
                />
                <h1 className="banner__title">{title}</h1>
            </div>
        );
    }

    //  Cas 2 : page "Location" avec plusieurs images (carrousel)
    if (isLocation && img.length > 1) {
        return (
            <div className="banner banner--location">
                <img
                    src={img[index]}
                    alt={`slide ${index}`}
                    className="banner__picture"
                />
                <h1 className="banner__title">{title}</h1>
                <button onClick={handlePrev} className="banner__arrow banner__arrow--left">{'⟨'}</button>
                <button onClick={handleNext} className="banner__arrow banner__arrow--right">{'⟩'}</button>
            </div>
        );
    }

    //  Cas 3 : autres pages (non-location), 1 seule image
    return (
        <div className="banner">
            <img
                src={img[0]}
                alt="banner"
                className="banner__picture banner__picture--not__location
                "
            />
            <h1 className="banner__title">{title}</h1>
        </div>
    );
}

export default Banner;
