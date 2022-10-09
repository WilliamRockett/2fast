import constants from '../constants/index.js';

let nitro;

export default function player() {
    const player = add([
        sprite('car_1_0_damage', { width: 70, height: 143 }),
        pos((width() - constants.game.ROAD_LANES * constants.game.ROAD_WIDTH) / 2 + constants.game.ROAD_WIDTH / 2, height() - 80),
        area({ scale: 0.9 }),
        origin('center'),
        health(constants.game.PLAYER_CAR_HEALTH),
        // solid(),
        layer('game'),
        'player',
        {
            dead: false,
            score: 0,
            nitro: 100,
            powerUps: {

            },
            enableNitro() {
                // TODO:
                if (this.enableNitro && this.nitro > 0) {
                    nitro = add([
                        sprite('nitro_low', { width: 100, height: 213 }),
                        pos(),
                        follow(player, vec2(-50, 60)),
                        area(),
                        layer('game'),
                        'nitro'
                    ]);
                }
            },
            disableNitro(){
                destroy(nitro);
            },
            kill() {
                player.dead = true;
                player.use(sprite('car_1_1_damage', { width: 70, height: 143 }));
                player.use(rotate(30));
                shake(50);
                wait(0.5, () => {
                    go('end', { score: player.score });
                });
            }
        }
    ]);

    return player;
}