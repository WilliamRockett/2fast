import { io } from 'socket.io-client';
import constants from '../constants/index.js';

let socket = null;

socket = socket ?? io(`${constants.online.SERVER_IP}:${constants.online.SERVER_PORT}`);

socket.on('connect', () => {
    debug.log(`Connecte au serveur ${constants.online.SERVER_IP}:${constants.online.SERVER_PORT}`);
});

socket.io.on('reconnect_attempt', () => {
    debug.log('Connexion au serveur perdue');
});

export default socket;