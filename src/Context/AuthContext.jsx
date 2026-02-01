import {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {jwtDecode} from "jwt-decode";
import isTokenValid from '/src/Helpers/isTokenValid'

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const navigate = useNavigate();

    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        console.log(localStorage.getItem('token'));
        const jwtToken = localStorage.getItem('token');
        if (jwtToken) {
            const decoded = jwtDecode(jwtToken);
            if (isTokenValid(jwtToken)) {
                toggleAuth({
                    isAuth: true,
                    status: 'done',
                    user: {
                        id: decoded.sub,
                        email: decoded.email,
                        roles: decoded.role,
                    },
                })
            } else {
                toggleAuth({
                    ...auth,
                    status: 'done'
                })
            }
        } else {
            toggleAuth({
                ...auth,
                status: 'done',
            })
        }
    }, [])

    function login(userDetails) {
        localStorage.setItem('token', userDetails.token)
        const decoded = jwtDecode(userDetails.token);
        console.log(decoded)
        console.log('Gebruiker is ingelogd!')
        toggleAuth({
            isAuth: true,
            status: 'done',
            user: {
                id: decoded.sub,
                email: decoded.email,
                roles: decoded.role,
            }
        });
        navigate('/profile');
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        localStorage.removeItem('token')
        toggleAuth({
            isAuth: false,
            status: 'done',
            user: null
        });
        navigate('/');
    }

    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={data}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;