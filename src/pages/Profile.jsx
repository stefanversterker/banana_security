import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../Context/AuthContext";

function Profile() {
    const navigate = useNavigate();
    const {auth, login, logout} = useContext(AuthContext)

    return (

        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p><strong>Gebruikersnaam:</strong> hardcoded-test</p>
                <p><strong>Email:</strong> hardcoded@test.com</p>
            </section>
            <section>
                <h2>Strikt geheime profiel-content</h2>
                <p>Ik heb per ongeluk mijn banaan niet gescand bij de zelfscankassa.</p>
            </section>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    )
        ;
}

export default Profile;