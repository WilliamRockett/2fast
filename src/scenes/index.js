import menu from './menu.js';
import game from './game.js';
import onlineTest from './onlineTest.js';
import end from './end.js';

export function load() {
    menu();
    game();
    onlineTest();
    end();
}