import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Input from "../components/Input/Input";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/users', {
                email: email,
                password: password,
                roles: [
                    "anonymous",
                    "user",
                ],
            }, {
                headers: {
                    'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                }
            });
            console.log(response)
            navigate("/signin")
        } catch (e) {
            console.error(e);
        }
    }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

      <form onSubmit={handleSubmit}>
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
          <Input
              labelText="gebruikersnaam:"
              name="username"
              id="username"
              type="text"
              value={username}
              onChange={(e) => {
                  setUsername(e.target.value)
                  console.log(username)
              }
          }
          />
          <button type="submit">registreer</button>

      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;