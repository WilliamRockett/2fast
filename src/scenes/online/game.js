import constants from '../../constants/index.js';
import * as handlers from '../../handlers/index.js';
import * as logic from '../../logic/index.js';
import socket from '../../utils/socket.js';

export default function game() {
    scene('onlineGame', () => {
        layers([
            'background',
            'road',
            'obstacle',
            'game',
            'car',
            'ui'
        ]);

        socket.on('playerJoined', (data) => {
            console.log(data)
        });

        // const player = logic.player();
        // logic.roads(player);
        // handlers.collisions();
        // handlers.playerMovement(player);
    });
}
