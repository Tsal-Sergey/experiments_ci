"use strict";
const Promise = require("bluebird");
const restify = require('restify');
const cp = require('child_process');

var server = restify.createServer({version: '0.0.1'});
server.use(restify.fullResponse());
server.use(restify.bodyParser());
server.use(restify.queryParser());

server.get("test",function (req, res, next) {
    res.json({"prop":"val0011"});
    next();
});
server.listen(8766, function(){
    process.send({ foo: 'bar0011' });
});






