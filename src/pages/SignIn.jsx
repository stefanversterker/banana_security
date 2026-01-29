import {Link, useNavigate} from 'react-router-dom';
import React, {useContext} from 'react';
import {AuthContext} from "../Context/AuthContext";
import Input from "../components/Input/Input";
import {useState} from 'react';
import axios from "axios";


function SignIn() {

    const navigate = useNavigate();
    const {auth, login} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/login', {
                email: '',
                password: '',
            }, {
                headers: {
                    'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                }
            });

            console.log(response);
            login(response.data)
        } catch (e) {
            console.error(e);
        }
    }

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
              value={email}
              onChange={(e) => {
                  setEmail(e.target.value)
                  console.log(email)
              }
          }
          />
          <Input
              labelText="wachtwoord:"
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                  setPassword(e.target.value)
                  console.log(password)
              }
          }
          />
        <button
            type="button"
            onClick={() => {
                login()
                navigate("/profile")
                console.log(email + password)
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