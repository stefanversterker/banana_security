import {Link, useNavigate} from 'react-router-dom';
import React, {useContext} from 'react';
import {AuthContext} from "../Context/AuthContext";
import Input from "../components/Input/Input";


function SignIn() {

    const navigate = useNavigate();
    const {auth, login} = useContext(AuthContext)

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form>
          <Input
              labelText="email adres:"
              name="email-address"
              id="email-address"
              type="email"
          />
          <Input
              labelText="wachtwoord:"
              name="password"
              id="password"
              type="password"
          />
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