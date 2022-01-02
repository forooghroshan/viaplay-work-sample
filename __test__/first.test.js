import request from "supertest";
import app from "../index.js";

describe("POST /api/trailer ", () => {
  describe("Given the correct Movie URL", () => {
    test("It should respond with the correct movie trailer URL", async () => {
      const response = await request(app).post("/api/trailer").send({
        movieUrl: "https://content.viaplay.se/pc-se/film/arrival-2016",
      });
      expect(response.body).toEqual({
        trailerLink: "https://www.youtube.com/watch?v=PkYh9e-fvbA",
      });
      expect(response.statusCode).toBe(200);
    });
  });

  describe("Not Given the Movie URL", () => {
    test("It should respond with an error message", async () => {
      const response = await request(app).post("/api/trailer");
      expect(response.body).toEqual({
        message: "movieUrl is missing in the body",
      });
      //console.log(response);
      expect(response.statusCode).toBe(400);
    });
  });

  describe("Given the wrong Movie URL", () => {
    test("It should respond with an error message", async () => {
      const response = await request(app).post("/api/trailer").send({
        movieUrl: "https://content.viaplay.se/pc-se/film/arrival-20016",
      });
      expect(response.body).toEqual({
        message: "Request failed with status code 404",
      });
      //console.log(response);
      expect(response.statusCode).toBe(500);
    });
  });

  describe("Given the wrong request method", () => {
    test("It should respond with an error message", async () => {
      const response = await request(app).get("/api/trailer").send({
        movieUrl: "https://content.viaplay.se/pc-se/film/arrival-2016",
      });
      expect(response.body).toEqual({
        message: "Not Found - /api/trailer",
      });
      //console.log(response);
      expect(response.statusCode).toBe(404);
    });
  });
});
