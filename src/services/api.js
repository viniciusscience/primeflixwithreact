import axios from "axios";

// BASE: https://api.themoviedb.org/3/
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

//https://api.themoviedb.org/3/movie/now_playing?api_key=58e5551d1bdd10ba764d1692607af41b
export default api;
