//  dans la section info des page "Location"{
// Affiche les tags du logement (ex: Cozy, Neuf…)}


function TagListe({ tags }) {
    return (
        <ul className="tag__list">
            {tags.map((item, index) => (
                <li key={index} className="tag__item">
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default TagListe;
