import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from "../Context/AuthContext";

function NavBar() {
    const navigate = useNavigate();
    const {auth, login, logout} = useContext(AuthContext)


    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>
            <div>
                {!auth ?
                    <>
                        <button
                            type="button"
                            onClick=
                                {() => navigate('/signin')}
                        >
                            Log in
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/signup')}
                        >
                            Registreren
                        </button>
                    </>
                    :
                    <button
                        type="button"
                        onClick={() => logout()}
                    >
                        Log out
                    </button>
                }
            </div>
        </nav>
    );
}

export default NavBar;