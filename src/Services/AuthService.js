import axios from "axios"

const API_URL = "http://localhost:8080/admins/";

class AuthService {
    constructor(url) {
        this.url = url;
    }

    login(username, password) {
        return axios.post(this.url + "login", {
            username, password
        })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("admin", JSON.stringify(response.data));
                }
                return response.data;
            })
    }

    logout() {
        localStorage.removeItem("admin")
    }

    register(username, email, password) {
        return axios.post(this.url + "register", {
            username, email, password
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("admin"))
    }
}

export default AuthService;