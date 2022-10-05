import constants from '../constants/index.js';

export default function roads() {
    for (let lane = 0; lane < constants.game.ROAD_LANES; lane++) {
        add([
            sprite('road_main', { width: constants.game.ROAD_WIDTH, height: height() }),
            pos(constants.game.ROAD_WIDTH * lane, 0),
            area(),
            cleanup(),
            layer('road'),
            { lane: lane },
            "road"
        ]);

        add([
            sprite('road_main', { width: constants.game.ROAD_WIDTH, height: height() }),
            pos(constants.game.ROAD_WIDTH * lane, -height()),
            area(),
            layer('road'),
            { lane: lane },
            "road"
        ]);
    }

    onUpdate('road', (road) => {
        road.move(0, constants.game.BACKGROUND_SPEED);
        if (road.pos.y > height()) {
            destroy(road);
            add([
                sprite('road_main', { width: constants.game.ROAD_WIDTH, height: height() }),
                pos(constants.game.ROAD_WIDTH * road.lane, -height()),
                area(),
                layer('road'),
                { lane: road.lane },
                "road"
            ]);
        }
    });
}