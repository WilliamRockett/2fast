import constants from '../constants/index.js';

export default function playerMovement(player) {
    onKeyDown(constants.keyboard.INPUT_FORWARD, () => {
        if (!player.dead && !player.isJumping) {
            if (player.pos.y > player.height / 2) {
                player.move(0, -constants.game.CAR_SPEED);
            }
        }
    });

    onKeyDown(constants.keyboard.INPUT_LEFT, () => {
        if (!player.dead && !player.isJumping) {
            player.move(-constants.game.CAR_SPEED - 50, 0);
            player.use(rotate(-5));
        }
    });
    onKeyDown(constants.keyboard.INPUT_BACKWARD, () => {
        if (!player.dead) {
            player.isBraking = true;
            if (!player.isJumping) {
                if (player.pos.y < height() - player.height / 2) {
                    player.move(0, constants.game.CAR_SPEED);
                }
            }
        }
    });

    onKeyRelease(constants.keyboard.INPUT_BACKWARD, () => {
        player.isBraking = false;
    });

    onKeyDown(constants.keyboard.INPUT_RIGHT, () => {
        if (!player.dead && !player.isJumping) {
            player.move(constants.game.CAR_SPEED + 50, 0);
            player.use(rotate(5));
        }
    });

    onKeyRelease(constants.keyboard.INPUT_RIGHT, () => {
        if (!player.dead) {
            player.use(rotate(0));
        }
    });

    onKeyRelease(constants.keyboard.INPUT_LEFT, () => {
        if (!player.dead) {
            player.use(rotate(0));
        }
    });

    onKeyDown(constants.keyboard.INPUT_BOOST, () => {
        if (!player.dead && player.nitro > 0) {
            player.nitroEnabled = true;
        }
    });

    onKeyRelease(constants.keyboard.INPUT_BOOST, () => {
        player.nitroEnabled = false;
    });
}