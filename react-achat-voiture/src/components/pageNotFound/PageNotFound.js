import React from "react";
import "./PageNotFound.css"
import {useNavigate} from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="not-found-container">
            <img src="https://cdn.dribbble.com/users/46355/screenshots/16843933/media/4cb734dfc26ce2030c375ebf004e5e9c.png?resize=1000x750&vertical=center" alt="404 error"/>
            <h1>404 - La page est introuvable</h1>
            <p>Désolé, la page que vous recherchez n'existe pas.</p>
            <button onClick={() => navigate('/')}>Retour</button>
        </div>
    )
}

export default PageNotFound