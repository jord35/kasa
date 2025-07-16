//  dans la section info des page "Location"{
// Affiche la note du logement avec étoiles (1 à 5)}
function Rating({ rating }) {
    const totalStars = 5;
    const stars = Array.from({ length: totalStars }, (_, index) => index + 1);

    return (
        <div className="rating">
            {stars.map((star) => (
                <span
                    key={star}
                    className={`rating__star ${star <= rating ? "rating__star--full" : ""}`}
                >
                    ★
                </span>
            ))}
        </div>
    );
}

export default Rating;
