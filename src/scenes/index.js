import menu from './menu.js';
import game from './game.js';
import end from './end.js';

export function load() {
    menu();
    game();
    end();
}