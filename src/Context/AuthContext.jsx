import {createContext, useState} from 'react';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const [isAuth, toggleIsAuth] = useState(false)

    function login() {
        console.log('Gebruiker is ingelogd!')
        toggleIsAuth(true)
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        toggleIsAuth(false);
    }

    const data = {
        auth: isAuth,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;