import constants from '../constants/index.js';

function addButton(label, position, c) {
    const button = add([
        text(label, { size: constants.fontsize.TITLE_1 }),
        pos(position),
        area({ cursor: 'pointer' }),
        origin('center')
    ]);

    button.onClick(c);
}

export default {
    addButton
}