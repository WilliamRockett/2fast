import constants from '../constants/index.js';

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
            nitro: constants.game.MAX_NITRO,
            nitroEnabled: false,
            powerUps: {

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

    let nitroSprite = null;

    player.onUpdate(() => {
        console.log(player.pos.y)
        if (player.nitroEnabled) {
            if (player.nitro > 0) {
                player.nitro -= Math.round((constants.game.MAX_NITRO * 1.5) * dt());

                if (player.pos.y > player.height / 2) {
                    player.pos.y -= 5;
                }

                if (nitroSprite === null) {
                    nitroSprite = add([
                        sprite('nitro_low', { width: 100, height: 213 }),
                        pos(),
                        follow(player, vec2(-50, 60)),
                        area(),
                        layer('game'),
                        'nitro'
                    ]);
                }
            } else {
                destroy(nitroSprite);
                nitroSprite = null;
            }
        } else {
            // regen nitro
            if (player.nitro < constants.game.MAX_NITRO) {
                player.nitro += Math.round(constants.game.MAX_NITRO * dt());
            }

            if (nitroSprite !== null) {
                destroy(nitroSprite);
                nitroSprite = null;
            }
        }
    });

    return player;
}