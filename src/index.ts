import express from 'express';
import {Server as SocketIO} from 'socket.io';
import {Server} from 'http';
import {default as Api_v0, setupSocketIO as SocketIOApi_v0} from './routes';


const app = express();

app.use('/v0', Api_v0)

const http = new Server(app);
const io = new SocketIO(http)

io.on('connection', SocketIOApi_v0)

export default http;
