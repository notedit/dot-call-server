'use strict';



const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jwt-simple');
const sdpTransform = require('sdp-transform');
const EventEmitter = require('events').EventEmitter;
const expressWs = require('express-ws');

const logger = require('./logger')();

const app = express();
const webServer = http.createServer(app);
const expressws  = expressWs(app, webServer);



class Peer extends EventEmitter {

	constructor(server, socket){
		super()
		this.setMaxListeners(Infinity)

        this._server = server
        this._socket = socket
        this._id = socket.id 

        this._closed = false;


        socket.on('message', async (msg) =>{
			try {
				await this.onMessage(msg);
			} catch (error) {
				logger.error('onMessage : ', error);
			}
		});

		socket.on('close',() => {
			

			self._socket = null;
			this.close();
		});

    }
    get id(){
        return this._id
    }
    async onMessage(message){
        
		let self = this;
		logger.debug('message ', message);

    }
    close(){
        
    }

}



class Server extends EventEmitter {
    constructor(){
        super()
        this.setMaxListeners(Infinity)

        this.peers  = new Map(); 
    }
}


const server = new Server();


app.ws('/ws', async (socket, req) => {

	socket.id =  udid('s' + (new Date()).getTime())
    let peer = new Peer(server,socket);

    server.peers.set(peer.id,peer);

	peer.on('close',() =>{
		logger.debug('server  peer close ', peer.id);
		server.peers.delete(peer.id);
	});

});



webServer.listen(config.web.webPort, config.web.hostname,function() {

});


process.on('uncaughtException', function(err) {
    console.error('Error caught in uncaughtException event: ', err);
});

process.on('unhandleRejection', function(err,promise){
	console.error('unhandleRejection: ',  err);
});
