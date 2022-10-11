import constants from '../constants/index.js';

export default function shield() {
    const roadStart = ((width() - constants.game.ROAD_LANES * constants.game.ROAD_WIDTH) / 2) + 30;
    const roadEnd = (roadStart + constants.game.ROAD_LANES * constants.game.ROAD_WIDTH) - 70;

    const shield = add([
        sprite('shield', { width: 43, height: 43 }),
        pos(rand(roadEnd, roadStart), -50),
        area(),
        origin('center'),
        layer('game'),
        cleanup({ delay: 3 }),
        move(-990, constants.game.BACKGROUND_SPEED),
        'shield'
    ]);

    return shield;
}