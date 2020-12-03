// Api key for tmdb api
const api_key = process.env.REACT_APP_APIKEY

// endpoints for api
const endPoints = {
    fetchNetflixOrignal : `/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchTrending : `/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMoveis : `/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${api_key}&with_genres=99`,
}

export default endPoints;