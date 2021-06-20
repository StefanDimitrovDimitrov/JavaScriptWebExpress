const hbs = require('express-handlebars');
const express = require('express');
const cookieParser = require('cookie-parser');

const authMiddleware = require('../middlewares/auth')


module.exports = (app) => {
    app.engine('hbs', hbs({
        extname: 'hbs'
    }));

    app.use('/static', express.static('static'));
    app.use(express.urlencoded({extended:true}));
    app.use(cookieParser());
    app.use(authMIddleware());
}