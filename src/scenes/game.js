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

        let player = logic.player();
        const score = add([text('Voitures depassees:' + player.score, { size: 18 }), pos(10, 50), layer('ui'), 'score']);

        logic.roads();
        handlers.collisions();
        handlers.playerMovement(player);

        setInterval(() => {
            logic.enemy()
        }, Math.floor(Math.random() * (1500 - 500 + 1) + 500));

        onUpdate('enemy', (enemy) => {
            if (enemy.pos.y > height() + enemy.height) {
                destroy(enemy);
                player.score++;
                score.text = "Voitures depassees:" + player.score;
            }
        });
    });
}
