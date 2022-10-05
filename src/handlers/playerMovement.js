import constants from '../constants/index.js';

export default function playerMovement(player) {
    onKeyDown(constants.keyboard.INPUT_FORWARD, () => {
        if (player.pos.y > player.width / 2) {
            player.move(0, -constants.game.CAR_SPEED);
        }
    });

    onKeyDown(constants.keyboard.INPUT_LEFT, () => {
        player.move(-constants.game.CAR_SPEED, 0);
    });

    onKeyDown(constants.keyboard.INPUT_BACKWARD, () => {
        if (player.pos.y < height() - player.width / 2) {
            player.move(0, constants.game.CAR_SPEED);
        }
    });

    onKeyDown(constants.keyboard.INPUT_RIGHT, () => {
        player.move(constants.game.CAR_SPEED, 0);
    });

    onKeyDown(constants.keyboard.INPUT_BOOST, () => {

    });
}