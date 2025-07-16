// Menu déroulant (titre + contenu caché)
import { useState } from "react";
// import "./Collapse.scss";

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <span>{isOpen ? "▲" : "▼"}</span>
            </div>

            {isOpen && (
                <div className="collapse__content">
                    {children}
                </div>
            )}
        </div>
    );
}

export default Collapse;