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
            nitro: 100,
            powerUps: {

            }
        }
    ]);

    return player;
}