import axios from "axios";

const getMovie = async (query, page) => {
    try {
        let response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}?q=${query}&limit=24&page=${page}&rating=pg`)
        return response.data;
    } catch (err) {
        console.log(err);
    }   
}

export {
    getMovie
}