import {Link, useNavigate} from 'react-router-dom';
import React, {useContext} from 'react';
import {AuthContext} from "../Context/AuthContext";


function SignIn() {

    const navigate = useNavigate();
    const {auth, login} = useContext(AuthContext)

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form>
        <p>*invoervelden*</p>
        <button
            type="button"
            onClick={() => {
                login()
                navigate("/profile")
            }
        }
        >
            Inloggen
        </button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;