import constants from '../constants/index.js';

function addButton(label, position, c) {
    add([
        pos(position),
        rect(35 * label.length, 50),
        outline(4, BLACK),
        area(),
        origin('center')
    ]);

    const button = add([
        text(label, { size: constants.fontsize.TITLE_2 }),
        pos(position),
        area({ cursor: 'pointer' }),
        origin('center')
    ]);

    button.onClick(c);
}

function addInput(defaultLabel, position) {
    const input = add([
        text(defaultLabel, { size: constants.fontsize.TEXT, font: 'sink' }),
        pos(position),
        area({ cursor: 'pointer' }),
        origin('center'),
    ]);

    onCharInput((char) => {
        input.text += char;
    });

    onKeyPressRepeat('backspace', () => {
        input.text = input.text.substring(0, input.text.length - 1);
    });

    return input;
}

export default {
    addButton,
    addInput
}