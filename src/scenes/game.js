import constants from '../constants/index.js';
import * as handlers from '../handlers/index.js';
import * as logic from '../logic/index.js';

export default function game() {
    scene('game', () => {
        layers([
            'background',
            'road',
            'obstacle',
            'game',
            'car',
            'ui'
        ]);

        const player = logic.player();
        logic.roads(player);
        handlers.collisions();
        handlers.playerMovement(player);

        let powerUpsIcons = { shield: false };
        add([sprite('label_bar', { width: 340, height: 120 }), pos(0, 50), opacity(0.7), layer('ui')]);
        const score = add([text('Distance:' + player.score, { size: constants.fontsize.TEXT }), pos(10, 70), layer('ui')]);
        const overtake = add([text('Depassements:' + player.overtake, { size: constants.fontsize.TEXT }), pos(10, 90), layer('ui')]);
        const kills = add([text('Kills:' + player.nitro, { size: constants.fontsize.TEXT }), pos(10, 110), layer('ui')]);
        const nitro = add([text('Nitro:' + player.nitro, { size: constants.fontsize.TEXT }), pos(10, 130), layer('ui')]);

        setInterval(() => {
            if (!player.dead) {
                logic.enemy();
            }
        }, randi(900, 200));

        setInterval(() => {
            if (!player.dead) {
                logic.sprinter();
            }
        }, randi(30000, 15000));

        setInterval(() => {
            if (!player.dead) {
                logic.jumpingPad(player);
            }
        }, randi(10000, 5000));

        setInterval(() => {
            if (!player.dead && !player.powerUps.shield) {
                logic.shield();
            }
        }, randi(20000, 2000));

        onUpdate('enemy', (enemy) => {
            if (enemy.pos.y > player.pos.y && !enemy.overtaken) {
                player.overtake++;
                enemy.overtaken = true;
                overtake.text = "Depassements:" + player.overtake;
            }
        });

        onUpdate('player', (player) => {
            score.text = "Distance:" + player.score / 100 + 'kms';
            nitro.text = "Nitro:" + player.nitro;
            kills.text = "Kills:" + player.kills;

            if (player.powerUps.shield) {
                if (!powerUpsIcons.shield) {
                    powerUpsIcons.shield = add([sprite('shield', { width: 43, height: 43 }), pos(10, 180), layer('ui')]);
                }
            } else {
                destroy(powerUpsIcons.shield);
                powerUpsIcons.shield = false;
            }
        });
    });
}
