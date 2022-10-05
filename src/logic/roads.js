import constants from '../constants/index.js';

export default function roads() {
    const borderSize = width() - constants.game.ROAD_LANES * constants.game.ROAD_WIDTH;

    for (let lane = 0; lane < constants.game.ROAD_LANES; lane++) {
        if (lane === 0) {
            add([
                sprite('soil_tile', { width: borderSize / 2, height: height() }),
                pos(0, 0),
                area(),
                layer('background'),
                'background'
            ]);
            add([
                sprite('soil_tile', { width: borderSize / 2, height: height() }),
                pos(0, -height()),
                area(),
                layer('background'),
                'background'
            ]);
        }
        add([
            sprite('road_main', { width: constants.game.ROAD_WIDTH, height: height() }),
            pos(constants.game.ROAD_WIDTH * lane + borderSize / 2, 0),
            area(),
            cleanup(),
            layer('road'),
            { lane: lane },
            'road'
        ]);
        add([
            sprite('road_main', { width: constants.game.ROAD_WIDTH, height: height() }),
            pos(constants.game.ROAD_WIDTH * lane + borderSize / 2, -height()),
            area(),
            layer('road'),
            { lane: lane },
            'road'
        ]);
        if (lane === constants.game.ROAD_LANES - 1) {
            add([
                sprite('soil_tile', { width: borderSize / 2, height: height() }),
                pos(width() - borderSize / 2, 0),
                area(),
                layer('background'),
                'background'
            ]);
            add([
                sprite('soil_tile', { width: borderSize / 2, height: height() }),
                pos(width() - borderSize / 2, -height()),
                area(),
                layer('background'),
                'background'
            ]);
        }
    }

    onUpdate('road', (road) => {
        road.move(0, constants.game.BACKGROUND_SPEED);
        if (road.pos.y > height()) {
            destroy(road);
            add([
                sprite('road_main', { width: constants.game.ROAD_WIDTH, height: height() }),
                pos(constants.game.ROAD_WIDTH * road.lane + borderSize / 2, -height()),
                area(),
                layer('road'),
                { lane: road.lane },
                'road'
            ]);
        }
    });

    onUpdate('background', (background) => {
        background.move(0, constants.game.BACKGROUND_SPEED);
        if (background.pos.y > height()) {
            destroy(background);
            add([
                sprite('soil_tile', { width: borderSize / 2, height: height() }),
                pos(background.pos.x === 0 ? 0 : width() - borderSize / 2, -height()),
                area(),
                layer('background'),
                'background'
            ]);
        }
    });
}