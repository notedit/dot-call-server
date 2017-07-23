'use strict';



const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jwt-simple');
const sdpTransform = require('sdp-transform');
const EventEmitter = require('events').EventEmitter;
const expressWs = require('express-ws');


const app = express();
const webServer = http.createServer(app);
const expressws  = expressWs(app, webServer);



class Peer extends EventEmitter {

	constructor(server, socket){
		super()
		this.setMaxListeners(Infinity)
    }

}



class Server extends EventEmitter {
    constructor(){
        super()
        this.setMaxListeners(Infinity)
    }
}



app.ws('/ws', async (socket, req) => {


});



webServer.listen(config.web.webPort, config.web.hostname,function() {

});


process.on('uncaughtException', function(err) {
    console.error('Error caught in uncaughtException event: ', err);
});

process.on('unhandleRejection', function(err,promise){
	console.error('unhandleRejection: ',  err);
});
