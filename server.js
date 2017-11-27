// dependencies
const express = require('express')
const http = require('http');

const app = express();
const _Server = http.createServer(app);

const io = require('socket.io')(_Server);

const port = process.env.PORT || 3000;

_Server.listen(port,()=>console.log(`signaling server is listening on port ${port} .... `));
