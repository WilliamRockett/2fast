import constants from '../constants/index.js';

export default function endScene() {
    scene('end', (args) => {
        add([
            text('Perdu!\n\nAppuyez sur ESPACE pour rejouer', { size: constants.fontsize.TITLE_1 }),
            origin('center'),
            pos(width() / 2, height() / 2)
        ]);
        add([
            text('Distance:' + args.score / 100 + 'kms', { size: constants.fontsize.TITLE_2 }),
            pos(width() / 2, height() / 2 + 100),
            origin('center')
        ]);
        add([
            text('Depassements:' + args.overtake, { size: constants.fontsize.TITLE_2 }),
            pos(width() / 2, height() / 2 + 140),
            origin('center')
        ]);
        add([
            text('Kills:' + args.kills, { size: constants.fontsize.TITLE_2 }),
            pos(width() / 2, height() / 2 + 180),
            origin('center')
        ]);

        onKeyPress(constants.keyboard.INPUT_BOOST, () => go('game'));
    })
}