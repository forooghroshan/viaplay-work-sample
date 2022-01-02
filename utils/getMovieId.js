import axios from "axios";

const getMovieId = async (id) => {
  const movieUrl = `https://api.themoviedb.org/3/find/${id}?api_key=${process.env.TMDB_KEY}&language=en-US&external_source=imdb_id`;
  const rep = await axios.get(movieUrl);

  return rep.data.movie_results[0].id;
};

export default getMovieId;
