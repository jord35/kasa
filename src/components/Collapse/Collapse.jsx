// // Menu déroulant (titre + contenu caché)

import { useState } from "react";
import "./collapse.scss";

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse-wrapper">
            <div className="collapse" onClick={() => setIsOpen(!isOpen)}>
                <div className="collapse__header">
                    <h3>{title}</h3>
                    <span className={`collapse__arrow ${isOpen ? "open" : ""}`}>
                        ⟨
                    </span>
                </div>
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
