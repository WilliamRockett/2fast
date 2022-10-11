import constants from '../constants/index.js';
import utils from '../utils/index.js';

export default function menu() {
    scene('menu', () => {
        add([
            text('2Fast', { size: constants.fontsize.TITLE_1 }),
            origin('center'),
            pos(width() / 2, height() / 2)
        ]);

        utils.ui.addButton('1 joueur', vec2(width() / 2, height() / 2 + 100), () => {
            go('game');
        });

        utils.ui.addButton('2 joueurs en ligne', vec2(width() / 2, height() / 2 + 150), () => {
            //TODO:
        });
    })
}
