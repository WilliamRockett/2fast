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

        logic.roads(player);
        handlers.collisions();
        handlers.playerMovement(player);

        setInterval(() => {
            if (!player.dead) {
                logic.enemy()
            }
        }, Math.floor(Math.random() * (900 - 200 + 1) + 200));

        onUpdate('enemy', (enemy) => {
            if (enemy.pos.y > player.pos.y && !enemy.overtaken) {
                player.score++;
                enemy.overtaken = true;
                score.text = "Voitures depassees:" + player.score;
            }
            if (enemy.pos.y > height() + enemy.height) {
                destroy(enemy);
            }
        });
    });
}
