import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        headers: {
          Authorization: 'Basic b3JnYW5pemVyLWlkOm9yZ2FuaXplci1zZWNyZXQ=',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}