import constants from '../constants/index.js';

export default function enemy() {
    const roadStart = ((width() - constants.game.ROAD_LANES * constants.game.ROAD_WIDTH) / 2) + 30;
    const roadEnd = (roadStart + constants.game.ROAD_LANES * constants.game.ROAD_WIDTH) - 70;

    const enemy = add([
        sprite('car_2_0_damage', { width: 87, height: 186 }),
        pos(Math.floor(Math.random() * (roadEnd - roadStart + 1) + roadStart), -100),
        area({ scale: 0.8 }),
        origin('center'),
        health(constants.game.PLAYER_CAR_HEALTH),
        layer('game'),
        move(-990, constants.game.ENEMIES_CAR_SPEED),
        'enemy',
        {
            overtaken: false,
            kill() {
                enemy.use(sprite('car_2_broken', { width: 87, height: 186 }));
                enemy.use(rotate(-30));
            }
        }
    ]);

    return enemy;
}