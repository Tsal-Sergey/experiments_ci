"use strict";
const Promise = require("bluebird");
const restify = require('restify');
const cp = require('child_process');

var server = restify.createServer({version: '0.0.1'});
server.use(restify.fullResponse());
server.use(restify.bodyParser());
server.use(restify.queryParser());

server.get("test1",function (req, res, next) {
    res.json({"prop":"test2"});
    next();
});
server.listen(8766, function(){
    process.send &&process.send({ foo: 'success 1' });
});





