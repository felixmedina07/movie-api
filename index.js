const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { config } = require('./config/index');

const authApi = require('./routes/auth');
const movieApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');
//middlewares
const {
    logErrors,
    wrapErrors,
    errorHandler
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

app.use(express.json()); //body parser
app.use(morgan('dev'));
app.use(cors());
//routes
authApi(app);
movieApi(app);
userMoviesApi(app)
//error 404
app.use(notFoundHandler);

//error middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port,
    function() {
        console.log(`Listenting http://localhost:${config.port}`);
    });
