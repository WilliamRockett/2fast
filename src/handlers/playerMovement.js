import constants from '../constants/index.js';

export default function playerMovement(player) {
    onKeyDown(constants.keyboard.INPUT_FORWARD, () => {
        player.move(0, -constants.game.CAR_SPEED);
    });

    onKeyDown(constants.keyboard.INPUT_LEFT, () => {
        player.move(-constants.game.CAR_SPEED, 0);
    });

    onKeyDown(constants.keyboard.INPUT_BACKWARD, () => {
        player.move(0, constants.game.CAR_SPEED);
    });

    onKeyDown(constants.keyboard.INPUT_RIGHT, () => {
        player.move(constants.game.CAR_SPEED, 0);
    });

    onKeyDown(constants.keyboard.INPUT_BOOST, () => {

    });
}