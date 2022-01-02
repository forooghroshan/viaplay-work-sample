## ViaPlay Test Project

The project has been developed using Nodejs and Express. The application lets the user to send the movie link and
then the application will fetch the IMDB Id from the provided movie info and then get the Movie Id from the
"TheMovieDb" endpoint. Once the Id is fetched, then a request with the Movie Id will be sent to "TheMovieDb" to fetch the youtube code of the movie trailer, after the code is fetched, it will generate the youtube link and send it back to the requester.

## Libraries Used

#### Express

Express is a back end web application framework for Node.js which was also used in this
applicaiton.

#### Axios

Axios has been used in this application to make HTTP requests to other APIs.

#### Express Async Handler

Express Async Handler is a simple middleware for handling exceptions inside of async express
routes and passing them to the express error handlers. It is easier to use this middleware
instead of keep repeating Try/Catch block through out the application.

#### DOT ENV

DotEnv is a library which helps in using Environment Variables through out the application.

#### JEST

JEST has been used in this project to conduct the testings.

## Endpoints

Trailer Endpoint: POST /api/trailer

## How to run

**STEP 1**

```
npm install
```

**STEP 2**

```
Make sure you have the .env file with the theMovieDb API Key.
TMDB_KEY = xxxxxxxxxxxxxxxxxxx
```

**STEP 3**

```
node server.js
```
## Handle Heavy Load

#### Application Level
In order to be able to handle heavy requests when the app is pushed to production, there are various rules and techniques which should be followed in the code and in the server configuration. Within the Code, all the functions should be asynchronous in order to do tasks simultaneously and reduce the Response times, the second rule is to have a proper exception handling in place which will stop the Application from crashing and causing heavy usage. Use Test-driven Development and functional programming Paradigms to have a more efficient code like what has been done in this project. Another good approach is to use Caching, which will help us to cache the request and tremendously reduce the response time, there are several Caching strategy which consists of Memory Caching, Memcached, Redis
#### Server Level
On the Server side, we can increase the RAM, configure Auto-Scaling so once the usage goes higher than a certain amount, the server can be scaled up. Place the server behind a Load Balancer to distribute Application traffic across our servers.
