import constants from '../constants/index.js';
import * as handlers from '../handlers/index.js';
import * as logic from '../logic/index.js';

export default function onlineTest() {
    scene('onlineTest', () => {
        layers([
            'background',
            'road',
            'obstacle',
            'game',
            'car',
            'ui'
        ]);

        // const player = logic.player();
        // logic.roads(player);
        // handlers.collisions();
        // handlers.playerMovement(player);
    });
}
