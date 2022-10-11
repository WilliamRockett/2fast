import constants from '../constants/index.js';

export default function player() {
    const defaultCarWidth = 70;
    const defaultCarHeight = 143;
    let nitroSprite = null;

    const player = add([
        sprite('car_1_0_damage', { width: defaultCarWidth, height: defaultCarHeight }),
        pos((width() - constants.game.ROAD_LANES * constants.game.ROAD_WIDTH) / 2 + constants.game.ROAD_WIDTH / 2, height() - 80),
        area({ scale: 0.9 }),
        origin('center'),
        layer('car'),
        'player',
        {
            dead: false,
            isBraking: false,
            isJumping: false,
            score: 0,
            overtake: 0,
            kills: 0,
            nitro: constants.game.MAX_NITRO,
            nitroEnabled: false,
            powerUps: {
                shield: false
            },
            kill() {
                if (player.powerUps.shield) {
                    player.powerUps.shield = false
                    shake(10);
                } else {
                    player.dead = true;
                    player.use(sprite('car_1_1_damage', { width: defaultCarWidth, height: defaultCarHeight }));
                    player.use(rotate(30));
                    shake(50);
                    wait(0.5, () => {
                        go('end', { score: player.score, overtake: player.overtake, kills: player.kills });
                    });
                }
            },
            jump() {
                const delay = 0.05;
                player.isJumping = true;

                wait(delay, () => {
                    player.use(sprite('car_1_0_damage', { width: defaultCarWidth + 5, height: defaultCarHeight + 5 }));
                    wait(delay, () => {
                        player.use(sprite('car_1_0_damage', { width: defaultCarWidth + 10, height: defaultCarHeight + 10 }));
                        wait(delay, () => {
                            player.use(sprite('car_1_0_damage', { width: defaultCarWidth + 15, height: defaultCarHeight + 10 }));
                            wait(delay, () => {
                                player.use(sprite('car_1_0_damage', { width: defaultCarWidth + 20, height: defaultCarHeight + 20 }));
                                wait(0.7, () => {
                                    player.use(sprite('car_1_0_damage', { width: defaultCarWidth + 15, height: defaultCarHeight + 15 }));
                                    wait(delay / 2, () => {
                                        player.use(sprite('car_1_0_damage', { width: defaultCarWidth + 10, height: defaultCarHeight + 10 }));
                                        wait(delay / 2, () => {
                                            player.use(sprite('car_1_0_damage', { width: defaultCarWidth + 5, height: defaultCarHeight + 5 }));
                                            wait(delay / 2, () => {
                                                player.use(sprite('car_1_0_damage', { width: defaultCarWidth, height: defaultCarHeight }));
                                                player.isJumping = false;

                                                add([
                                                    sprite('smoke_1', { width: 778 / 5, height: 663 / 5 }),
                                                    pos(player.pos.x - 65, player.pos.y - 80),
                                                    move(-990, constants.game.BACKGROUND_SPEED),
                                                    area(),
                                                    cleanup(),
                                                    layer('game'),
                                                    'smoke',
                                                    {
                                                        rotation: 0,
                                                        opacity: 1,
                                                    }
                                                ]);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            },
        }
    ]);

    onUpdate('smoke', (smoke) => {
        smoke.rotation += 10 * dt();
        smoke.opacity -= 0.05;
        smoke.use(rotate(smoke.rotation));
        smoke.use(opacity(smoke.opacity));
    });

    player.onUpdate(() => {
        player.score++;

        if (player.nitroEnabled && !player.dead) {
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
                        area({ height: 213 / 1.5, width: 100 / 2, offset: vec2(24, 0) }),
                        layer('car'),
                        'nitro',
                        {
                            player: player
                        }
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

        if (player.isBraking) {
            add([
                sprite('stop_signal', { width: 394 / 4, height: 135 / 4 }),
                pos(),
                opacity(0.2),
                follow(player, vec2(-73, 46)),
                layer('car'),
                'carbrake'
            ]);

            add([
                sprite('stop_signal', { width: 99, height: 34 }),
                pos(),
                opacity(0.2),
                follow(player, vec2(-27, 46)),
                layer('car'),
                'carbrake'
            ]);
        } else {
            destroyAll('carbrake');
        }
    });

    return player;
}