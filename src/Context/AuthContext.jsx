import {createContext, useState} from 'react';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const [isAuth, toggleIsAuth] = useState({isAuth: false, user: ''})

    function login() {
        console.log('Gebruiker is ingelogd!')
        toggleIsAuth({isAuth: true, user: 'Stefan'})
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        toggleIsAuth({isAuth: false, user: ''});
    }

    const data = {
        auth: isAuth,
        user: '',
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