var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//cors策略中间件
app.use(function (req, res, next) {
    var origin = req.header("Origin");
    var method = req.method;
    if (origin) {
        res.header("Access-Control-Allow-Origin", origin);//不过滤是否是受信源了，dcloud做的客户端不知origin是不是固定的
        res.header("Access-Control-Allow-Method", method);

        var corsHeader = req.header("Access-Control-Request-Headers");
        if (corsHeader) {
            res.setHeader("Access-Control-Allow-Headers", corsHeader);
        }
        res.header("Access-Control-Allow-Credentials", "true");
    }
    if (method.toUpperCase() == "OPTIONS") {//OPTIONS请求，不应该执行后续操作，所以直接结束响应
        res.end();
        return;//直接返回，不用next下一个中间件了
    }
    next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
