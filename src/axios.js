// axios makes request to api/website just like postman
import axios from "axios";

const URL = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// baseUrl.get(<endpoint>) with just append endpoint to the baseUrl string
// and make get request

export default URL;
