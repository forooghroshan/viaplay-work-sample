import axios from "axios";

const getMovieImdbId = async (movieUrl) => {
  const resp = await axios.get(movieUrl);
  return resp.data._embedded["viaplay:blocks"][0]._embedded["viaplay:product"]
    .content.imdb.id;
};

export default getMovieImdbId;
