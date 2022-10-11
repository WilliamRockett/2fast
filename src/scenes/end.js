import constants from '../constants/index.js';

export default function end() {
    scene('end', (args) => {
        add([
            text('Perdu!', { size: constants.fontsize.TITLE_1 }),
            origin('center'),
            pos(width() / 2, height() / 2)
        ]);
        add([
            text('ESPACE pour rejouer ou ECHAP pour quitter', { size: constants.fontsize.TITLE_2 }),
            pos(width() / 2, height() / 2 + 70),
            origin('center')
        ]);
        add([
            text('Distance:' + args.score / 100 + 'kms', { size: constants.fontsize.TITLE_2 }),
            pos(width() / 2, height() / 2 + 130),
            origin('center')
        ]);
        add([
            text('Depassements:' + args.overtake, { size: constants.fontsize.TITLE_2 }),
            pos(width() / 2, height() / 2 + 170),
            origin('center')
        ]);
        add([
            text('Kills:' + args.kills, { size: constants.fontsize.TITLE_2 }),
            pos(width() / 2, height() / 2 + 210),
            origin('center')
        ]);

        onKeyPress(constants.keyboard.INPUT_BOOST, () => go('game'));
        onKeyPress(constants.keyboard.INPUT_ESCAPE, () => go('menu'));
    })
}