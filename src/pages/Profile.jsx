import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../Context/AuthContext";
import axios from 'axios';

function Profile() {
    const {isAuth, user} = useContext(AuthContext)
    const [data, setData] = useState({});
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);

    useEffect(() => {
        if (!isAuth || !user) return;


        async function fetchSecrets() {
            try {
                const response = await axios.get(
                    `https://novi-backend-api-wgsgz.ondigitalocean.app/api/secrets/`,
                    {
                        headers: {
                            'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                        },
                        params: {
                            userId: 1,
                        }
                    }
                );

                setData(response);
                console.log(data)

            } catch {
                toggleError(true);
            } finally {
                toggleLoading(false);
            }
        }

        console.log(user)
        fetchSecrets();
    }, [isAuth, user])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Er ging iets mis</p>;

    return (

        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p><strong>Gebruikersnaam:</strong> Geen gebruikersnaam in backend.</p>
                <p><strong>Email:</strong> {user.email}</p>
            </section>
            <section>
                <h2>Strikt geheime profiel-content</h2>
                {/*Werkt niet, chat gpt komt er ook niet uit*/}
                {/*<p>{data.content}</p>*/}
            </section>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    )
        ;
}

export default Profile;