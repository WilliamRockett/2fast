import constants from '../constants/index.js';

export default function player() {
    const player = add([
        sprite('car_1_0_damage', { width: 70, height: 143 }),
        pos(constants.game.ROAD_WIDTH / 2, height() - 100),
        area({ scale: 0.9 }),
        origin('center'),
        health(constants.game.PLAYER_CAR_HEALTH),
        layer('game'),
        'player',
    ]);

    return player;
}