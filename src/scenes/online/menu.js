import constants from '../../constants/index.js';
import utils from '../../utils/index.js';
import socket from '../../utils/socket.js';

export default function menu() {
    scene('onlineMenu', () => {
        add([
            text('2 joueurs en ligne', { size: constants.fontsize.TITLE_1 }),
            origin('center'),
            pos(width() / 2, height() / 2)
        ]);

        add([
            text(`Connexion au serveur:${constants.online.SERVER_IP}:${constants.online.SERVER_PORT}`, { size: constants.fontsize.TINY }),
            origin('center'),
            pos(width() / 2, height() / 2 + 50)
        ]);

        const gameIdInput = utils.ui.addInput('#0001', vec2(width() / 2, height() / 2 + 90));

        utils.ui.addButton('Rejoindre', vec2(width() / 2, height() / 2 + 200), () => {
            socket.emit('join', gameIdInput.text, () => {
                
                go('onlineGame');
            });
        });
    });
}
