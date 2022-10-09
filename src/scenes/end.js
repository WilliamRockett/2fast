import constants from '../constants/index.js';

export default function endScene() {
    scene('end', (args) => {
        add([
            text('Perdu\n\nAppuyez sur ENTER pour rejouer', { size: 24 }),
            origin('center'),
            pos(width() / 2, height() / 2)
        ])
        add([
            text('Score:' + args.score + ' voitures depassees', { size: 32 }),
            pos(width() / 2, height() / 2 + 80),
            origin('center')
        ]);

        onKeyPress(constants.keyboard.INPUT_ENTER, () => go('game'));
    })
}