import {jwtDecode} from "jwt-decode";

function isTokenValid(token) {
    const now = Math.floor(new Date().getTime() / 1000)
    const tokenExp = jwtDecode(token).exp
    return tokenExp - now > 0;

}

export default isTokenValid;