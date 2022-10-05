import kaboom from 'kaboom';
import * as loadScene from './scenes/index.js';
import * as assets from './assets/index.js';
import constants from './constants/index.js';

kaboom({
    background: [120, 120, 120],
    scale: 1,
    font: 'sinko',
    logMax: constants.kaboom.DEBUG_LOG_MAX_MESSAGES
});

debug.inspect = constants.kaboom.DEBUG_INSPECT;
debug.showLog = constants.kaboom.DEBUG_LOG;

assets.load();

loadScene.game();
loadScene.end();

go('game');