import menu from './menu.js';
import game from './game.js';
import end from './end.js';

import onlineMenu from './online/menu.js';
import onlineGame from './online/game.js';

export function load() {
    menu();
    game();
    end();

    onlineMenu();
    onlineGame();
}