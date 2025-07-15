// Affiche une image (et éventuellement un slogan) via children

import { useState } from "react";
import './Banner.scss';

function Banner({ img, txt }) {
    const [index, setIndex] = useState(0);


    if (!img || img.length < 1) return null;


    if (img.length === 1) {
        return (
            <div className="banner">
                <img
                    src={img[0]}
                    alt="banner"
                    className="banner__picture"
                />
                <h1 className="banner__title">{txt}</h1>
            </div>
        );
    }


    const handleNext = () => {
        setIndex((prev) => (prev + 1) % img.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + img.length) % img.length);
    };

    return (
        <div className="banner">
            <img
                src={img[index]}
                alt={`slide ${index}`}
                className="banner__picture"
            />
            <h1 className="banner__title">{txt}</h1>
            <button onClick={handlePrev} className="banner__arrow banner__arrow--left">←</button>
            <button onClick={handleNext} className="banner__arrow banner__arrow--right">→</button>
        </div>
    );
}

export default Banner;

