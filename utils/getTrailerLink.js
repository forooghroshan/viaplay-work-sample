import axios from "axios";

const getTrailerLink = async (id) => {
  const movieUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_KEY}&language=en-US`;
  const resp = await axios.get(movieUrl);
  const yt = `https://www.youtube.com/watch?v=${resp.data.results[0].key}`;

  return yt;
};

export default getTrailerLink;
