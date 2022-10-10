import constants from '../constants/index.js';

export default function jumpingPad(player) {
    const roadStart = ((width() - constants.game.ROAD_LANES * constants.game.ROAD_WIDTH) / 2) + 30;
    const roadEnd = (roadStart + constants.game.ROAD_LANES * constants.game.ROAD_WIDTH) - 70;

    const jumpingPad = add([
        sprite('jumping_pad', { width: constants.game.ROAD_WIDTH / 3, height: 100 }),
        pos(Math.random() * (roadEnd - roadStart + 1) + roadStart, -100),
        area(),
        layer('obstacle'),
        move(-990, constants.game.BACKGROUND_SPEED),
        'jumping_pad'
    ]);

    jumpingPad.onUpdate(() => {
        if (jumpingPad.pos.y > height()) {
            destroy(jumpingPad);
        }

        if (player.dead) {
            jumpingPad.unuse('move');
        }
    });

    return jumpingPad;
}