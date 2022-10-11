import constants from '../constants/index.js';

export default function sprinter() {
    const roadStart = ((width() - constants.game.ROAD_LANES * constants.game.ROAD_WIDTH) / 2) + 30;
    const roadEnd = (roadStart + constants.game.ROAD_LANES * constants.game.ROAD_WIDTH) - 70;
    const spawnX = rand(roadEnd, roadStart);

    const sprinter = add([
        sprite('car_3_0_damage', { width: 65, height: 130 }),
        pos(spawnX, height() + 150),
        area({ scale: 0.9 }),
        origin('center'),
        layer('game'),
        cleanup({ delay: 3 }),
        'sprinter',
        { warningCount: 0 }
    ]);

    add([
        sprite('nitro_low', { width: 100, height: 213 }),
        pos(),
        follow(sprinter, vec2(-50, 60)),
        area({ height: 213 / 2.2, width: 100 / 2, offset: vec2(24, 0) }),
        cleanup({ delay: 3 }),
        layer('game')
    ]);

    const cancelLoop = loop(1, () => {
        const warning = add([
            text('/!\\', { size: constants.fontsize.TITLE_2 }),
            pos(spawnX, height() - 50),
            origin('center'),
            color(RED),
            layer('ui')
        ]);
        wait(0.5, () => {
            destroy(warning);
            sprinter.warningCount++;
        });
    });

    sprinter.onUpdate(() => {
        if (sprinter.warningCount === 3) {
            cancelLoop();
            sprinter.use(move(990, constants.game.SPRINTER_CAR_SPEED));
            sprinter.warningCount = 0;
        }
    });

    return sprinter;
}