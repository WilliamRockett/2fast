import constants from '../constants/index.js';
import * as handlers from '../handlers/index.js';
import * as logic from '../logic/index.js';

export default function gameScene() {
    scene('game', () => {
        layers([
            'background',
            'road',
            'obstacle',
            'game',
            'car',
            'ui'
        ]);

        let player = logic.player();
        logic.roads(player);
        handlers.collisions();
        handlers.playerMovement(player);

        add([sprite('label_bar', { width: 340, height: 120 }), pos(0, 50), opacity(0.7), layer('ui')]);
        const score = add([text('Distance:' + player.score, { size: constants.fontsize.TEXT }), pos(10, 70), layer('ui')]);
        const overtake = add([text('Depassements:' + player.overtake, { size: constants.fontsize.TEXT }), pos(10, 90), layer('ui')]);
        const kills = add([text('Kills:' + player.nitro, { size: constants.fontsize.TEXT }), pos(10, 110), layer('ui')]);
        const nitro = add([text('Nitro:' + player.nitro, { size: constants.fontsize.TEXT }), pos(10, 130), layer('ui')]);

        setInterval(() => {
            if (!player.dead) {
                logic.enemy();
            }
        }, Math.random() * (900 - 200 + 1) + 200);

        setInterval(() => {
            if (!player.dead) {
                logic.jumpingPad(player);
            }
        }, Math.random() * (10000 - 5000 + 1) + 5000);

        onUpdate('enemy', (enemy) => {
            if (enemy.pos.y > player.pos.y && !enemy.overtaken) {
                player.overtake++;
                enemy.overtaken = true;
                overtake.text = "Depassements:" + player.overtake;
            }
            if (enemy.pos.y > height() + enemy.height) {
                destroy(enemy);
            }
        });

        onUpdate('player', (player) => {
            score.text = "Distance:" + player.score / 100 + 'kms';
            nitro.text = "Nitro:" + player.nitro;
            kills.text = "Kills:" + player.kills;
        });
    });
}
