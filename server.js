const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const dev = process.env.NODE_ENV !== 'production';

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:" + process.env.DB_PASSWORD + "@website-data-hck7t.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

const next = require('next');
const app = next({dev});

app.prepare().then(() => {
    const indexRouter = require('./routes/index')(app);
    const blogRouter = require('./routes/blog')(app, client);

    const server = express();

    server.use(logger('dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    server.use(cookieParser());
    server.use(express.static(path.join(__dirname, 'public')));

    server.use('/', indexRouter);
    server.use('/blog', blogRouter);

    server.all('*', (req, res) => {
        return (app.getRequestHandler())(req, res);
    })

    server.listen(process.env.PORT || 3000, (err) => {
        if (err) throw err;
        console.log('Server ready on localhost:3000');
    });
});