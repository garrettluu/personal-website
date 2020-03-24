let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

const dev = process.env.NODE_ENV !== 'production';

let next = require('next');
let app = next({dev});

app.prepare().then(() => {
    let indexRouter = require('./routes/index')(app);
    let usersRouter = require('./routes/users');

    let server = express();

    server.use(logger('dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    server.use(cookieParser());
    // server.use(express.static(path.join(__dirname, 'public')));

    server.use('/', indexRouter);
    server.use('/users', usersRouter);

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('Server ready on localhost:3000');
    });
});