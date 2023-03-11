import axios from "axios";

const token = process.env.VUE_APP_API_KEY_TMDB;

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})