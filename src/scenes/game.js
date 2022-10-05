import constants from '../constants/index.js';
import * as handlers from '../handlers/index.js';
import * as logic from '../logic/index.js';

export default function gameScene() {
    scene('game', () => {
        layers([
            'background',
            'road',
            'game',
            'ui'
        ]);

        logic.roads();
        let player = logic.player();
        handlers.playerMovement(player);
    });
}
