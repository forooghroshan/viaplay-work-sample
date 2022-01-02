import asyncHandler from "express-async-handler";
import getMovieImdbId from "../utils/getMovieImdbId.js";
import getMovieId from "../utils/getMovieId.js";
import getTrailerLink from "../utils/getTrailerLink.js";

// @description Get the movie trailer
// @route POST /api/trailer
// @access Public
const getMovieTrailer = asyncHandler(async (req, res) => {
  const { movieUrl } = req.body;
  if (movieUrl) {
    const ImdbId = await getMovieImdbId(movieUrl);
    const movieId = await getMovieId(ImdbId);
    const trailerLink = await getTrailerLink(movieId);

    res.json({ trailerLink });
  } else {
    res.status(400).send({ message: "movieUrl is missing in the body" });
  }
});

export { getMovieTrailer };
